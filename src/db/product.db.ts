type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export const products: Product[] = [
  {
    _id: "1",
    name: "Apple",
    description: "Apple is green fruit.",
    price: 10,
    stock: 1000,
    category: "Vega",
  },
];
