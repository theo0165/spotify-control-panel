export interface PlaybackState {
  shuffle: boolean;
  repeat: 'off' | 'context' | 'current';
  progress: number;
  duration: number;
  isPlaying: boolean;
  song: {
    image: string | null;
    name: string;
    id: string;
  };
  artists: {
    name: string;
    id: string;
  }[];
  context: string;
}
