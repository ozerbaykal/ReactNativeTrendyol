import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slice/productSlice';
import categoriesSlice from './slice/categorySlice';
import cartSlice from './slice/cartSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    categories: categoriesSlice,
    cart: cartSlice,
  },
});
1;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
