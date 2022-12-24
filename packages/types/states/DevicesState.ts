import { Device } from '../Spotify/Device';

export interface DevicesState {
  devices: Device[];
  shouldUpdate: boolean;
}
