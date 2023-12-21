import { createContext } from "react";

type CartItem = {
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

type Cart = {
    items: CartItem[];
    total: number;
};

export const CartContext = createContext<Cart>({ items: [], total: 0 });
