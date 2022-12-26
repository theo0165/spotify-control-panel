import { Controller } from '@scp/types';
import { spotifyUrlBuilder } from '@scp/utils';

const PauseController: Controller = async (req, res) => {
  if (!req.session.token || !req.session.token.accessToken) {
    return res.status(401).json({ error: 'No user' });
  }

  const pauseRequest = await fetch(spotifyUrlBuilder('/me/player/play'), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${req.session.token.accessToken}`,
    },
  });

  if (!pauseRequest.ok) {
    console.log(await pauseRequest.json());

    return res.status(pauseRequest.status).json({ error: 'Could not pause' });
  }

  return res.json({ message: 'OK' });
};

export default PauseController;
