export type Items = {
  name: string;
  price: number;
};

export type MenuItems = {
  menuName: string;
  items: Items[];
};

export type MenuCategory = {
  imgPath: string;
  title: string;
  menuItems: MenuItems[];
};
