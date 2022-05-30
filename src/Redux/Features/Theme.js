import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    primaryColor: "#F9AB2B",
    secondaryColor: "#101820FF",
  },
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload;
    },
  },
});

export const { setPrimaryColor, setSecondaryColor } = ThemeSlice.actions;
export default ThemeSlice.reducer;
