import React from "react";
import Menu from "@/components/Menu";
import getProducts from "@/lib/getProducts";
import { Product } from "@/lib/Products";

const menu = () => {
  const products: Product[] = getProducts();
  return <Menu products={products} />;
};

export default menu;
