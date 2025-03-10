import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slice/productSlice';
import categoriesSlice from './slice/categorySlice';
import cartSlice from './slice/cartSlice';
import authSlice from './slice/authSlice';
import favoriteSlice from './slice/favoriteSlice';
import userSlice from './slice/userSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    categories: categoriesSlice,
    cart: cartSlice,
    auth: authSlice,
    favorites: favoriteSlice,
    user: userSlice,
  },
});
1;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
