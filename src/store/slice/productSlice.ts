import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';
import {
  getAllProducts,
  getBestSellerProducts,
  getProductDetail,
} from '../actions/productsActions';

const initialState: ProductsState = {
  products: [],
  bestSellerProducts: [],
  popularProducts: [],
  product: {
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: '',
    rating: undefined,
    isFavorite: false,
    quantity: 0,
  },

  isLoading: false,
  isError: null,
};
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    favorite: (state, action) => {
      const product = action.payload;
      const exitingProduct = state.popularProducts.find(
        item => item.id === product.id,
      );
      const exitingBestSellerProduct = state.bestSellerProducts.find(
        item => item.id === product.id,
      );
      const exitingProducts = state.products.find(
        item => item.id === product.id,
      );
      if (exitingProducts) {
        exitingProducts.isFavorite = !exitingProducts.isFavorite;
      }

      if (exitingBestSellerProduct) {
        exitingBestSellerProduct.isFavorite =
          !exitingBestSellerProduct.isFavorite;
      }

      if (exitingProduct) {
        exitingProduct.isFavorite = !exitingProduct.isFavorite;
      }
      if (product.id === state.product.id) {
        state.product.isFavorite = !state.product.isFavorite;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBestSellerProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBestSellerProducts.fulfilled, (state, action) => {
        (state.isLoading = false), (state.bestSellerProducts = action.payload);
      })
      .addCase(getBestSellerProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
      })
      .addCase(getAllProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popularProducts = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
      })
      .addCase(getProductDetail.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
      });
  },
});
export const {favorite} = productSlice.actions;

export default productSlice.reducer;
