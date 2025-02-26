interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  data: object;
}

interface ProductsState {
  products: Product[];
  bestSellerProducts: Product[];
  popularProducts: Product[];
  isLoading: boolean;
  isError: boolean;
}

export type {ProductsState, Product};
