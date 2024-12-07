export type MenuItem = {
  name: string;
  price: number;
};

export type MenuCategory = {
  imgPath: string;
  title: string;
  menuItems: MenuItem[];
};
