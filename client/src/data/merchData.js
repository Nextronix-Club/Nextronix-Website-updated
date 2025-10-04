// Import all merch images
import m1 from "@assets/Merchs/1.png";
import m2 from "@assets/Merchs/2.png";
import m3 from "@assets/Merchs/3.png";
import m4 from "@assets/Merchs/4.png";
import m5 from "@assets/Merchs/5.png";
import m6 from "@assets/Merchs/6.png";
import m7 from "@assets/Merchs/7.png";
import m8 from "@assets/Merchs/8.png";

export const MerchData = [
  {
    id: 1,
    title: "Nextronix Mug",
    image: m1,
    category: "Apparel",
    description: "",
    price: 100
  },
  {
    id: 2,
    title: "Nextronix Mug",
    image: m2,
    category: "Apparel",
    description: "",
    price: 300
  },
  {
    id: 3,
    title: "Nextronix Mug",
    image: m3,
    category: "Accessories",
    description: "",
    price: 150
  },
  {
    id: 4,
    title: "Nextronix Mug",
    image: m4,
    category: "Collectibles",
    description: "",
    price: 50
  },
  {
    id: 5,
    title: "Nextronix Mug",
    image: m5,
    category: "Accessories",
    description: "",
    price: 120
  },
  {
    id: 6,
    title: "Nextronix Mug",
    image: m6,
    category: "Accessories",
    description: "",
    price: 80
  },
  {
    id: 7,
    title: "Nextronix Mug",
    image: m7,
    category: "Collectibles",
    description: "",
    price: 40
  },
  {
    id: 8,
    title: "Nextronix Mug",
    image: m8,
    category: "Apparel",
    description: "",
    price: 200
  }
];

// No longer needed since we're using local images
// But keeping it for any legacy code that might reference it
export const generateDriveUrls = (driveId) => {
  // console.warn("generateDriveUrls is deprecated. Using local images now.");
  return {
    preview: null,
    thumbnail: null,
    view: null
  };
};