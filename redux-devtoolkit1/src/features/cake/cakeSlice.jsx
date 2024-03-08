import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state, action) => {
      state.numOfCake = state.numOfCake - action.payload;
    },
  },
});
export const { buyCake } = cakeSlice.actions;

export default cakeSlice.reducer;
