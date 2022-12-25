import { FC } from 'react';
import colors from '../../../theme/colors';
import { PauseIconProps } from './PauseIcon.types';

const PauseIcon: FC<PauseIconProps> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? '24px'}
    height={height ?? '24px'}
    viewBox="0 0 512 512"
  >
    <path
      fill={color ? colors[color] : colors.white}
      d="M208,432H160a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V416A16,16,0,0,1,208,432Z"
    />
    <path
      fill={color ? colors[color] : colors.white}
      d="M352,432H304a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V416A16,16,0,0,1,352,432Z"
    />
  </svg>
);

export default PauseIcon;
