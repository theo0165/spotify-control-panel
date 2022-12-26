import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaybackState } from '@scp/types';

export const initialPlaybackState: PlaybackState = {
  shouldUpdate: false,
  isTrueState: false,
  shuffle: false,
  repeat: 'off',
  progress: 0,
  duration: 0,
  isPlaying: false,
  song: {
    image: null,
    name: null,
    id: null,
  },
  artists: [],
  context: null,
};

export const playstateSlice = createSlice({
  name: 'playstate',
  initialState: initialPlaybackState,
  reducers: {
    setPlayState: (state, action: PayloadAction<PlaybackState>) => ({
      ...state,
      ...action.payload,
    }),
    setIsTrueState: (state, action: PayloadAction<boolean>) => {
      state.isTrueState = action.payload;
    },
    stateShouldUpdate: (state, action: PayloadAction<boolean>) => {
      state.shouldUpdate = action.payload;
    },
  },
});

export const { setPlayState, setIsTrueState, stateShouldUpdate } = playstateSlice.actions;

export default playstateSlice.reducer;
