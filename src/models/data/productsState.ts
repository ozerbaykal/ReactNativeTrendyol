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
}

interface ProductsState {
  products: Product[];
  bestSellerProducts: Product[];
  product: Product;
  popularProducts: Product[];
  isLoading: boolean;
  isError: boolean;
}
interface Params {
  id: number;
}

export type {ProductsState, Product, Params};
