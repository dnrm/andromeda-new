import React from "react";

const Order = () => {
  return (
    <div className="px-4 py-8 md:py-16 max-w-6xl mx-auto font-area flex flex-col gap-8">
      <h1 className="text-lg md:text-2xl font-bold">How to order</h1>
      <p className="text-neutral-600 text-sm md:text-base font-area font-medium text-justify leading-loose">
        To order your favourite coffee you can send me a message with the
        contents of your order and I will get back to you as soon as possible.
        In the future you will be able to place orders directly from this page.
      </p>
    </div>
  );
};

export default Order;
