import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const displaySlice = createSlice({
  name: 'displayValue',
  initialState,
  reducers: {
    setDisplayValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDisplayValue } = displaySlice.actions;

export default displaySlice.reducer;
export const displaySelector = (state: any) => state.display;
