import { menuData } from "@/data";
import Menu from "./menu";

function Menus() {
  return (
    <div
      id="menu"
      className="w-full max-w-[1230px] mx-auto py-[30px] px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {menuData.map((menu, i) => (
          <Menu menu={menu} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Menus;
