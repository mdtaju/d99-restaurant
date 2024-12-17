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
          <div className="w-full max-w-[750px] h-[80px] relative">
            <Image
              src={Banner}
              alt="d99-restaurant-banner"
              layout="fill"
              className="absolute w-fit h-full object-contain"
              priority
            />
          </div>
        </div>
        {/* mobile nav start */}
        <MobileNav />
        {/* mobile nav end */}
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
