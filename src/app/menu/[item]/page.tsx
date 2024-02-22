import React from "react";
import Drink from "@/components/Drink";
import getProducts from "@/lib/getProducts";
import getProduct from "@/lib/getProductContent";
import getProductMetadata from "@/lib/getProductMetadata";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: {
    item: string;
  };
}

export const generateStaticParams = async () => {
  const products = getProducts();
  return products.map((product) => {
    item: product.slug;
  });
};

const Page = ({ params }: PageProps) => {
  const content = getProduct(params.item);
  const { name, price, image } = getProductMetadata(params.item);

  return (
    <div className="py-28 bg-white text-black font-area p-4">
      <div className="columns grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="w-full mx-auto flex flex-col gap-4">
          <Image
            src={image || "https://placehold.co/600x600/png"}
            alt="Placeholder image"
            height={300}
            width={300}
            className="w-full h-full object-cover aspect-square"
          />
        </div>
        <div className="caption flex flex-col justify-start gap-6 items-center">
          <div className="product-info-main flex justify-between w-full">
            <div className="title">
              <h2 className="text-4xl font-bold">{name}</h2>
              <div className="h-1 bg-teal-600 w-7 mt-1 transition-all duration-200 group-hover:w-full"></div>
            </div>
            <p className="price">
              {new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "USD",
                currencyDisplay: "narrowSymbol",
              }).format(price)}
            </p>
          </div>
          <p className="text-justify leading-loose text-neutral-700">{content}</p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold w-full py-3 rounded-2xl">
              Add to cart!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
