import { Controller } from '@scp/types';
import { spotifyUrlBuilder } from '@scp/utils';

const PreviousController: Controller = async (req, res) => {
  if (!req.session.token || !req.session.token.accessToken) {
    return res.status(401).json({ error: 'No user' });
  }

  const previousRequest = await fetch(spotifyUrlBuilder('/me/player/previous'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${req.session.token.accessToken}`,
    },
  });

  if (!previousRequest.ok) {
    return res.status(previousRequest.status).json({ error: 'Could not go back' });
  }

  return res.json({ message: 'OK' });
};

export default PreviousController;
