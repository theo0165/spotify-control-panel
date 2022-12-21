import { Controller } from '@scp/types';
import { v4 as uuidv4 } from 'uuid';

const LoginController: Controller = (req, res) => {
  const state = uuidv4();
  const scope = [
    'user-read-playback-state',
    'user-modify-playback-state',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-read-currently-playing',
    'user-read-playback-position',
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-top-read',
  ].join(' ');

  req.session.state = state;
  req.session.save();

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    state,
  });

  return res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
};

export default LoginController;
