import {createAsyncThunk} from '@reduxjs/toolkit';
import {postRequest} from '../../service/verbs';
import {AUTH_LOGIN} from '../../service/urls';

const getUserLogin = createAsyncThunk(
  'auth/getUserLogin',
  async (payload: object) => {
    const response = await postRequest(payload, AUTH_LOGIN.LOGIN);

    return response.data;
  },
);

export default getUserLogin;
