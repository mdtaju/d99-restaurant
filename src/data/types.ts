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

export type MustTryItemType = {
  imgPath: string;
  name: string;
  price: number;
};

export type ChefsType = {
  name: string;
  imgPath: string;
  post: string;
  facebookLink: string;
  xLink: string;
  instagramLink: string;
};

export type CustomerReviewType = {
  message: string;
  name: string;
  occupation: string;
};

export type BranchesType = {
  imgPath: string;
  name: string;
  address: string;
  phone: string;
  mapLocation: string;
  whatsApp: string;
  zomatoUrl: string;
  swiggyUrl: string;
};
