import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  showPassword: false,
};

const passwordSlice = createSlice({
  name: "password",
  initialState: INITIAL_STATE,
  reducers: {
    togglePasswordVisibility(state) {
      state.showPassword = !state.showPassword;
    },
  },
});

export const { togglePasswordVisibility } = passwordSlice.actions;

export const passwordReducer = passwordSlice.reducer;
