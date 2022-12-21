import { ApiUser, SpotifyToken } from '@scp/types';
import { spotifyUrlBuilder } from './spotifyUrlBuilder';

export const getMe = async (token: SpotifyToken): Promise<ApiUser | null> => {
  console.log({ date: Date.now(), exp: token.expires, less: Date.now() < token.expires });

  if (Date.now() > token.expires) return null;

  console.log(`Bearer ${token.accessToken}`);

  const userRequest = await fetch(spotifyUrlBuilder('/me'), {
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  const user = await userRequest.json();

  console.log({ status: userRequest.status, user });

  if (!userRequest.ok) {
    return null;
  }

  return user;
};
