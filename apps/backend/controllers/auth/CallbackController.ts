import { ApiUser, Controller } from '@scp/types';
import { getAuthToken, getSpofityData, isError } from '@scp/utils';

const CallbackController: Controller = async (req, res) => {
  const { code, state } = req.query;

  if (!code || !state || !req.session.state) {
    return res.status(400).json({ error: 'Invalid callback', code: 400 });
  }

  if (state !== req.session.state) {
    return res.status(400).json({ error: 'State mismatch', code: 400 });
  }

  if (code.toString().length < 1) {
    return res.status(400).json({ error: 'Invalid auth code', code: 400 });
  }

  const bodyData = new URLSearchParams({
    code: code.toString(),
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    grant_type: 'authorization_code',
  });

  const accessTokenRequest = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: getAuthToken(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: bodyData.toString(),
  });

  if (!accessTokenRequest.ok) {
    return res.status(500).json({ error: 'Something went wrong' });
  }

  const accessTokenResponse = await accessTokenRequest.json();

  const {
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_in: expiresIn,
  } = accessTokenResponse;

  if (!accessToken || !refreshToken || !expiresIn) {
    return res.status(500).json({ error: 'Invalid response from Spotify' });
  }

  req.session.token = {
    accessToken,
    refreshToken,
    expires: Date.now() + expiresIn * 1000,
  };

  req.session.save();

  const user = await getSpofityData<ApiUser>('/me', req);

  if (!user) return res.json({ error: 'Something went wrong' });
  if (isError(user)) return res.json({ error: user.error });

  req.session.user = {
    name: user.display_name,
    email: user.email,
    id: user.id,
  };

  req.session.save();

  console.log(req.session);

  return res.redirect(process.env.APP_URL);
};

export default CallbackController;
