import { Device } from '@scp/types';

export interface DeviceProps {
  device: Device;
  isActive: boolean;
  isCurrentDevice: boolean;
}

export interface DeviceWrapperProps {
  isActive: boolean;
  isCurrentDevice: boolean;
}
