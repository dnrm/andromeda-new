import React from "react";

const About = () => {
  return (
    <div className="px-2 py-16">
      <div className="quality bg-white mx-auto max-w-6xl gap-8">
        <div className="text flex flex-col gap-4 col-span-1 md:col-span-2 font-area">
          <h1 className="text-2xl font-bold">About Andromeda Coffee</h1>
          <p className="text-neutral-600 font-area font-medium text-justify leading-loose">
            Andromeda Coffee is a coffee project created by a coffee enthusiast
            who&apos;s passionate about sharing quality coffee with the world.
            We believe that everyone deserves to have access to high quality
            coffee at an affordable price. We are committed to providing our
            customers with the best coffee experience possible.
          </p>
          <p className="text-neutral-600 font-area font-medium text-justify leading-loose">
            Andromeda&apos;s founder, <em>Daniel Medina</em>, has traveled the
            world and experienced coffee in more than 20 cities around the
            world, including Berlin, London, Hamburg, Houston, and Mexico City.
            He has learned from the best and is now ready to share his knowledge
            and his passion for coffee with you.
          </p>
          <p className="text-neutral-600 font-area font-medium text-justify leading-loose">
            We are committed to providing our customers with the best coffee
            experience possible. We source our coffee beans from the best coffee
            farms and roasters around the world. Our coffee is always fresh and
            delicious. We are constantly working to improve our products and
            services to ensure that our customers are always satisfied.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
