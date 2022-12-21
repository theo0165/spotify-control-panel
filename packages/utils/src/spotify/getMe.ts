import { ApiUser, SpotifyToken } from '@scp/types';
import { spotifyUrlBuilder } from './spotifyUrlBuilder';

export const getMe = async (token: SpotifyToken): Promise<ApiUser | null> => {
  if (Date.now() > token.expires) return null;

  console.log(`Bearer ${token.accessToken}`);

  const userRequest = await fetch(spotifyUrlBuilder('/me'), {
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  const user = await userRequest.json();

  if (!userRequest.ok) {
    return null;
  }

  return user;
};
