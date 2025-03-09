import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URLS} from '../../service/urls';
import {Params} from '../../models/data/productsState';

export const getBestSellerProducts = createAsyncThunk(
  'products/getBestSellerProducts',
  async (params: object) => {
    const res = await getRequest({params}, PRODUCTS_URLS.BEST_SELLER_PRODUCTS);

    return res.data;
  },
);
interface FetchProductsParams {
  category: string;
  // Diğer parametreler varsa buraya ekleyin
}
export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (params: FetchProductsParams) => {
    const productUrl =
      params.category == 'Tümü'
        ? PRODUCTS_URLS.ALL_PRODUCTS
        : `${PRODUCTS_URLS.CATEGORY_PRODUCTS}/${params.category}`;

    const res = await getRequest({params}, productUrl);
    console.log(params, productUrl);

    return res.data;
  },
);
export const getProductDetail = createAsyncThunk(
  'products/getProductDetail',

  async (params: Params) => {
    const productUrl = `${PRODUCTS_URLS.ALL_PRODUCTS}/${params.id}`;
    const res = await getRequest(params, productUrl);

    return res.data;
  },
);
