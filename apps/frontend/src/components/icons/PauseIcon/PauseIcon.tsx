import { FC } from 'react';
import colors from '../../../theme/colors';
import { PauseIconProps } from './PauseIcon.types';

const PauseIcon: FC<PauseIconProps> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 224 352"
    width={width ?? '24px'}
    height={height ?? '24px'}
  >
    <path
      fill={color ? colors[color] : colors.white}
      d="M64,352H16A16,16,0,0,1,0,336V16A16,16,0,0,1,16,0H64A16,16,0,0,1,80,16V336A16,16,0,0,1,64,352Z"
    />
    <path
      fill={color ? colors[color] : colors.white}
      d="M208,352H160a16,16,0,0,1-16-16V16A16,16,0,0,1,160,0h48a16,16,0,0,1,16,16V336A16,16,0,0,1,208,352Z"
    />
  </svg>
);

export default PauseIcon;
