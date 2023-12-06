import React from "react";
import Drink from "@/components/Drink";

interface PageProps {
  params: {
    item: string;
  };
}

const Page = ({ params }: PageProps) => {
  return (
    <div className="pt-20 bg-white text-black font-area">
      <div className="max-w-2xl mx-auto px-4">
        <Drink name={params.item} price={0} />
      </div>
    </div>
  );
};

export default Page;
