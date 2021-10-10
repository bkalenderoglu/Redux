import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter", // state key
  initialState: {
    value: 0,
  },
  //update field
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    increaseByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

export const { increase, decrease, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
