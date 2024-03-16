import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
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
          <p className="font-area text-sm max-w-xl text-center leading-relaxed">
            Andromeda Coffee is a home coffee project that aims to provide
            customers with high quality coffee at an affordable price.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 h-80">
        <div className="relative">
          <Image
            alt=""
            layout="fill"
            objectFit="cover"
            src="https://plus.unsplash.com/premium_photo-1674931348670-68936350ed55?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className="about-brief grid grid-cols-1 md:grid-cols-2 h-96 font-area">
        <div className="col-1 h-full w-full flex flex-col justify-center items-center text-center px-2 md:px-12 gap-4">
          <h1 className="font-bold text-2xl">About Us</h1>
          <p>
            Andromeda Coffee is a coffee project created by a coffee enthusiast
            who&apos;s passionate about sharing quality coffee with the world.
            We believe that everyone deserves to have access to high quality
            coffee at an affordable price. We are committed to providing our
            customers with the best coffee experience possible.
          </p>
        </div>
        <div className="col-2">
          <div className="container relative w-full h-96">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
