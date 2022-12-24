import { Controller } from '@scp/types';
import { spotifyUrlBuilder } from '@scp/utils';

const PlayController: Controller = async (req, res) => {
  if (!req.session.token || !req.session.token.accessToken) {
    return res.status(401).json({ error: 'No user' });
  }

  if (!req.body || !req.body.playlist) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  const { playlist, device }: { playlist: string; device?: string } = req.body;

  if (!playlist.startsWith('spotify') || playlist.split(':').length !== 3) {
    return res.status(400).json({ error: 'Invalid playlist id' });
  }

  const playRequest = await fetch(
    spotifyUrlBuilder(`/me/player/play${device && `?device=${device}`}`),
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${req.session.token.accessToken}`,
      },
      body: JSON.stringify({
        context_uri: playlist,
      }),
    },
  );

  if (!playRequest.ok) {
    return res.status(playRequest.status).json({ error: 'Could not play' });
  }

  return res.json({ message: 'OK' });
};

export default PlayController;
