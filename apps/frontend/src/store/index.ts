import { configureStore } from '@reduxjs/toolkit';
import applicationReducer from './slices/applicationSlice';
import devicesReducer from './slices/devicesSlice';
import playlistReducer from './slices/playlistsSlice';
import playstateReducer from './slices/playstateSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    user: userReducer,
    devices: devicesReducer,
    playlists: playlistReducer,
    playstate: playstateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
