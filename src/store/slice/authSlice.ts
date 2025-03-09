import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../../models/data/authState';
import getUserLogin from '../actions/authAction';

const initialState: AuthState = {
  isLogin: false,
  isLoading: false,
  isError: false,
  user: [],
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserLogin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserLogin.fulfilled, (state, action) => {
        (state.isLoading = false), (state.token = action.payload.token);
        state.isLogin = true;
      })
      .addCase(getUserLogin.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.isLogin = false);
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
