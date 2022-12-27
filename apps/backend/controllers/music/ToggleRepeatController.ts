import { Controller } from '@scp/types';
import { spotifyUrlBuilder } from '@scp/utils';

const ToggleRepeatController: Controller = async (req, res) => {
  if (!req.session.token || !req.session.token.accessToken) {
    return res.status(401).json({ error: 'No user' });
  }

  if (!req.body || typeof req.body.state !== 'boolean') {
    return res.status(400).json({ error: 'Missing state parameter' });
  }

  const repeatRequest = await fetch(
    spotifyUrlBuilder(`/me/player/repeat?state=${req.body.state ? 'context' : 'off'}`),
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${req.session.token.accessToken}`,
      },
    },
  );

  if (!repeatRequest.ok) {
    console.log(await repeatRequest.json());

    return res.status(repeatRequest.status).json({ error: 'Could not toggle shuffle' });
  }

  return res.json({ message: 'OK' });
};

export default ToggleRepeatController;
