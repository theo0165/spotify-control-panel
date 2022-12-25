import { Request } from 'express';
import { refreshToken } from './refreshToken';
import { spotifyUrlBuilder } from './spotifyUrlBuilder';

export const getSpofityData = async <T>(
  endpoint: string,
  req: Request,
  noContentCheck?: boolean,
) => {
  let tries = 0;
  let data: T | null | undefined;

  // eslint-disable-next-line no-unreachable-loop
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

    if (!!noContentCheck && dataRequest.status === 204) {
      data = null;
      break;
    }

    const response = await dataRequest.json();

    if (dataRequest.ok) {
      data = response;
      break;
    }

    tries += 1;
  }

  if (!data && !noContentCheck) return { error: 'Something went wrong' };

  return data;
};
