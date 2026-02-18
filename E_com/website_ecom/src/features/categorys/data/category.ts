import type { Category } from "../types";

export const categories: Category[] = [
  {
    id: "men",
    name: "បុរស",
    name_en: "Men",
    slug: "men",
    icon: "user",
    count: 248,
    categoryId: "1",
  },
  {
    id: "women",
    name: "ស្ត្រី",
    name_en: "Women",
    slug: "women",
    icon: "heart",
    count: 315,
    categoryId: "2",
  },
  {
    id: "kids",
    name: "កុមារ",
    name_en: "Kids",
    slug: "kids",
    icon: "sparkles",
    count: 142,
    categoryId: "3",
  },
  {
    id: "shoes",
    name: "ស្បែកជើង",
    name_en: "Shoes",
    slug: "shoes",
    icon: "shoe-prints",
    count: 187,
    categoryId: "4",
    // parentId: "men", // example of sub-category (optional)
  },
  {
    id: "bags",
    name: "កាបូប",
    name_en: "Bags",
    slug: "bags",
    icon: "shopping-bag",
    count: 96,

    categoryId: "5",
  },
  {
    id: "accessories",
    name: "គ្រឿងអលង្ការ & គ្រឿងតុបតែង",
    name_en: "Accessories",
    slug: "accessories",
    icon: "gem",
    count: 134,
    categoryId: "6",
  },
  {
    id: "electronics",
    name: "គ្រឿងអេឡិចត្រូនិក",
    name_en: "Electronics",
    slug: "electronics",
    icon: "mobile-alt",
    count: 68,

    categoryId: "7",
  },
  {
    id: "beauty",
    name: "គ្រឿងសម្អាត & ថែស្បែក",
    name_en: "Beauty & Care",
    slug: "beauty",
    icon: "spa",
    count: 112,
    categoryId: "8",
  },
  {
    id: "home-living",
    name: "គ្រួសារ & រស់នៅ",
    name_en: "Home & Living",
    slug: "home-living",
    icon: "home",
    count: 89,

    categoryId: "9",
  },
  {
    id: "sports-outdoor",
    name: "កីឡា & ក្រៅផ្ទះ",
    name_en: "Sports & Outdoor",
    slug: "sports-outdoor",
    icon: "running",
    count: 54,

    categoryId: "10",
  },
];
