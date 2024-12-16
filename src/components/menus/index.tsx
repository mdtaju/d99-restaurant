import { roboto } from "@/app/fonts/font-variables";
import { menuData } from "@/data";
import Menu from "./menu";

function Menus() {
  return (
    <div
      id="menu"
      className="w-full max-w-[1230px] mx-auto py-[50px] px-4 md:px-0">
      <h2 className={`main_title ${roboto.className}`}>
        Our Culinary Delights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
        {menuData.map((menu, i) => (
          <Menu menu={menu} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Menus;
