import {createSlice} from '@reduxjs/toolkit';
import {FavoriteState} from '../../models/data/favoriteState';

const initialState: FavoriteState = {
  isLoading: false,
  isError: false,
  favorites: [],
};
const favoriteSlice = createSlice({
  name: 'favorites',

  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const product = action.payload;
      const exitingProduct = state.favorites.find(
        item => item.id === product.id,
      );
      if (exitingProduct) {
        exitingProduct.isFavorite = false;
      } else {
        state.favorites.push({...product, isFavorite: true});
      }
    },
  },
});

export const {addFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
