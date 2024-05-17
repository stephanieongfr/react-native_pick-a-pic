import { createSlice } from "@reduxjs/toolkit";

export const photoSlice = createSlice({
  name: "bookmark",
  initialState: null,
  reducers: {
    setPhoto: (state, action) => action.payload
  },
});


export const { setPhoto } = photoSlice.actions;

export default photoSlice.reducer;