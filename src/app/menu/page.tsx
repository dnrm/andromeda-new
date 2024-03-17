import React from "react";
import Menu from "@/components/Menu";
import getProducts from "@/lib/getProducts";
import { Product } from "@/lib/Products";

const menu = () => {
  const products: Product[] = getProducts();
  return (
    <div className="pt-8">
      <Menu products={products} />
    </div>
  );
};

export default menu;
