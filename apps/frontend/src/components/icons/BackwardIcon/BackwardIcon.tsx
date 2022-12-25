import { FC } from 'react';
import colors from '../../../theme/colors';
import { BackwardIconProps } from './BackwardIcon.types';

const BackwardIcon: FC<BackwardIconProps> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 479.97 288.07"
    width={width ?? '24px'}
    height={height ?? '24px'}
  >
    <path
      fill={color ? colors[color] : colors.white}
      d="M14.67,117.48l188.87-113a30.54,30.54,0,0,1,31.09-.39,33.71,33.71,0,0,1,16.76,29.47v79.05L432.11,4.45a30.54,30.54,0,0,1,31.09-.39A33.71,33.71,0,0,1,480,33.53v221A33.73,33.73,0,0,1,463.2,284a30.54,30.54,0,0,1-31.09-.39L251.39,175.41v79.08A33.7,33.7,0,0,1,234.63,284a30.54,30.54,0,0,1-31.09-.39l-188.87-113a31.27,31.27,0,0,1,0-53Z"
    />
  </svg>
);

export default BackwardIcon;
