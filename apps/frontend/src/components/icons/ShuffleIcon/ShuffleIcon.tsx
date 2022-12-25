import { FC } from 'react';
import colors from '../../../theme/colors';
import { PathPropsInterface, ShuffleIconProps } from './ShuffleIcon.types';

const ShuffleIcon: FC<ShuffleIconProps> = ({ width, height, color }) => {
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
      <polyline points="400 304 448 352 400 400" {...pathProps} />
      <polyline points="400 112 448 160 400 208" {...pathProps} />
      <path d="M64,352h85.19a80,80,0,0,0,66.56-35.62L256,256" {...pathProps} />
      <path
        d="M64,160h85.19a80,80,0,0,1,66.56,35.62l80.5,120.76A80,80,0,0,0,362.81,352H416"
        {...pathProps}
      />
      <path d="M416,160H362.81a80,80,0,0,0-66.56,35.62L288,208" {...pathProps} />
    </svg>
  );
};

export default ShuffleIcon;
