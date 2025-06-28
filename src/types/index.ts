// src/types/index.ts

export type PerfumeProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export type CartItem = {
  product: PerfumeProduct;
  quantity: number;
};