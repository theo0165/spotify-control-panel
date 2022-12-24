import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '@scp/types';

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser, setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;
