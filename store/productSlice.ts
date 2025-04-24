import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, RootState } from './interfaces';

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
  },
});

export const {
  setProducts,
  addProduct,
  updateProduct,
  removeProduct,
} = productSlice.actions;

export const selectAllProducts = (state: RootState) => state.products;
export const selectProductById = (id: string) => (state: RootState) =>
  state.products.find(p => p.id === id);

export default productSlice.reducer;
