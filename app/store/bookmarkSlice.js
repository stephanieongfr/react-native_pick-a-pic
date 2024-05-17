import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(state.items, action);
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      console.log(existingItem);
      // if the item already exists, don't add it again
      if (existingItem) {
        console.log("This photo is already in your favorites")
      } else {
        state.items.push(action.payload);
      }
      console.log(state.items);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    clearAllItems: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, clearAllItems } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;