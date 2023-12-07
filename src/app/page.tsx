import Image from "next/image";
import Hero from "../components/Hero";
import Menu from "@/components/Menu";
import getProducts from "@/lib/getProducts";

export default function Home() {
  const products = getProducts();

  return (
    <main className="bg-white">
      <Hero />
      <div className="about bg-white mx-auto max-w-6xl py-12 gap-8 flex flex-col">
        <div className="title flex justify-start items-center gap-6">
          <h1 className="font-area text-4xl text-black font-bold">
            Coffee you can trust
          </h1>
          <div className="bg-teal-600 w-48 h-1 mt-3" />
        </div>
        <p className="text-neutral-600 font-area font-medium text-justify leading-loose">
          At Andromeda we strive to create the perfect cup of coffee, using
          beans from Lavazza, guranteeing a tasty and satisfying experience. We
          also offer seasonal coffee’s such as beans from foreign shops when we
          go on trips. Some past offerings include roasts from the UK, Germany,
          and Czech Republic. Brands from the aforementioned countries include
          Bonanza Coffee Roasters, Five Elephant from Germany, Origin Coffee
          Roasters from the UK, and The Miners from the Czech Republic.
        </p>
      </div>
      <div className="quality bg-white mx-auto max-w-6xl py-8 gap-8 grid grid-cols-1 md:grid-cols-3">
        <div className="text flex flex-col gap-8 col-span-1 md:col-span-2">
          <div className="title flex justify-start items-center gap-6">
            <h1 className="font-area text-4xl text-black font-bold">
              Our quality
            </h1>
            <div className="bg-teal-600 w-48 h-1 mt-3" />
          </div>
          <p className="text-neutral-600 font-area font-medium text-justify leading-loose">
            As a coffee fanatic myself, I strive to deliver customers with the
            best coffee experience they&quot;ll ever have. We use high quality
            coffee beans from Lavazza and guarantee a tasty and satisfying
            experience. We specialize in every aspect of coffee, from the bean
            to the milk texture, to the temperature of the cup.
          </p>
        </div>
        <div className="image w-full">
          <Image
            src="/espresso-machine.jpg"
            height={250}
            width={250}
            className="w-full"
            alt="Espresso machine"
          />
        </div>
      </div>
      <Menu products={products} />
    </main>
  );
}
