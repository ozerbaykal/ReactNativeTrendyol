import {createSlice} from '@reduxjs/toolkit';
import {CartState} from '../../models/data/cartState';
import Cart from '../../screens/cart';

const initialState: CartState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: 'cart',

  initialState,
  reducers: {
    addCart: (state, action) => {
      const product = action.payload;
      const foundProduct = state.cart?.find(item => item.id === product.id);
      if (foundProduct) {
        foundProduct.quantity += 1;
      } else {
        state.cart.push({...product, quantity: 1});
      }
    },
  },
});

export const {addCart} = cartSlice.actions;
export default cartSlice.reducer;
