import { FC } from 'react';
import colors from '../../../theme/colors';
import { ForwardIconProps } from './ForwardIcon.types';

const ForwardIcon: FC<ForwardIconProps> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 479.97 288.07"
    width={width ?? '24px'}
    height={height ?? '24px'}
  >
    <path
      fill={color ? colors[color] : colors.white}
      d="M465.29,117.48,276.42,4.48a30.54,30.54,0,0,0-31.09-.39,33.76,33.76,0,0,0-16.76,29.47v79.05L47.85,4.45a30.54,30.54,0,0,0-31.09-.39A33.76,33.76,0,0,0,0,33.53v221A33.75,33.75,0,0,0,16.76,284a30.54,30.54,0,0,0,31.09-.39L228.57,175.41v79.08A33.74,33.74,0,0,0,245.33,284a30.54,30.54,0,0,0,31.09-.39l188.87-113a31.27,31.27,0,0,0,0-53Z"
    />
  </svg>
);

export default ForwardIcon;
