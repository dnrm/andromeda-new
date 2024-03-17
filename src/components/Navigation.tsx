"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navigation = () => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const cart = [];

  const navigationPaths = [
    { label: "Home", url: "/" },
    { label: "Menu", url: "/menu" },
    { label: "About", url: "/about" },
    { label: "Order", url: "/order" },
    // { label: "Gallery", url: "/gallery" },
  ];

  return (
    <nav className="navigation-bar">
      <Link href="/">
        <div className="top-bar justify-center items-center py-8 flex flex-col gap-2">
          <Image
            src="/a.png"
            alt=""
            height={40}
            width={40}
            className="rounded-full"
          />
          <p className="font-area font-bold text-2xl md:text-3xl text-black">ANDROMEDA COFFEE</p>
        </div>
      </Link>
      <div className="divider">
        <hr className="border-[0.5px] border-neutral-400" />
      </div>
      <div className="bottom-bar py-3 font-area">
        <ul className="link-list flex justify-center items-center gap-8">
          {navigationPaths.map((path, index) => (
            <li key={index}>
              <Link
                href={path.url}
                className={`text-black text-sm flex gap-1 justify-center items-center`}
              >
                <span className="hover:text-teal-600">
                  {path.label.toUpperCase()}
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.4}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="divider">
        <hr className="border-[0.5px] border-neutral-400" />
      </div>
    </nav>
  );
};

export default Navigation;
