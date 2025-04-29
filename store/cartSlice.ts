import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { CartItem, CartItemPayload } from './interfaces';

const initialState: CartItem[] =  [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<CartItemPayload>
    ) => {
      const { productId, price, quantity } = action.payload;

      // find by productId
      const existingItem = state.find(
        item => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({
          id: uuidv4(), // uniq ID
          productId,
          price,
          quantity,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state = state.filter(item => item.id !== action.payload.id);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: state => {
      state = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
