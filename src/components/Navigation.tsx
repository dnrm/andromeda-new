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
    { label: "About", url: "/about" },
    { label: "Menu", url: "/menu" },
  ];

  return (
    <>
      <div
        className={`${
          pathname === "/"
            ? "bg-[rgba(0,0,0,0.8)] opacity-100 text-white"
            : "bg-white text-black"
        } w-full flex justify-between items-center uppercase p-3 font-area md:px-16 z-50 transition-all duration-200 absolute`}
      >
        <div className="home">
          <p className="text-2xl font-tan-nimbus">
            <Link href="/#">
              <Image
                src={"/a.png"}
                alt=""
                height={40}
                width={40}
                className="rounded-full"
              />
            </Link>
          </p>
        </div>
        <div className="links flex justify-center items-center gap-5 invisible sm:visible text-sm">
          {navigationPaths.map((path) => (
            <Link
              href={path.url}
              key={path.label}
              className="flex flex-col group"
            >
              {path.label}
              <span className="h-[0.8px] w-0 group-hover:w-full transition-all duration-200 bg-white" />
            </Link>
          ))}
          <p className="flex flex-col cursor-pointer">
            <Link
              href="/cart"
              className="flex justify-center items-center gap-2 w-full"
            >
              <span className="flex flex-col group">
                <span>Cart ({cart?.length || 0}) </span>
                <span className="h-[0.8px] w-0 group-hover:w-full transition-all duration-200 bg-white" />
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </Link>
          </p>
        </div>
        <div
          className="hamburger sm:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
        {navbarOpen && (
          <div
            className={`mobile-navbar ${
              pathname === "/"
                ? "bg-[rgba(0,0,0,0.8)] text-white"
                : "bg-white text-black"
            } drop-shadow-md absolute z-10`}
          >
            <div className="links p-4 font-tan-nimbus">
              <p className="text-2xl">
                <Link href="/">
                  <span className={pathname === "/" ? "text-leaf" : undefined}>
                    Home
                  </span>
                </Link>
              </p>
              <p className="text-2xl">
                <Link href="/menu">
                  <span
                    className={pathname === "/menu" ? "text-leaf" : undefined}
                  >
                    Menu
                  </span>
                </Link>
              </p>
              <p className="text-2xl">
                <Link href="/about">
                  <span
                    className={pathname === "/about" ? "text-leaf" : undefined}
                  >
                    About
                  </span>
                </Link>
              </p>
              <p className="text-2xl">
                <Link href="/cart">
                  <span
                    className={pathname === "/cart" ? "text-leaf" : undefined}
                  >
                    Cart ({cart.length || 0})
                  </span>
                </Link>
              </p>
            </div>
            <hr />
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
