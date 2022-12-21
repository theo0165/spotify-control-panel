import { SpotifyToken } from '@scp/types';
import { Request } from 'express';
import { getAuthToken } from './getAuthToken';

export const refreshToken = async (req: Request, token: SpotifyToken): Promise<boolean> => {
  const bodyData = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: token.refreshToken,
  });

  const refreshRequest = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: getAuthToken(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: bodyData.toString(),
  });

  const refreshData = await refreshRequest.json();

  if (!refreshRequest.ok) return false;

  const { access_token: accessToken, expires_in: expiresIn } = refreshData;

  if (!accessToken || !expiresIn) {
    return false;
  }

  req.session.token = {
    ...req.session.token,
    accessToken,
    expires: Date.now() + expiresIn * 1000,
  };
  req.session.save();

  return true;
};
