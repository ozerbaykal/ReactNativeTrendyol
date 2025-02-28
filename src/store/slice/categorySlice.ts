import {createSlice} from '@reduxjs/toolkit';
import {CategoryState} from '../../models/data/categoryState';
import {getAllCategories} from '../actions/categoriesActions';

const initialState: CategoryState = {
  categories: [],
  selectedCategory: 'Tümü',
  isLoading: false,
  isError: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',

  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        (state.isLoading = false), (state.categories = action.payload);
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
      });
  },
});

export const {setCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;
