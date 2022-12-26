import { Controller } from '@scp/types';
import { spotifyUrlBuilder } from '@scp/utils';

const SetActiveDeviceController: Controller = async (req, res) => {
  if (!req.session.token || !req.session.token.accessToken) {
    return res.status(401).json({ error: 'No user' });
  }

  if (!req.body || !req.body.device) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  const { device }: { device: string } = req.body;

  const setRequest = await fetch(spotifyUrlBuilder('/me/player'), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${req.session.token.accessToken}`,
    },
    body: JSON.stringify({
      device_ids: [device],
      play: false,
    }),
  });

  if (!setRequest.ok) {
    return res.status(setRequest.status).json({ error: 'Could not switch device' });
  }

  return res.json({ message: 'OK' });
};

export default SetActiveDeviceController;
