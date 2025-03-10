import {createAsyncThunk} from '@reduxjs/toolkit';
import {USER_URLS} from '../../service/urls';
import {getAllCategories} from './categoriesActions';
import {getRequest} from '../../service/verbs';

const getUserInfo = createAsyncThunk(
  'user/getUser',

  async (params: object) => {
    const userUrl = `${USER_URLS.USER}/${params.id}`;

    const response = await getRequest(params, userUrl);
    return response.data;
  },
);

export {getUserInfo};
