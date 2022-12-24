import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Device, DevicesState } from '@scp/types';

const initialState: DevicesState = {
  devices: [],
  shouldUpdate: false,
};

export const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setDevices: (state, action: PayloadAction<Device[]>) => {
      state.devices = action.payload;
    },
    devicesShouldUpdate: (state, action: PayloadAction<boolean>) => {
      state.shouldUpdate = action.payload;
    },
  },
});

export const { setDevices, devicesShouldUpdate } = devicesSlice.actions;

export default devicesSlice.reducer;
