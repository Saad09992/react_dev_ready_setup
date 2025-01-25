import { createSlice } from "@reduxjs/toolkit";
import { getDataFromApi } from "../methods/counterMethod";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    data: [],
    loading: false,
  },
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    clearCount: (state) => {
      state.count = 0;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getDataFromApi.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //     })
  //     .addCase(getDataFromApi.pending, (state) => {
  //       state.data = [];
  //       state.loading = true;
  //     })
  //     .addCase(getDataFromApi.rejected, (state) => {
  //       state.data = [];
  //       state.loading = false;
  //     });
  // },
});

export const { incrementCount, clearCount } = counterSlice.actions;

export default counterSlice.reducer;
