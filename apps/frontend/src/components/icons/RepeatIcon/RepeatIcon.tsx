import { FC } from 'react';
import colors from '../../../theme/colors';
import { PathPropsInterface, RepeatIconProps } from './RepeatIcon.types';

const RepeatIcon: FC<RepeatIconProps> = ({ width, height, color }) => {
  const pathProps: PathPropsInterface = {
    fill: 'none',
    stroke: color ? colors[color] : colors.white,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '32px',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? '24px'}
      height={height ?? '24px'}
      viewBox="0 0 512 512"
    >
      <polyline points="320 120 368 168 320 216" {...pathProps} />
      <path d="M352,168H144a80.24,80.24,0,0,0-80,80v16" {...pathProps} />
      <polyline points="192 392 144 344 192 296" {...pathProps} />
      <path d="M160,344H368a80.24,80.24,0,0,0,80-80V248" {...pathProps} />
    </svg>
  );
};

export default RepeatIcon;
