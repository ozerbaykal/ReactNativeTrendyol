interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductsState {
  products: Product[];
  deneme: any;
}

export type {ProductsState};
