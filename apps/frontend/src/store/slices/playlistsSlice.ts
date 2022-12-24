import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Playlist, PlaylistState } from '@scp/types';

const initialState: PlaylistState = [];

export const playlistSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    setPlaylists: (state, action: PayloadAction<Playlist[]>) => action.payload,
  },
});

export const { setPlaylists } = playlistSlice.actions;

export default playlistSlice.reducer;
