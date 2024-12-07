"use client";
import { nav_items } from "@/data";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNav from "./mobile-nav";
import Logo from "/public/images/logo.svg";

const Header = () => {
  const path = usePathname();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    const hashName = window.location.hash;
    if (hashName) {
      setPathname(hashName);
    } else {
      setPathname(path);
    }
  }, [path]);

  return (
    <div>
      <header className="bg-themeBlack flex justify-between items-center md:justify-center p-4">
        {/* logo */}
        <div className="w-[150px] h-[80px] md:h-[112px] md:w-[208px] relative">
          <Image
            src={Logo}
            alt="d99-restaurant-logo"
            layout="fill"
            className="absolute w-full h-full object-contain"
          />
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
            {nav_items.map((item, i) => (
              <li
                key={i}
                className={`${
                  pathname.includes(item.link)
                    ? "text-themePrimary"
                    : "text-white"
                } p-4 uppercase text-lg text-white hover:text-themePrimary transition-all`}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* desktop nav end */}
      </div>
    </div>
  );
};

export default Header;
