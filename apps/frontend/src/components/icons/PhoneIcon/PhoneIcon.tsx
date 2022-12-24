import { FC } from 'react';
import colors from '../../../theme/colors';
import { PhoneIconProps } from './PhoneIcon.types';

const PhoneIcon: FC<PhoneIconProps> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? '24px'}
    height={height ?? '24px'}
    fill={color ? colors[color] : colors.white}
    viewBox="0 0 16 16"
  >
    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

export default PhoneIcon;