import React from "react";
import Drink from "./Drink";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="pt-20">
      <div className="quality bg-white mx-auto max-w-6xl py-4 gap-8">
        <div className="text flex flex-col gap-8 col-span-1 md:col-span-2">
          <div className="title flex justify-start items-center gap-6">
            <h1 className="font-area text-4xl text-black font-bold">Menu</h1>
            <div className="bg-teal-600 w-48 h-1 mt-3" />
          </div>
          <p className="text-neutral-600 font-area font-medium text-justify leading-loose">
            Check out our menu below. We offer a wide variety of coffee, tea,
            and other drinks. We also offer a wide variety of pastries and
            snacks.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl text-black font-area">
        <Drink name="Americano" price={4} />
        <Drink name="Espresso" price={3} />
        <Drink name="Latte" price={6} />
        <Drink name="V60" price={6.5} />
        <Drink name="Drip coffee" price={3} />
        <Drink name="Aeropress coffee" price={4} />
        <Drink name="Macchiatto" price={4} />
        <Drink name="Cortado" price={4} />
        <Drink name="Cappuccino" price={6} />
        <Drink name="Cheesecake" price={7.5} />
        <Drink name="Brownie" price={4} />
        <Drink name="Cookie" price={2.5} />
      </div>
      <div className="mx-auto max-w-6xl pt-20 pb-24 flex justify-center items-center">
        <div className="cta">
          <Link
            href="/menu"
            className="bg-transparent uppercase hover:bg-teal-600 hover:text-white text-teal-600 border-4 border-teal-600 py-2 md:py-3 text-base md:text-lg px-8 md:px-14 rounded-xl font-semibold hover:font-bold font-area hover:scale-110 transition-all duration-250"
          >
            View full menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
