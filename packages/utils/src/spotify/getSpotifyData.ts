import { Request } from 'express';
import { refreshToken } from './refreshToken';
import { spotifyUrlBuilder } from './spotifyUrlBuilder';

export const getSpofityData = async <T>(endpoint: string, req: Request) => {
  let tries = 0;
  let data: T | undefined;

  while (true) {
    if (tries > 4) break;

    if (Date.now() > req.session.token.expires) {
      const refresh = await refreshToken(req, req.session.token);

      if (!refresh) {
        return { error: 'Could not refresh token' };
      }
    }

    const dataRequest = await fetch(spotifyUrlBuilder(endpoint), {
      headers: {
        Authorization: `Bearer ${req.session.token.accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const response = await dataRequest.json();

    if (dataRequest.ok) {
      data = response;
      break;
    }

    tries += 1;
  }

  if (!data) return { error: 'Something went wrong' };

  return data;
};
