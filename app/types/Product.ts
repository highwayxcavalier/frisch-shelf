export interface Product {
  id: string;
  name: string;
  expiration_date: string;
  createdAt: Date;
  updatedAt: Date;
  storage?: Storage;
  description?: string;
  quantity: string;
  tags: string[];
  image?: string;
  isExpired: boolean;
}

export interface ProductData {
  products: Product[];
}

export type Storage = 'fridge' | 'cellar' | 'freezer' | 'pantry';
