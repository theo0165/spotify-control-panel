import { FC } from 'react';
import colors from '../../../theme/colors';
import { ForwardIconProps } from './ForwardIcon.types';

const ForwardIcon: FC<ForwardIconProps> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? '24px'}
    height={height ?? '24px'}
    viewBox="0 0 512 512"
  >
    <path
      fill={color ? colors[color] : colors.white}
      d="M481.29,229.47l-188.87-113a30.54,30.54,0,0,0-31.09-.39,33.74,33.74,0,0,0-16.76,29.47V224.6L63.85,116.44a30.54,30.54,0,0,0-31.09-.39A33.74,33.74,0,0,0,16,145.52v221A33.74,33.74,0,0,0,32.76,396a30.54,30.54,0,0,0,31.09-.39L244.57,287.4v79.08A33.74,33.74,0,0,0,261.33,396a30.54,30.54,0,0,0,31.09-.39l188.87-113a31.27,31.27,0,0,0,0-53Z"
    />
  </svg>
);

export default ForwardIcon;
