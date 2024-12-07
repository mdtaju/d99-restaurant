"use client";
import { MenuCategory } from "@/data/types";
import MenuDialog from "./dialog";

const Menu = ({ menu }: { menu: MenuCategory }) => {
  return (
    <div className="w-full h-[300px] overflow-hidden relative group">
      <div
        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-all duration-300 absolute"
        style={{ backgroundImage: `url(${menu.imgPath})` }}></div>
      <div className="w-full h-full bg-black bg-opacity-40 grid place-items-center sub_banner_transition transition-all duration-300 overflow-hidden relative z-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl text-white font-semibold capitalize">
            {`${menu.title} menu`}
          </h2>
          <MenuDialog menu={menu} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
