import { Controller } from '@scp/types';
import { spotifyUrlBuilder } from '@scp/utils';

const ToggleShuffleController: Controller = async (req, res) => {
  if (!req.session.token || !req.session.token.accessToken) {
    return res.status(401).json({ error: 'No user' });
  }

  if (!req.body || typeof req.body.state !== 'boolean') {
    return res.status(400).json({ error: 'Missing state parameter' });
  }

  const shuffleRequest = await fetch(
    spotifyUrlBuilder(`/me/player/shuffle?state=${req.body.state}`),
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${req.session.token.accessToken}`,
      },
    },
  );

  if (!shuffleRequest.ok) {
    console.log(await shuffleRequest.json());

    return res.status(shuffleRequest.status).json({ error: 'Could not toggle shuffle' });
  }

  return res.json({ message: 'OK' });
};

export default ToggleShuffleController;
