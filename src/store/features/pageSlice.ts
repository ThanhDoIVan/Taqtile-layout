import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Component = 'offer' | 'features';

type Page = {
  value: Component;
};

export const initialState: Page = {
  value: 'features',
};

export const PageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<Component>) => {
      state.value = action.payload;
    },
  },
});

export default PageSlice.reducer;
export const { change } = PageSlice.actions;
