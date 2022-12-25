export interface PlaybackState {
  isTrueState: boolean;
  shuffle: boolean;
  repeat: 'off' | 'context' | 'current';
  progress: number;
  duration: number;
  isPlaying: boolean;
  song: {
    image: string | null;
    name: string | null;
    id: string | null;
  };
  artists: {
    name: string | null;
    id: string | null;
  }[];
  context: string | null;
}
