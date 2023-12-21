import React from "react";
import Drink from "@/components/Drink";
import getProducts from "@/lib/getProducts";
import getProduct from "@/lib/getProductContent";
import getProductMetadata from "@/lib/getProductMetadata";

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
    <div className="py-20 bg-white text-black font-area">
      <div className="max-w-2xl mx-auto px-4 flex flex-col gap-4">
        <Drink name={name} price={price} image={image} />
        <p className="text-justify">{content}</p>
      </div>
    </div>
  );
};

export default Page;
