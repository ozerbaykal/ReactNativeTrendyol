interface Rating {
  count: number;
  rate: number;
}
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
  isFavorite: boolean;
  quantity: 0;
}

interface ProductsState {
  products: Product[];
  bestSellerProducts: Product[];
  product: Product[];
  popularProducts: Product[];
  isLoading: boolean;
  isError: any;
}
interface Params {
  id: number;
}

export type {ProductsState, Product, Params, Rating};
