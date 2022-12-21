import { ApiPlaylist, SpotifyToken } from '@scp/types';
import { spotifyUrlBuilder } from './spotifyUrlBuilder';

export const getPlaylists = async (token: SpotifyToken): Promise<ApiPlaylist[] | null> => {
  if (Date.now() > token.expires) return null;

  console.log(`Bearer ${token.accessToken}`);

  // TODO: Support load more
  const playlistRequest = await fetch(spotifyUrlBuilder('/me/playlists'), {
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  const playlists = await playlistRequest.json();

  if (!playlistRequest.ok) {
    return null;
  }

  return playlists.items;
};
