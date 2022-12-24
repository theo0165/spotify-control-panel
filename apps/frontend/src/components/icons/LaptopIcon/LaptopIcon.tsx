import { FC } from 'react';
import colors from '../../../theme/colors';
import { LaptopIconProps } from './LaptopIcon.types';

const LaptopIcon: FC<LaptopIconProps> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? '24px'}
    height={height ?? '24px'}
    viewBox="0 0 512 512"
  >
    <title>ionicons-v5-n</title>
    <rect
      x="48"
      y="96"
      width="416"
      height="304"
      rx="32.14"
      ry="32.14"
      fill="none"
      strokeLinejoin="round"
      strokeWidth="32px"
      stroke={color ? colors[color] : colors.white}
    />
    <line
      x1="16"
      y1="416"
      x2="496"
      y2="416"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32px"
      stroke={color ? colors[color] : colors.white}
    />
  </svg>
);

export default LaptopIcon;
