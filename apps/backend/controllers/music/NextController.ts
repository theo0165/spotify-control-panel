import { Controller } from '@scp/types';
import { spotifyUrlBuilder } from '@scp/utils';

const NextController: Controller = async (req, res) => {
  if (!req.session.token || !req.session.token.accessToken) {
    return res.status(401).json({ error: 'No user' });
  }

  const nextRequest = await fetch(spotifyUrlBuilder('/me/player/next'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${req.session.token.accessToken}`,
    },
  });

  if (!nextRequest.ok) {
    return res.status(nextRequest.status).json({ error: 'Could not skip' });
  }

  return res.json({ message: 'OK' });
};

export default NextController;
