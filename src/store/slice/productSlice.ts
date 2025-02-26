import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';
import {getAllProducts} from '../actions/productsActions';

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  isError: false,
};
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        (state.isLoading = false), (state.products = action.payload);
      })
      .addCase(getAllProducts.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
