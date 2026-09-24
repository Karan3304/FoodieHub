import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.card.info.id === newItem.card.info.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      }
    },
    incrementItem: (state, action) => {
      const item = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id,
      );

      if (item) {
        item.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const item = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id,
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (i) => i.card.info.id !== action.payload.card.info.id,
          );
        }
      }
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
      // OR
      // return { items: [] };
    },
  },
});

export const { addItems, incrementItem, decrementItem, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
