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
  popularProducts: Product[] | undefined | null;
  isLoading: boolean;
  isError: boolean;
}

export type {ProductsState, Product};
