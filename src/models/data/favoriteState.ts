import {Product} from './productsState';

interface FavoriteState {
  isLoading: boolean;
  isError: boolean;
  favorites: Product[];
}

export type {FavoriteState};
