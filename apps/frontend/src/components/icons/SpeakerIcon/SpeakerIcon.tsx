import { FC } from 'react';
import colors from '../../../theme/colors';
import { SpeakerIconProps } from './SpeakerIcon.types';

const SpeakerIcon: FC<SpeakerIconProps> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width ?? '24px'}
    height={height ?? '24px'}
  >
    <g>
      <path
        fill={color ? colors[color] : colors.white}
        d="M17.437,21.938H6.562a2.5,2.5,0,0,1-2.5-2.5V4.562a2.5,2.5,0,0,1,2.5-2.5H17.437a2.5,2.5,0,0,1,2.5,2.5V19.438A2.5,2.5,0,0,1,17.437,21.938ZM6.562,3.062a1.5,1.5,0,0,0-1.5,1.5V19.438a1.5,1.5,0,0,0,1.5,1.5H17.437a1.5,1.5,0,0,0,1.5-1.5V4.562a1.5,1.5,0,0,0-1.5-1.5Z"
      />
      <path
        fill={color ? colors[color] : colors.white}
        d="M12,18.939a3.75,3.75,0,1,1,3.75-3.75A3.755,3.755,0,0,1,12,18.939Zm0-6.5a2.75,2.75,0,1,0,2.75,2.75A2.752,2.752,0,0,0,12,12.439Z"
      />
      <path
        fill={color ? colors[color] : colors.white}
        d="M12,9.563a2.25,2.25,0,1,1,2.25-2.25A2.253,2.253,0,0,1,12,9.563Zm0-3.5a1.25,1.25,0,1,0,1.25,1.25A1.251,1.251,0,0,0,12,6.063Z"
      />
    </g>
  </svg>
);

export default SpeakerIcon;
