import {createAsyncThunk} from '@reduxjs/toolkit';
import {postRequest} from '../../service/verbs';
import {AUTH_LOGIN} from '../../service/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserLogin = createAsyncThunk(
  'auth/getUserLogin',
  async (payload: object) => {
    try {
      const response = await postRequest(payload, AUTH_LOGIN.LOGIN);
      if (response.data && response.data.token) {
        AsyncStorage.setItem('token', response.data.token);
      }
      console.log(response.data.token);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export default getUserLogin;
