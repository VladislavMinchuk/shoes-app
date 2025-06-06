import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { CartItem, CartItemPayload, RootState } from './interfaces';
import { parseToNum } from '../helpers';

const initialState: CartItem[] =  [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<CartItemPayload>
    ) => {
      const { productId, productName, productPrice, productSize, quantity } = action.payload;
      const totalPrice = parseToNum(productPrice) * parseToNum(quantity);

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
          productName,
          productSize,
          productPrice,
          totalPrice,
          quantity,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.totalPrice = parseToNum(item.productPrice) * parseToNum(action.payload.quantity);
      }
    },
    clearCart: state => {
      return [];
    },
  },
});

export const selectCartLength = (state: RootState) => state.cart.length;
export const selectCartTotal = (state: RootState) => state.cart.reduce((prev, curr) => {
  return curr.totalPrice + prev;
}, 0);

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
