import { ApiPlaylist, Controller } from '@scp/types';
import { getPlaylists, refreshToken } from '@scp/utils';

const PlaylistController: Controller = async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'No user' });

  if (req.session.playlists) {
    return res.json(req.session.playlists);
  }

  let playlists: ApiPlaylist[] = [];
  let tries = 0;

  while (true) {
    if (tries > 4) break;

    const data = await getPlaylists(req.session.token);

    if (!data) {
      const refresh = await refreshToken(req, req.session.token);

      if (!refresh) {
        return res.status(500).json({ error: 'Could not refresh token' });
      }
    } else {
      playlists = data;
      break;
    }

    tries += 1;
  }

  if (!playlists) return res.json({ error: 'Something went wrong' });

  return res.json(
    playlists.map(playlist => ({
      id: playlist.id,
      name: playlist.name,
      image: playlist.images.slice(0, 1).map(image => image.url)[0] ?? null,
      tracks: playlist.tracks.total,
    })),
  );
};

export default PlaylistController;
