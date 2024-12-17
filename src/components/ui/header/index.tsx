"use client";
import { nav_items } from "@/data";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNav from "./mobile-nav";
import Banner from "/public/images/D99-banner.png";
import Logo from "/public/images/D99LOGO-black.svg";

const Header = () => {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    const location = window.location.pathname;
    setPathname(location);
  }, []);

  return (
    <div>
      <header className="bg-[#000] p-4 flex items-center justify-between gap-4">
        {/* mobile nav start */}
        <MobileNav />
        {/* mobile nav end */}
        <div className="mx-auto flex items-center justify-center gap-4 w-full max-w-[1080px]">
          {/* logo */}
          <div className="w-[80px] h-[80px] md:h-[112px] md:w-[112px] relative">
            <Image
              src={Logo}
              alt="d99-restaurant-logo"
              layout="fill"
              className="absolute w-full h-full object-contain"
              priority
            />
          </div>
          {/* banner */}
          <div className="w-full max-w-[750px] h-[80px] relative hidden md:block">
            <Image
              src={Banner}
              alt="d99-restaurant-banner"
              layout="fill"
              className="absolute w-fit h-full object-contain"
              priority
            />
          </div>
        </div>
        {/* call us for mobile view */}
        <Link href={"tel:+918110011099"} className="block md:hidden">
          <button
            aria-label="phone"
            className="size-8 rounded-full border border-themeLight grid place-items-center m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#f7fafc"
              className="size-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </button>
        </Link>
      </header>
      {/* nav bar */}
      <div className="bg-[#323232] border-t border-gray-400 hidden md:block">
        {/* desktop nav start */}
        <nav className="container mx-auto px-4 lg:px-0">
          <ul className="flex items-center gap-4 divide-x divide-gray-400 w-fit mx-auto">
            {nav_items.map((item, i) => {
              // console.log("item", item.link);
              // console.log("pathname", pathname);
              return (
                <li
                  key={i}
                  onClick={() => setPathname(item.link)}
                  className={`${
                    pathname === item.link ? "text-themePrimary" : "text-white"
                  } p-3 uppercase text-sm hover:text-white transition-all`}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* desktop nav end */}
      </div>
    </div>
  );
};

export default Header;
