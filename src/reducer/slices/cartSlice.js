import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setTotalItems(state, value) {
      state.totalItems = value.payload;
    },
    resetCart(state) {
      state.totalItems = 0;
      localStorage.removeItem("totalItems");
    }
  },
});

export const { setTotalItems, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
