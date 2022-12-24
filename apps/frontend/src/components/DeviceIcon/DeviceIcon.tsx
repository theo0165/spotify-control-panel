import { FC } from 'react';
import LaptopIcon from '../icons/LaptopIcon';
import PhoneIcon from '../icons/PhoneIcon';
import SpeakerIcon from '../icons/SpeakerIcon';
import { DeviceIconProps } from './DeviceIcon.types';

const DeviceIcon: FC<DeviceIconProps> = ({ type }) => {
  switch (type.toLowerCase()) {
    case 'speaker':
      return <SpeakerIcon width="32px" height="32px" />;
    case 'computer':
      return <LaptopIcon width="32px" height="32px" />;
    case 'smartphone':
      return <PhoneIcon width="32px" height="32px" />;
    default:
      return <SpeakerIcon width="32px" height="32px" />;
  }
};

export default DeviceIcon;
