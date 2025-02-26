import {createSlice} from '@reduxjs/toolkit';
import {CategoryState} from '../../models/data/categoryState';
import {getAllCategories} from '../actions/categoriesActions';

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  isError: false,
};

export const categoriesSlice = createSlice({
  name: 'categories',

  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        (state.isLoading = false), (state.categories = action.payload);
      })
      .addCase(getAllCategories.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default categoriesSlice.reducer;
