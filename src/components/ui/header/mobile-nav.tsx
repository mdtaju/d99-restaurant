import { nav_items } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileNav = () => {
  const [toggleNav, setToggle] = useState(false);
  const pathname = usePathname();
  return (
    <div>
      <button
        className="block md:hidden text-white p-2"
        aria-label="menu-btn"
        onClick={() => setToggle((prevState) => !prevState)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={`block md:hidden fixed z-[1000] top-0  bg-white w-screen max-w-[425px] h-screen ${
          toggleNav ? "left-[0]" : "left-[-100%]"
        } transition-all duration-300 p-4`}>
        <button
          className="p-2 float-right"
          aria-label="nav-close-btn"
          onClick={() => setToggle((prevState) => !prevState)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="p-1">
          <ul className="flex flex-col gap-3">
            {nav_items.map((item, i) => (
              <li
                key={i}
                onClick={() => setToggle(false)}
                className={`${
                  pathname === item.link
                    ? "text-themePrimary"
                    : "text-themeBlack"
                }`}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
