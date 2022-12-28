import { Controller } from '@scp/types';
import { v4 as uuidv4 } from 'uuid';
import SpotifyScope from '../../../constants/SpotifyScope';

const LoginQrController: Controller = (req, res) => {
  const state = uuidv4();

  req.session.state = state;
  req.session.save();

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: SpotifyScope,
    redirect_uri: process.env.SPOTIFY_QR_REDIRECT_URI,
    state,
  });

  return res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
};

export default LoginQrController;
