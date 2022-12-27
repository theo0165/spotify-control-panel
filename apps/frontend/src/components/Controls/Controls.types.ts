export interface ControlsProps {
  progress: number;
  duration: number;
  isPlaying: boolean;
  isShuffle: boolean;
  isRepeat: boolean;
  background: string | null;
}

export interface ControlsWrapperProps {
  background: string | null;
}

export interface TimelineInnerProps {
  width: number;
}

export interface ShuffleRepeatProps {
  isActive: boolean;
  isSelected: boolean;
}

export interface ContentControlProps {
  isSelected: boolean;
}

export interface PlayPauseProps {
  isSelected: boolean;
  isPlay: boolean;
}
