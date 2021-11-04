import trousers from "./images/dri-fit-academy-football-pants-p4fxCh-removebg-preview.png";
import skateboard from "./images/61Z2D69mCjL._AC_SX679_-removebg-preview.png";
import projector from "./images/LUMOSNANOPortableProjectorFront_1024x1024_2x-removebg-preview.png";
import sport from "./images/braden-collum-9HI8UJMSdZA-unsplash.jpg";
import fashion from "./images/freestocks-_3Q3tsJ01nc-unsplash.jpg";
import household from "./images/svitlana-VFmDiQtkxlw-unsplash.jpg";
import food from "./images/eaters-collective-12eHC6FxPyg-unsplash.jpg";
import laptop_stand from "./images/97-Satechi-Universal-Vertical-Laptop-Stand-Space-Gray-iCare-Store-removebg-preview.png";

export const allProducts = [
  {
    id: 1,
    name: "Nike long pants",
    price: 45,
    seller: "Nike Official",
    image: trousers,
  },
  {
    id: 2,
    name: "Laptop stand",
    price: 25,
    seller: "MyTech",
    image: laptop_stand,
  },
  {
    id: 3,
    name: "Skate board",
    price: 35,
    seller: "IntelKid",
    image: skateboard,
  },
  {
    id: 4,
    name: "Skate board",
    price: 35,
    seller: "IntelKid",
    image: skateboard,
  },

  {
    id: 5,
    name: "Starry Light Projector",
    price: 20,
    seller: "Green Lighting MY",
    image: projector,
  },
  {
    id: 6,
    name: "Denim Jacket",
    price: 40,
    seller: "Denim Store",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fashion-blogger-lisa-hahnbueck-writing-a-text-message-on-news-photo-595415388-1555960247.jpg?crop=0.670xw:1.00xh;0.223xw,0&resize=640:*",
    sizes: [
      { size: "XS", quantity: 10 },
      { size: "S", quantity: 5 },
      { size: "M", quantity: 20 },
      { size: "L", quantity: 10 },
      { size: "XL", quantity: 5 },
    ],
    color: ["blue", "grey", "black"],
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et cursus erat, in mattis purus. Cras porttitor magna ut tempus efficitur. Cras molestie finibus sapien nec vulputate. Cras metus eros, laoreet at ipsum sed, placerat sollicitudin quam.",
  },
];

export const CategoriesData = [
  { id: 1, title: "Sports", image: sport },
  { id: 2, title: "Tech", image: fashion },
  { id: 3, title: "Household", image: household },
  // { title: "Food and beverages", image: food }
];
