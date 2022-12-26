import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventState } from '@scp/types';

const initialState: EventState = {
  click: false,
  doubleClick: false,
  longClick: false,
  left: false,
  right: false,
};

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvent: (state, action: PayloadAction<{ name: string; value: boolean }>) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { setEvent } = eventSlice.actions;

export default eventSlice.reducer;
