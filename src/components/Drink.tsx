import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DrinkProps {
  name: string;
  price: number;
  image?: string;
}

const Drink = ({ name, price, image }: DrinkProps) => {
  return (
    <Link
      href={"/menu/" + name.toLowerCase()}
      className="drink flex-col flex w-full gap-4 cursor-pointer group"
    >
      <Image
        src={image || "https://placehold.co/600x600/png"}
        alt="Placeholder image"
        height={300}
        width={300}
        className="w-full h-full object-cover aspect-square"
      />
      <div className="caption flex justify-between items-center">
        <div className="title">
          <h2 className="text-2xl font-bold">{name}</h2>
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
    </Link>
  );
};

export default Drink;
