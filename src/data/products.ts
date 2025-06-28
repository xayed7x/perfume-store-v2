// src/data/products.ts

import { PerfumeProduct } from "@/types";

export const mockProducts: PerfumeProduct[] = [
  {
    id: 1,
    name: "Midnight Bloom",
    description:
      "An alluring and mysterious fragrance with notes of black cherry, jasmine, and dark chocolate.",
    price: 120,
    imageUrl: "/images/perfume1.jpg", // Using local path
  },
  {
    id: 2,
    name: "Ocean Breeze",
    description:
      "A fresh and invigorating scent with hints of sea salt, citrus, and a touch of driftwood.",
    price: 95,
    imageUrl: "/images/perfume2.jpeg",
  },
  {
    id: 3,
    name: "Golden Hour",
    description:
      "A warm and radiant perfume featuring notes of amber, vanilla, and a whisper of spice.",
    price: 150,
    imageUrl: "/images/perfume3.jpeg",
  },
  {
    id: 4,
    name: "Verdant Grove",
    description:
      "An earthy and calming scent with notes of moss, vetiver, and freshly cut grass.",
    price: 110,
    imageUrl: "/images/perfume4.jpeg",
  },
  {
    id: 5,
    name: "Spiced Ember",
    description:
      "A cozy and inviting fragrance with hints of cinnamon, clove, and a touch of leather.",
    price: 135,
    imageUrl: "/images/perfume5.jpeg",
  },
  {
    id: 6,
    name: "Citrus Veil",
    description:
      "A bright and zesty perfume bursting with notes of grapefruit, bergamot, and neroli.",
    price: 90,
    imageUrl: "/images/perfume6.jpeg",
  },
];
