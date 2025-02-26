import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URLS} from '../../service/urls';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (params: object) => {
    const res = await getRequest({params}, PRODUCTS_URLS.ALL_PRODUCTS);
    return res.data;
  },
);
