import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApplicationState } from '@scp/types';

const initialState: ApplicationState = {
  name: '',
  currentModule: 'frontpage',
};

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    resolveApplication: (state, action: PayloadAction<ApplicationState>) => ({
      ...state,
      ...action.payload,
    }),
    switchModule: (state, action: PayloadAction<string>) => {
      state.currentModule = action.payload;
    },
  },
});

export const { resolveApplication, switchModule } = applicationSlice.actions;

export default applicationSlice.reducer;
