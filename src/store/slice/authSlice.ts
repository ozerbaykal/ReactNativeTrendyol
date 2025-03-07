import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../../models/data/authState';

const initialState: AuthState = {
  isLogin: false,
  isLoading: false,
  isError: false,
  user: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: () => {},
    register: () => {},
    logout: () => {},
  },
});

export const {login} = authSlice.actions;

export default authSlice.reducer;
