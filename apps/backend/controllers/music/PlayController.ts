import { Controller } from '@scp/types';
import { spotifyUrlBuilder } from '@scp/utils';

const PlayController: Controller = async (req, res) => {
  if (!req.session.token || !req.session.token.accessToken) {
    return res.status(401).json({ error: 'No user' });
  }

  const playRequest = await fetch(spotifyUrlBuilder('/me/player/play'), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${req.session.token.accessToken}`,
    },
  });

  if (!playRequest.ok) {
    return res.status(playRequest.status).json({ error: 'Could not resume' });
  }

  return res.json({ message: 'OK' });
};

export default PlayController;
