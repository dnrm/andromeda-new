import React from "react";
import Drink from "./Drink";
import Link from "next/link";
import { Product } from "@/lib/Products";

interface MenuProps {
  products: Product[];
}

const Menu = ({ products }: MenuProps) => {
  if (!products) {
    console.log("No products found")
  }

  return (
    <div className="px-4 pb-16">
      <div className="quality bg-white mx-auto max-w-6xl pb-8 gap-8">
        <div className="text flex flex-col gap-8 col-span-1 md:col-span-2">
          <p className="text-neutral-600 font-area font-medium text-justify leading-loose text-sm md:text-base">
            Check out our menu below. We offer a wide variety of coffee, tea,
            and other drinks. We also offer a wide variety of pastries and
            snacks.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mx-auto max-w-6xl text-black font-area">
        {products.map((i) => {
          return <Drink key={i.name} price={i.price} name={i.name} image={i.image} slug={i.slug} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
