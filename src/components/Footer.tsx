import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white font-area px-4 md:px-8 py-8">
      <div className="line text-xs">
        <p className="uppercase">
          © 2024 Andromeda Coffee | By{" "}
          <Link href="https://medina.dev/" className="underline">
            Daniel Medina
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
