import {
  BranchesType,
  ChefsType,
  CustomerReviewType,
  FaqsType,
  GalleryType,
  MenuCategory,
  MustTryItemType,
  SliderType,
} from "./types";

// [13:51, 17/12/2024] +91 99622 00376: Menu
// [13:51, 17/12/2024] +91 99622 00376: Must Try
// [13:51, 17/12/2024] +91 99622 00376: Our Spots
// [13:52, 17/12/2024] +91 99622 00376: Happy Customers
// [13:52, 17/12/2024] +91 99622 00376: About Us
// [14:05, 17/12/2024] +91 99622 00376: Manu Tagline
// [14:06, 17/12/2024] +91 99622 00376: Toast

export const nav_items = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Our Culinary Delights",
    link: "/#menu",
  },
  {
    name: "Our Chef's Exclusives",
    link: "/#items",
  },
  {
    name: "Our Spots",
    link: "/#branch",
  },
  {
    name: "Our Happy Customers",
    link: "/#reviews",
  },
  {
    name: "Our Journey",
    link: "/about",
  },
];

export const sliderData: SliderType[] = [
  {
    imgPath: "/images/Highlight.jpg",
    title: "",
    subTitle: "",
  },
  {
    imgPath: "/images/Highlight-1.jpg",
    title: "",
    subTitle: "",
  },
  {
    imgPath: "/images/Highlight-2.jpg",
    title: "",
    subTitle: "",
  },
  {
    imgPath: "/images/Highlight-3.jpg",
    title: "",
    subTitle: "",
  },
];

export const menuData: MenuCategory[] = [
  {
    imgPath: "/images/Dosas-Menu.jpg",
    title: "Dosas",
    menuItems: [
      {
        menuName: "PIZZA/PASTA DOSAS",
        items: [
          {
            name: "PANEER PEAS-CORN PIZZA DOSA",
            price: 159,
          },
          {
            name: "MUSHROOM CORN PIZZA DOSA",
            price: 159,
          },
          {
            name: "CHETTINAD PASTA DOSA",
            price: 159,
          },
          {
            name: "CREAMY PASTA DOSA",
            price: 159,
          },
        ],
      },
      {
        menuName: "DUM-DUM BRIYANI DOSAS",
        items: [
          {
            name: "MUSHROOM BRIYANI DOSA",
            price: 159,
          },
          {
            name: "PANEER BRIYANI DOSA",
            price: 159,
          },
          {
            name: "CORN BRIYANI DOSA",
            price: 159,
          },
          {
            name: "MIX-VEG BRIYANI DOSA",
            price: 159,
          },
        ],
      },
      {
        menuName: "GRAVY BUCKET DOSAS",
        items: [
          {
            name: "PANEER TIKKA MASALA DOSA",
            price: 159,
          },
          {
            name: "PANEER MAKHANI MASALA DOSA",
            price: 159,
          },
          {
            name: "CHETTINAD OPEN MASALA DOSA",
            price: 159,
          },
          {
            name: "KERALA OPEN MASALA DOSA",
            price: 159,
          },
          {
            name: "VEG MASALA FEAST DOSA",
            price: 159,
          },
        ],
      },
      {
        menuName: "NOODLE/CHINESE DOSAS",
        items: [
          {
            name: "AMERICAN CHOPSUEY DOSA",
            price: 149,
          },
          {
            name: "PANEER CHINESE MUSHROOM DOSA",
            price: 149,
          },
          {
            name: "CORN CHINESE MUSHROOM DOSA",
            price: 149,
          },
        ],
      },
      {
        menuName: "STUFF N ROLL DOSAS",
        items: [
          {
            name: "FRIES-STICK DOSA",
            price: 149,
          },
          {
            name: "PAN-MAYO DOSA",
            price: 149,
          },
          {
            name: "HAT-TRICK DOSA",
            price: 149,
          },
          {
            name: "JEENEE DOSA",
            price: 149,
          },
        ],
      },
      {
        menuName: "SO-SWEET DOSAS",
        items: [
          {
            name: "CHOCO-TRUFFLE DOSA",
            price: 139,
          },
          {
            name: "STRAW-BERRIED DOSA",
            price: 139,
          },
        ],
      },
      {
        menuName: "MAKE YOUR OWN DOSAS",
        items: [
          {
            name: "MAKE YOUR OWN DOSA",
            price: 149,
          },
        ],
      },
      {
        menuName: "CHEESE BURST DOSAS",
        items: [
          {
            name: "ALOO DRY CHEESE DOSA",
            price: 109,
          },
          {
            name: "BABYCORN CHEESE DOSA",
            price: 119,
          },
          {
            name: "CHINESE CHEESE DOSA",
            price: 119,
          },
          {
            name: "GOBI CHEESE DOSA",
            price: 119,
          },
          {
            name: "GREEN PEAS CHEESE DOSA",
            price: 119,
          },
          {
            name: "SWEETCORN CHEESE DOSA",
            price: 119,
          },
          {
            name: "MUSHROOM CHEESE DOSA",
            price: 129,
          },
          {
            name: "MIX-VEG CHEESE DOSA",
            price: 139,
          },
          {
            name: "PANEER CHEESE DOSA",
            price: 129,
          },
          {
            name: "PAVBHAJI CHEESE DOSA",
            price: 129,
          },
          {
            name: "PALAK PANEER CHEESE DOSA",
            price: 139,
          },
          {
            name: "PALAK MUSHROOM CHEESE DOSA",
            price: 139,
          },
          {
            name: "PANEER MUSHROOM CHEESE DOSA",
            price: 149,
          },
          {
            name: "PANEER SWEETCORN CHEESE DOSA",
            price: 139,
          },
          {
            name: "KAJU MIX-VEG CHEESE DOSA",
            price: 149,
          },
          {
            name: "KAJU PANEER CHEESE DOSA",
            price: 139,
          },
          {
            name: "KAJU MUSHROOM CHEESE DOSA’",
            price: 149,
          },
        ],
      },
      {
        menuName: "SPICY-SPECIAL DOSAS",
        items: [
          {
            name: "ALOO DRY CHILLI DOSA",
            price: 109,
          },
          {
            name: "BABYCORN CHILLI DOSA",
            price: 109,
          },
          {
            name: "CHINESE CHILLI DOSA",
            price: 109,
          },
          {
            name: "GOBI CHILLI DOSA",
            price: 109,
          },
          {
            name: "GREEN PEAS CHILLI DOSA",
            price: 109,
          },
          {
            name: "SWEETCORN CHILLI DOSA",
            price: 109,
          },
          {
            name: "MUSHROOM CHILLI DOSA",
            price: 119,
          },
          {
            name: "PANEER CHILLI DOSA",
            price: 119,
          },
          {
            name: "PAVBHAJI CHILLI DOSA",
            price: 119,
          },
          {
            name: "SCHEZWAN ALOO DRY DOSA",
            price: 109,
          },
          {
            name: "SCHEZWAN BABYCORN DOSA",
            price: 109,
          },
          {
            name: "SCHEZWAN CHINESE DOSA",
            price: 109,
          },
          {
            name: "SCHEZWAN GOBI DOSA",
            price: 109,
          },
          {
            name: "SCHEZWAN GREEN PEAS DOSA",
            price: 109,
          },
          {
            name: "SCHEZWAN PANEER DOSA",
            price: 119,
          },
          {
            name: "SCHEZWAN SWEETCORN DOSA",
            price: 119,
          },
          {
            name: "SCHEZWAN MIX-VEG DOSA",
            price: 129,
          },
        ],
      },
      {
        menuName: "MASALA-MASTI DOSAS",
        items: [
          {
            name: "MYSORE MASALA DOSA",
            price: 119,
          },
          {
            name: "GOBI MASALA DOSA",
            price: 119,
          },
          {
            name: "PAVBHAJI MASALA DOSA",
            price: 119,
          },
          {
            name: "MIX-VEG MASALA DOSA",
            price: 129,
          },
        ],
      },
      {
        menuName: "DOUBLE-DHAMAKA DOSAS",
        items: [
          {
            name: "ALOO DRY CHILLI CHEESE DOSA",
            price: 119,
          },
          {
            name: "BABYCORN CHILLI CHEESE DOSA",
            price: 129,
          },
          {
            name: "CHINESE CHILLI CHEESE DOSA",
            price: 129,
          },
          {
            name: "GOBI CHILLI CHEESE DOSA",
            price: 129,
          },
          {
            name: "GREEN PEAS CHILLI CHEESE DOSA",
            price: 129,
          },
          {
            name: "PANEER CHILLI CHEESE DOSA",
            price: 139,
          },
          {
            name: "SWEETCORN CHILLI CHEESE DOSA",
            price: 129,
          },
          {
            name: "MUSHROOM CHILLI CHEESE DOSA",
            price: 139,
          },
        ],
      },
      {
        menuName: "PAPER-PLAIN DOSAS",
        items: [
          {
            name: "BUTTER DOSA",
            price: 59,
          },
          {
            name: "CHEESE DOSA",
            price: 69,
          },
          {
            name: "SCHEZWAN BUTTER DOSA",
            price: 69,
          },
          {
            name: "SCHEZWAN CHEESE DOSA",
            price: 69,
          },
          {
            name: "GHEE DOSA",
            price: 69,
          },
          {
            name: "ONION PODI DOSA",
            price: 69,
          },
          {
            name: "CHOCOLATE DOSA",
            price: 69,
          },
        ],
      },
      {
        menuName: "COMBO DOSAS",
        items: [
          {
            name: "ALOO GOBI DOSA",
            price: 109,
          },
          {
            name: "ALOO PANEER DOSA",
            price: 109,
          },
          {
            name: "PALAK PANNER DOSA",
            price: 109,
          },
          {
            name: "PALAK MUSHROOM DOSA",
            price: 119,
          },
          {
            name: "PANEER MUSHROOM DOSA",
            price: 129,
          },
          {
            name: "PANEER SWEETCORN DOSA",
            price: 119,
          },
          {
            name: "KAJU SWEETCORN DOSA",
            price: 119,
          },
          {
            name: "KAJU GREEN PEAS DOSA",
            price: 119,
          },
          {
            name: "CHINESE MUSHROOM DOSA",
            price: 129,
          },
        ],
      },
      {
        menuName: "VARIETY DOSAS",
        items: [
          {
            name: "ALOO DRY DOSA",
            price: 99,
          },
          {
            name: "BABYCORN DOSA",
            price: 99,
          },
          {
            name: "CAPSICUMDOSA",
            price: 99,
          },
          {
            name: "CHINESE DOSA",
            price: 99,
          },
          {
            name: "GOBI DOSA",
            price: 99,
          },
          {
            name: "GREEN PEAS DOSA",
            price: 99,
          },
          {
            name: "MASALA DOSA",
            price: 99,
          },
          {
            name: "MUSHROOM DOSA",
            price: 99,
          },
          {
            name: "ONION DOSA",
            price: 99,
          },
          {
            name: "PANEER DOSA",
            price: 99,
          },
          {
            name: "PALAK DOSA",
            price: 99,
          },
          {
            name: "SWEETCORN DOSA",
            price: 99,
          },
          {
            name: "TOMATO DOSA",
            price: 99,
          },
        ],
      },
    ],
  },
  {
    imgPath: "/images/Drinks-Menu.jpg",
    title: "Drinks",
    menuItems: [
      {
        menuName: "Thick Shakes",
        items: [
          {
            name: "IRISH COFFEE SHAKE",
            price: 139,
          },
          {
            name: "KULFI SHAKE",
            price: 139,
          },
          {
            name: "PISTA SHAKE",
            price: 129,
          },
          {
            name: "BLACK CURRANT SHAKE",
            price: 129,
          },
          {
            name: "BUTTERSCOTCH SHAKE",
            price: 129,
          },
          {
            name: "MANGO SHAKE",
            price: 129,
          },
          {
            name: "CHOCOLATE SHAKE",
            price: 129,
          },
          {
            name: "STRAWBERRY SHAKE",
            price: 99,
          },
          {
            name: "VANILLA SHAKE",
            price: 99,
          },
          {
            name: "KIT-KAT SHAKE",
            price: 149,
          },
          {
            name: "DARK FANTASY SHAKE",
            price: 149,
          },
          {
            name: "MILO SHAKE",
            price: 149,
          },
          {
            name: "SNICKERS SHAKE",
            price: 149,
          },
          {
            name: "OREO SHAKE",
            price: 129,
          },
          {
            name: "JIM-JAM SHAKE",
            price: 129,
          },
          {
            name: "COLD COFFEE",
            price: 99,
          },
          {
            name: "CHOCO BOOST",
            price: 99,
          },
        ],
      },
      {
        menuName: "HOT CUPS",
        items: [
          {
            name: "TEA",
            price: 19,
          },
          {
            name: "LIME TEA",
            price: 9,
          },
          {
            name: "GINGER TEA",
            price: 19,
          },
          {
            name: "MASALA TEA",
            price: 19,
          },
          {
            name: "GREEN TEA",
            price: 9,
          },
          {
            name: "ELAICHI TEA",
            price: 19,
          },
          {
            name: "BLACK TEA",
            price: 9,
          },
          {
            name: "COFFEE",
            price: 19,
          },
          {
            name: "SUKKU COFFEE",
            price: 19,
          },
          {
            name: "BOOST",
            price: 19,
          },
          {
            name: "HORLICKS",
            price: 19,
          },
          {
            name: "HOT CHOCOLATE",
            price: 99,
          },
        ],
      },
      {
        menuName: "HOT BOWLS",
        items: [
          {
            name: "HOT N SOUR SOUP",
            price: 99,
          },
          {
            name: "MANCHOW SOUP",
            price: 99,
          },
          {
            name: "SWEETCORN SOUP",
            price: 99,
          },
          {
            name: "MIX-VEG SOUP",
            price: 99,
          },
        ],
      },
      {
        menuName: "Mojitos",
        items: [
          {
            name: "ORANGE PUNCH",
            price: 99,
          },
          {
            name: "STRAWBERRY",
            price: 99,
          },
          {
            name: "WATERMELON",
            price: 99,
          },
          {
            name: "LIME MINT",
            price: 99,
          },
          {
            name: "MANGO",
            price: 99,
          },
          {
            name: "GREEN APPLE",
            price: 129,
          },
          {
            name: "LITCHI DELIGHT",
            price: 129,
          },
          {
            name: "PINA COLADA",
            price: 129,
          },
          {
            name: "BLUE CURACAO",
            price: 129,
          },
          {
            name: "GRENADINE",
            price: 129,
          },
          {
            name: "LIME ICED TEA",
            price: 99,
          },
          {
            name: "PEACH ICED TEA",
            price: 99,
          },
          {
            name: "BERRY ICED TEA",
            price: 99,
          },
        ],
      },
      {
        menuName: "",
        items: [
          {
            name: "POMEGRANATE JUICE",
            price: 129,
          },
          {
            name: "MOSAMBI JUICE",
            price: 69,
          },
          {
            name: "ORANGE JUICE",
            price: 79,
          },
          {
            name: "MELON JUICE",
            price: 69,
          },
          {
            name: "LEMON JUICE",
            price: 29,
          },
          {
            name: "ABC JUICE",
            price: 89,
          },
        ],
      },
      {
        menuName: "JUMBO SHAKES",
        items: [
          {
            name: "CHOCO JUMBO SHAKE",
            price: 199,
          },
          {
            name: "BERRY JUMBO SHAKE",
            price: 199,
          },
        ],
      },
    ],
  },
  {
    imgPath: "/images/Desserts-Menu.jpg",
    title: "Desserts",
    menuItems: [
      {
        menuName: "Cup Icee",
        items: [
          {
            name: "VANILLA ICE CREAM",
            price: 69,
          },
          {
            name: "STRAWBERRY ICE CREAM",
            price: 69,
          },
          {
            name: "CHOCOLATE ICE CREAM",
            price: 99,
          },
          {
            name: "MANGO ICE CREAM",
            price: 99,
          },
          {
            name: "BUTTERSCOTCH ICE CREAM",
            price: 99,
          },
          {
            name: "BLACK CURRANT ICE CREAM",
            price: 99,
          },
          {
            name: "PISTA ICE CREAM",
            price: 99,
          },
          {
            name: "IRISH COFFEE ICE CREAM",
            price: 129,
          },
          {
            name: "KULFI DELIGHT ICE CREAM",
            price: 129,
          },
        ],
      },
      {
        menuName: "CONE ICEEE",
        items: [
          {
            name: "VANILLA ICE CREAM",
            price: 29,
          },
          {
            name: "STRAWBERRY ICE CREAM",
            price: 29,
          },
          {
            name: "CHOCOLATE ICE CREAM",
            price: 39,
          },
          {
            name: "MANGO ICE CREAM",
            price: 39,
          },
          {
            name: "BUTTERSCOTCH ICE CREAM",
            price: 39,
          },
          {
            name: "BLACK CURRANT ICE CREAM",
            price: 39,
          },
          {
            name: "PISTA ICE CREAM",
            price: 39,
          },
          {
            name: "IRISH COFFEE ICE CREAM",
            price: 49,
          },
          {
            name: "KULFI DELIGHT ICE CREAM",
            price: 49,
          },
        ],
      },
      {
        menuName: "BROWNIEE",
        items: [
          {
            name: "BROWNIE & VANILLA SCOOP",
            price: 99,
          },
          {
            name: "BROWNIE & CHOCO SCOOP",
            price: 99,
          },
          {
            name: "BROWNIE & COFFEE SCOOP",
            price: 129,
          },
          {
            name: "SIZZLING BROWNIE",
            price: 149,
          },
          {
            name: "DARK SIZZLING BROWNIE",
            price: 169,
          },
        ],
      },
      {
        menuName: "FALOODAS",
        items: [
          {
            name: "ROYAL FALOODA",
            price: 159,
          },
          {
            name: "MIXED FRUIT FALOODA",
            price: 149,
          },
          {
            name: "DRY FRUIT FALOODA",
            price: 149,
          },
          {
            name: "PINK ROSE FALOODA",
            price: 139,
          },
        ],
      },
      {
        menuName: "SALADS",
        items: [
          {
            name: "FRUIT BOWL",
            price: 159,
          },
          {
            name: "FRUIT ICE CREAM BOWL",
            price: 179,
          },
        ],
      },
      {
        menuName: "WAFFLES",
        items: [
          {
            name: "CLASSIC TRIPLE CHOCOLATE",
            price: 159,
          },
          {
            name: "CLASSIC DOUBLE CHOCOLATE",
            price: 129,
          },
          {
            name: "CLASSIC WHITE CHOCOLATE",
            price: 129,
          },
          {
            name: "MAGIC COFFEE DELIGHT",
            price: 149,
          },
          {
            name: "CLASSIC NUTELLA  TREAT",
            price: 189,
          },
          {
            name: "RED VELVET MIILK TREAT",
            price: 159,
          },
          {
            name: "RED VELVET CHOCO TREAT",
            price: 159,
          },
          {
            name: "RED VELVET NUTELLA TREAT",
            price: 199,
          },
          {
            name: "CHOCO WHITE CHOCOLATE",
            price: 129,
          },
          {
            name: "CHOCO NUTELLA TREAT",
            price: 199,
          },
          {
            name: "ICE CREAM (ADD ONS)",
            price: 29,
          },
          {
            name: "TOPPINGS (ADD ONS)",
            price: 9,
          },
        ],
      },
      {
        menuName: "WAFF-CAKES",
        items: [
          {
            name: "CHOCO ALMOND",
            price: 9,
          },
          {
            name: " ICE CREAM TREAT",
            price: 199,
          },
          {
            name: "VELVET WHITE CREAM",
            price: 229,
          },
          {
            name: "FOUR-EVER SPECIAL",
            price: 249,
          },
        ],
      },
    ],
  },
  {
    imgPath: "/images/Bowls-Menu.jpg",
    title: "Bowls",
    menuItems: [
      {
        menuName: "BOWLS (NOODLE)",
        items: [
          {
            name: "CLASSIC PLAIN MAGGI",
            price: 69,
          },
          {
            name: "VEG FUSION MAGGI",
            price: 89,
          },
          {
            name: "PEAS CORN MAGGI",
            price: 89,
          },
          {
            name: "CHEESE PLAIN MAGGI",
            price: 89,
          },
          {
            name: "VEG CHEESE MAGGI",
            price: 99,
          },
          {
            name: "CORN CHEESE MAGGI",
            price: 99,
          },
          {
            name: "MAGIC MASALA MAGGI",
            price: 99,
          },
          {
            name: "PEAS CORN CHEESE MAGGI",
            price: 99,
          },
        ],
      },
      {
        menuName: "BOWLS (PASTA)",
        items: [
          {
            name: "WHITE SAUCE PASTA",
            price: 129,
          },
          {
            name: "MAC N MASALA PASTA",
            price: 139,
          },
          {
            name: "CHEESE N CREAM PASTA",
            price: 149,
          },
          {
            name: "MAC N CHEESE PASTA",
            price: 149,
          },
        ],
      },
    ],
  },
  {
    imgPath: "/images/Breads-Menu.jpg",
    title: "Breads",
    menuItems: [
      {
        menuName: "Toast",
        items: [
          {
            name: "BUTTER GRILL TOAST",
            price: 49,
          },
          {
            name: "CHEESE GRILL TOAST",
            price: 59,
          },
          {
            name: "CHILLY CHEESE GRILL TOAST",
            price: 59,
          },
          {
            name: "FRUIT JAM GRILL TOAST",
            price: 59,
          },
          {
            name: "STRAWBERRY GRILL TOAST",
            price: 69,
          },
          {
            name: "CHOCOLATE GRILL TOAST",
            price: 69,
          },
          {
            name: "CHESSY JALAPENO GRILL TOAST",
            price: 99,
          },
          {
            name: "WHITE CHOCO GRILL TOAST",
            price: 99,
          },
          {
            name: "DARK CHOCO GRILL TOAST",
            price: 99,
          },
          {
            name: "COFFEE GRILL TOAST",
            price: 99,
          },
          {
            name: "HAZELNUT GRILL TOAST",
            price: 129,
          },
        ],
      },
    ],
  },
  {
    imgPath: "/images/Bites-Menu.jpg",
    title: "Bites",
    menuItems: [
      {
        menuName: "FRY-YAY",
        items: [
          {
            name: "CLASSIC-PEPPER FRIES",
            price: 99,
          },
          {
            name: "PERI-PERI FRIES",
            price: 99,
          },
          {
            name: "CREAM-ONION FRIES",
            price: 99,
          },
          {
            name: "CRISPY NACHOS",
            price: 99,
          },
          {
            name: "CRISPY-CHESSY NACHOS",
            price: 129,
          },
          {
            name: "POTATO SMILEYS",
            price: 99,
          },
          {
            name: "CHEESE SHOTS",
            price: 99,
          },
          {
            name: "VEGGIE NUGGETS",
            price: 99,
          },
          {
            name: "VEGGIE FINGERS",
            price: 99,
          },
          {
            name: "CRISPY BUTTER CORN",
            price: 99,
          },
          {
            name: "CRISPY PEPPER CORN",
            price: 99,
          },
          {
            name: "CRISPY CHILLI CORN",
            price: 99,
          },
          {
            name: "VEGGIE SPECIAL PLATTER",
            price: 139,
          },
          {
            name: "VEG STEAMED MIOMOS",
            price: 99,
          },
          {
            name: "CORN CHEESE STEAMED MOMOS",
            price: 109,
          },
          {
            name: "VEG FRIED MIOMOS",
            price: 109,
          },
          {
            name: "CORN CHEESE FRIED MOMOS",
            price: 119,
          },
          {
            name: "MOMOS SPECIAL PLATTER",
            price: 139,
          },
        ],
      },
    ],
  },
];

export const mustTryItems: MustTryItemType[] = [
  {
    name: "Paner Peas Corn Pizza Dosa",
    imgPath: "/images/file.jpg",
    price: 129,
  },
  {
    name: "Fries-Stick Dosa",
    imgPath: "/images/placeholder.svg",
    price: 129,
  },
  {
    name: "Creamy Pasta Dosa",
    imgPath: "/images/placeholder.svg",
    price: 129,
  },
  {
    name: "Chettnad Open Masala Dosa",
    imgPath: "/images/placeholder.svg",
    price: 129,
  },
  {
    name: "Mix-Veg Briyani Dosa",
    imgPath: "/images/placeholder.svg",
    price: 129,
  },
  {
    name: "Hat-Trick Dosa",
    imgPath: "/images/placeholder.svg",
    price: 129,
  },
  {
    name: "Mac N Cheese Pasta",
    imgPath: "/images/placeholder.svg",
    price: 129,
  },
  {
    name: "Choco Almond Waff Cake",
    imgPath: "/images/placeholder.svg",
    price: 129,
  },
  {
    name: "Peri-Peri Fries",
    imgPath: "/images/placeholder.svg",
    price: 129,
  },
  {
    name: "Corn Cheese Fried Momos",
    imgPath: "/images/placeholder.svg",
    price: 129,
  },
  {
    name: "Flavoured Mojtos",
    imgPath: "/images/placeholder.svg",
    price: 129,
  },
  {
    name: "Veggie Special Platter",
    imgPath: "/images/placeholder.svg",
    price: 129,
  },
];

export const chefsData: ChefsType[] = [
  {
    name: "MALARVIZHI N",
    imgPath: "/images/placeholder.svg",
    post: "Founder",
    facebookLink: "#",
    xLink: "#",
    instagramLink: "https://www.instagram.com/helloo.d99/",
  },
  {
    name: "K N",
    imgPath: "/images/placeholder.svg",
    post: "Co-Founder",
    facebookLink: "#",
    xLink: "#",
    instagramLink: "https://www.instagram.com/kn__official/ ",
  },
  {
    name: "LENIN",
    imgPath: "/images/placeholder.svg",
    post: "Co-Founder",
    facebookLink: "#",
    xLink: "#",
    instagramLink: "https://www.instagram.com/lenin_selva/",
  },
  {
    name: "ROBEL",
    imgPath: "/images/placeholder.svg",
    post: "Head Chef",
    facebookLink: "#",
    xLink: "#",
    instagramLink: "https://www.instagram.com/_rh_robel/",
  },
  {
    name: "EACHIN",
    imgPath: "/images/placeholder.svg",
    post: "Senior Chef",
    facebookLink: "#",
    xLink: "#",
    instagramLink: "https://www.instagram.com/__mr.eachin__011/",
  },
];

export const customerReview: CustomerReviewType[] = [
  {
    message:
      "I ordered paneer-briyani dosa which tasted amazinggg!! 😋😋😋 Highly recommended for foodies..!!! Though the space is compact, the ambience is impressive.�",
    name: "Sudha B",
    occupation: "Fusion Delights",
  },
  {
    message:
      "We visited this Restaurant today for the First time. Every dish ordered was very tasty, Ambience is soo good, very peaceful environment. Will surely recommend them!!!",
    name: "Anand Raj",
    occupation: "Fusion Delights",
  },
  {
    message:
      "I recently visited D99 dosa shop and had an amazing experience! The dosas were perfectly crispy and filled with delicious, flavorful fillings. The sambar and chutneys were authentic and complemented the dosas wonderfully. The staff was friendly and attentive, ensuring a pleasant dining experience. The ambiance was cozy and inviting, making it a great spot for enjoying South Indian cuisine. Highly recommend for anyone craving a fantastic dosa!",
    name: "Mohamed Fasith",
    occupation: "Symphony Of Delights",
  },
  {
    message:
      "We dined with 3 kids. We had to choose from so many varieties of dosa. The food taste was so good. options available for Indo Chinese food lovers as well. We loved hatrick dosa very much. Ambience and service were also good. Thanks D99 team !",
    name: "Abdul Aziz",
    occupation: "Symphony Of Delights",
  },
  {
    message:
      "Food was amazing.Great service and awesome place to chill with friends and family. Must try - chettinad and pasta dosa",
    name: "Narayanan Badri",
    occupation: "Fusion Delights",
  },
  {
    message:
      "First time I came to chennai and D99 dosa spot was one of my bucket list. Finally, I Visited and its Nice place to hang out with Friend's & Family. Ambience is too good😋 Most delicious dosa's we had. Must visit place�",
    name: "Ankitha Adigowda",
    occupation: "Fusion Delights",
  },
  {
    message: "Nyc food & friendly service! Must try cheese and creamy pasta.",
    name: "Manas Kutty",
    occupation: "Symphony Of Delights",
  },
  {
    message:
      "It's such a wonderful place to hang out with family and friends. Their menu, the food, the taste and the quality and price is highly satisfactory and worth every penny. The quality and taste of the food is top notch. Especially such a friendly and hospitality surrounded environment. Much recommended.",
    name: "A. Nancy",
    occupation: "Symphony Of Delights",
  },
  {
    message:
      "D99 has been on my list of places to review since the very beginning and it's probably remiss that it's taken me so long to get there and especially the staff were hard working and very kind towards the customers. Great interior work and theme. All varieties of dosa ,pasta,shakes,waffle are all must try one😋 Paneer tikka and pasta dosa takes my heart ❤",
    name: "Santhiya Kannan",
    occupation: "Fusion Delights",
  },
  {
    message:
      "The chef was quick enough to provide the orders and also suggested their specials. The taste and the flavours were great. A small eatery with some good ambience.",
    name: "Chandrasekhar N",
    occupation: "Fusion Delights",
  },
];

export const branchesData: BranchesType[] = [
  {
    name: "Fusion Delights",
    imgPath: "/images/d99-restaurant.jpg",
    address: "Pallavaram, Chennai - 43",
    mapLocation: "https://maps.app.goo.gl/qn3R99AkfABf7taT7",
    phone: "918110994399",
    whatsApp: "https://wa.me/+918110011099",
    zomatoUrl: "https://www.zomato.com/chennai/d99-pallavaram/order",
    swiggyUrl:
      "https://www.swiggy.com/city/chennai/d99-anna-nagar-chrompetrest829059",
  },
  {
    name: "Symphony Of Delights",
    imgPath: "/images/d99-restaurant.jpg",
    address: "Ramapuram, Chennai - 89",
    mapLocation: "https://maps.app.goo.gl/kyRsfgo51T5j98Tu8",
    phone: "918438999490",
    whatsApp: "https://wa.me/+918438999490",
    zomatoUrl: "https://www.zomato.com/chennai/d99-ramapuram/order",
    swiggyUrl:
      "https://www.swiggy.com/city/chennai/d99-kurinji-nagar-ramapuramrest910207",
  },
  {
    name: "Twisty Delights",
    imgPath: "/images/d99-restaurant.jpg",
    address: "Pammal, Chennai - 75",
    mapLocation: "https://maps.app.goo.gl/DjgSz6G3WGrDrTPK8",
    phone: "917708288444",
    whatsApp: "https://wa.me/+917708288444",
    zomatoUrl: "https://www.zomato.com/chennai/d99-pallavaram/order",
    swiggyUrl:
      "https://www.swiggy.com/city/chennai/d99-anna-nagar-chrompetrest829059",
  },
];

export const faqsData: FaqsType[] = [
  {
    question: "Our menu is a celebration of flavors, textures & cultures.",
    answer:
      "From Classic Dosas with a modern twist to innovative fusion creations!",
  },
  {
    question: "Craving tradition?",
    answer:
      "Savor our authentic tikka, chettinad masala dosa, bursting with aromatic spices.",
  },
  {
    question: "In the mood for something delicious?",
    answer:
      "Try our innovative Pizza Dosa, Fries-Stick Dosa, or the one-of-a-kind Dum-Dum Briyani Dosa, each crafted to tantalize your taste buds and excite your palate.",
  },
  {
    question: "Anything more???",
    answer:
      "We also offer a tempting selection of saucy pasta, crispy fries, and tasty nuggets to complete your meal.",
  },
  {
    question: "But it doesn't stop there!",
    answer:
      "Indulge in sweet treats that melt in your mouth and refreshing beverages that perfectly quench your thirst. Our desserts and drinks are designed to leave you smiling and craving more.",
  },
  {
    question:
      "P:S: Experience the perfect fusion of tradition and innovation that sets us apart. We can't wait to share our love for fusion foods with you!",
    answer: "",
  },
];

export const GalleryData: GalleryType[] = [
  {
    imgPath: "/images/placeholder.svg",
  },
  {
    imgPath: "/images/placeholder.svg",
  },
  {
    imgPath: "/images/placeholder.svg",
  },
  {
    imgPath: "/images/placeholder.svg",
  },
  {
    imgPath: "/images/placeholder.svg",
  },
  {
    imgPath: "/images/placeholder.svg",
  },
  {
    imgPath: "/images/placeholder.svg",
  },
];
