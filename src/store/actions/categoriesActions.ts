import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URLS} from '../../service/urls';

const getAllCategories = createAsyncThunk(
  'categories/getAllCategories',
  async (params: object) => {
    const res = await getRequest(params, CATEGORIES_URLS.CATEGORIES);

    return res.data;
  },
);

export {getAllCategories};
