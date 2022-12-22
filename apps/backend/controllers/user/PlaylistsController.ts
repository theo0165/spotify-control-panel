import { ApiPlaylist, Controller } from '@scp/types';
import { getSpofityData, isError } from '@scp/utils';

const PlaylistController: Controller = async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'No user' });

  if (req.session.playlists) {
    return res.json(req.session.playlists);
  }

  const playlists = await getSpofityData<{ items: ApiPlaylist[] }>('/me/playlists', req);

  if (!playlists) return res.json({ error: 'Something went wrong' });
  if (isError(playlists)) return res.json({ error: playlists.error });

  return res.json(
    playlists.items.map(playlist => ({
      id: playlist.id,
      name: playlist.name,
      image: playlist.images.slice(0, 1).map(image => image.url)[0] ?? null,
      tracks: playlist.tracks.total,
    })),
  );
};

export default PlaylistController;
