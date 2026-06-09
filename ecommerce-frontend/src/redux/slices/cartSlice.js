import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
  },

  reducers: {

    addToCart: (state, action) => {

      const item = state.cartItems.find(
        (product) =>
          product._id === action.payload._id
      );

      if (item) {

        item.quantity += 1;

      } else {

        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });

      }
    },

    increaseQty: (state, action) => {

      const item = state.cartItems.find(
        (product) =>
          product._id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

    },

    decreaseQty: (state, action) => {

      const item = state.cartItems.find(
        (product) =>
          product._id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

    },

    removeFromCart: (state, action) => {

      state.cartItems =
        state.cartItems.filter(
          (item) =>
            item._id !== action.payload
        );

    },

  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;