import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';
import {getBestSellerProducts} from '../actions/productsActions';

const initialState: ProductsState = {
  products: [],
  bestSellerProducts: [],
  popularProducts: [],
  isLoading: false,
  isError: false,
};
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBestSellerProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBestSellerProducts.fulfilled, (state, action) => {
        (state.isLoading = false), (state.bestSellerProducts = action.payload);
      })
      .addCase(getBestSellerProducts.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
