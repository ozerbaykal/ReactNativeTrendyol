import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slice/productSlice';
import categoriesSlice from './slice/categorySlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    categories: categoriesSlice,
  },
});
1;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
