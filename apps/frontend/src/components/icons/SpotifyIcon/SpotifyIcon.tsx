import { FC } from 'react';
import colors from '../../../theme/colors';
import { SpotifyIconProps } from './SpotifyIcons.types';

const SpotifyIcon: FC<SpotifyIconProps> = ({ color, width, height }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.05 170.05" width={width || '24px'} height={height || '24px'}>
    <path
      fill={color ? colors[color] : colors.black}
      d="M85 1.28A83.75 83.75 0 1 0 168.77 85 83.75 83.75 0 0 0 85 1.28Zm38.4 120.79a5.22 5.22 0 0 1-7.18 1.74c-19.66-12-44.41-14.74-73.56-8.08a5.22 5.22 0 1 1-2.33-10.17c31.9-7.3 59.27-4.16 81.34 9.33a5.22 5.22 0 0 1 1.76 7.18Zm10.25-22.8a6.54 6.54 0 0 1-9 2.15c-22.51-13.84-56.82-17.84-83.45-9.76a6.53 6.53 0 1 1-3.79-12.5c30.41-9.22 68.22-4.75 94.07 11.13a6.54 6.54 0 0 1 2.2 8.98Zm.88-23.75c-27-16-71.52-17.5-97.29-9.68a7.83 7.83 0 1 1-4.54-15c29.58-9 78.75-7.25 109.83 11.2a7.83 7.83 0 0 1-8 13.47Z"
    />
  </svg>
);

export default SpotifyIcon;
