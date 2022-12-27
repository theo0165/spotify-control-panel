/* eslint-disable @typescript-eslint/indent */
import { ApiCurrentState, Controller } from '@scp/types';
import { spotifyUrlBuilder } from '@scp/utils';

const PlayStateController: Controller = async (req, res) => {
  if (!req.session || !req.session.token) {
    return res.status(401).json({ error: 'No user' });
  }

  const stateRequest = await fetch(spotifyUrlBuilder('/me/player'), {
    headers: {
      Authorization: `Bearer ${req.session.token.accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (stateRequest.status === 204) {
    return res.status(204).json({
      noState: true,
    });
  }

  if (!stateRequest.ok) {
    return res.status(500).json({
      error: 'Something went wrong',
    });
  }

  const playState = await stateRequest.json();

  const {
    context,
    progress_ms: progress,
    item,
    is_playing: isPlaying,
  } = playState as ApiCurrentState;

  console.log({ playState });

  let contextData = null;

  if (context?.href) {
    const contextRequest = await fetch(context?.href, {
      headers: {
        Authorization: `Bearer ${req.session.token.accessToken}`,
      },
    });

    if (contextRequest.ok) {
      const contextParsed = await contextRequest.json();

      contextData = {
        id: contextParsed.id,
        name: contextParsed.name,
        owner: contextParsed.owner.id,
      };
    }
  }

  if (!item) {
    return res.json({
      shuffle: playState.shuffle_state,
      repeat: playState.repeat_state,
      progress,
      duration: 0,
      isPlaying,
      song: {
        name: null,
        id: null,
        image: null,
      },
      artists: [],
      context: contextData || context?.uri,
    });
  }

  const { artists, duration_ms: duration, id, name, album } = item;
  const { images } = album;

  return res.json({
    shuffle: playState.shuffle_state,
    repeat: playState.repeat_state,
    progress,
    duration,
    isPlaying,
    song: {
      name,
      id,
      image: images ? images[0].url : null,
    },
    artists: artists.map(artist => ({ name: artist.name, id: artist.id })),
    context: contextData || context?.uri,
  });
};

export default PlayStateController;
