import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URLS} from '../../service/urls';

export const getBestSellerProducts = createAsyncThunk(
  'products/getBestSellerProducts',
  async (params: object) => {
    const res = await getRequest({params}, PRODUCTS_URLS.BEST_SELLER_PRODUCTS);

    return res.data;
  },
);
