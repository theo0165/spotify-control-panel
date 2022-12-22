import { SpotifyImage } from './SpotifyImage';

export interface ApiPlaylist {
  id: string;
  images: SpotifyImage[];
  name: string;
  tracks: {
    total: number;
  };
  owner: {
    display_name: string | null;
  };
}
