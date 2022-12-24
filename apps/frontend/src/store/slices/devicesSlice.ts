import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Device, DevicesState } from '@scp/types';

const initialState: DevicesState = [];

export const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setDevices: (state, action: PayloadAction<Device[]>) => action.payload,
  },
});

export const { setDevices } = devicesSlice.actions;

export default devicesSlice.reducer;
