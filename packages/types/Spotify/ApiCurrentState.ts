import { ApiDevice } from './ApiDevice';
import { SpotifyImage } from './SpotifyImage';

export interface ApiCurrentState {
  device: ApiDevice;
  repeat_state: 'off' | 'track' | 'context';
  shuffle_state: 'on' | 'off';
  context: {
    type: string;
    href: string;
    external_urls: {
      spotify: string;
    };
    uri: string;
  } | null;
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: {
    album: {
      id?: string;
      images?: SpotifyImage[];
      name?: string;
    };
    artists: {
      id: string;
      images: SpotifyImage[];
      name: string;
    }[];
    duration_ms: number;
    explicit: boolean;
    id: string;
    name: string;
    is_local: boolean;
  };
}
