import Image from "next/image";
import Hero from "../components/Hero";
import Menu from "@/components/Menu";
import getProducts from "@/lib/getProducts";
import { Product } from "@/lib/Products";

export default function Home() {
  const products: Product[] = getProducts();
  const photos = [
    "/IMG_3180.JPG",
    "/IMG_4277.JPEG",
    "/IMG_3320.JPG",
    "/IMG_0573.JPEG",
  ];

  return (
    <main className="bg-white flex flex-col gap-8">
      <Hero />
      <div className="about bg-white mx-auto max-w-6xl gap-8 flex flex-col">
        <div className="title flex flex-col justify-center items-center gap-4">
          <h1 className="font-area text-2xl text-black font-bold uppercase text-center">
            Andromeda Coffee
          </h1>
          <p className="px-4 font-area text-sm max-w-xl text-center leading-relaxed">
            Andromeda Coffee is a home coffee project that aims to provide
            customers with high quality coffee at an affordable price.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 h-[30rem]">
        <div className="relative">
          <Image
            alt=""
            layout="fill"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1608552265232-3a1e3feb0271?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="font-bold text-2xl px-4 font-area pb-4">Menu</h1>
        <Menu products={products} />
      </div>
    </main>
  );
}
