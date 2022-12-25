import { FC } from 'react';
import colors from '../../../theme/colors';
import { PlayIconProps } from './PlayIcon.types';

const PlayIcon: FC<PlayIconProps> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 319.96 368"
    width={width ?? '24px'}
    height={height ?? '24px'}
  >
    <path
      fill={color ? colors[color] : colors.white}
      d="M37,368a35.35,35.35,0,0,1-17.5-4.67C7.46,356.53,0,343.33,0,329V39C0,24.63,7.46,11.47,19.46,4.67a35.15,35.15,0,0,1,35.77.45L303.08,153.48a36,36,0,0,1,0,61L55.19,362.88A35.41,35.41,0,0,1,37,368Z"
    />
  </svg>
);

export default PlayIcon;
