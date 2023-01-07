import { Controller } from '@scp/types';
import SpotifyScope from '../../../constants/SpotifyScope';
import prisma from '../../../prisma/prisma';

const LoginQrController: Controller = async (req, res) => {
  if (!req.query || !req.query.token) {
    return res.status(400).send('Invalid token');
  }

  const qrToken = await prisma.qrToken.findFirst({ where: { token: req.query.token.toString() } });

  if (!qrToken) {
    return res.status(400).send('Invalid token');
  }

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: SpotifyScope,
    redirect_uri: process.env.SPOTIFY_QR_REDIRECT_URI,
    state: qrToken.token,
  });

  req.session.state = qrToken.token;
  req.session.save();

  return res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
};

export default LoginQrController;
