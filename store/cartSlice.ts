import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface CartItem {
  id: string;
  productId: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ productId: string; price: number; quantity: number }>
    ) => {
      const { productId, price, quantity } = action.payload;

      // find by productId
      const existingItem = state.items.find(
        item => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id: uuidv4(), // uniq ID
          productId,
          price,
          quantity,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
