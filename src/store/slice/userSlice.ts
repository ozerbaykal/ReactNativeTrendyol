import {createSlice} from '@reduxjs/toolkit';
import {UserState} from '../../models/data/userState';
import {getUserInfo} from '../actions/userActions';

const initialState: UserState = {
  user: null,
  isLoading: false,
  isError: null,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserInfo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        (state.isLoading = false), (state.isError = action.error);
      });
  },
});

export default userSlice.reducer;
