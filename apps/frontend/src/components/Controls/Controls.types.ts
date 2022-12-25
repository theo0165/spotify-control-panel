export interface ControlsProps {
  progress: number;
  duration: number;
  isPlaying: boolean;
  isShuffle: boolean;
  isRepeat: boolean;
}

export interface TimelineInnerProps {
  width: number;
}

export interface ShuffleRepeatProps {
  isActive: boolean;
  isSelected: boolean;
}