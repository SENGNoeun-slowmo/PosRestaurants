// src/features/products/data/mockProducts.ts
import { Product } from '../types'

export const products: Product[] = [
  {
    id: "1",
    name: "អាវយឺតបុរស Cotton Premium",
    price: 12.99,
    originalPrice: 18.99,
    image: "https://via.placeholder.com/400x400/E8F5E9/000000?text=T-Shirt",
    images: [
      "https://via.placeholder.com/400x400/E8F5E9/000000?text=T-Shirt",
      "https://via.placeholder.com/400x400/C8E6C9/000000?text=T-Shirt-2",
      "https://via.placeholder.com/400x400/A5D6A7/000000?text=T-Shirt-3"
    ],
    description: "អាវយឺតកប្បាស 100% ស្រួលស្លៀក ស័ក្តិសមសម្រាប់អាកាសធាតុក្តៅ",
    variants: [
      { id: "1-1", name: "Black", stock: 15 },
      { id: "1-2", name: "White", stock: 20 },
      { id: "1-3", name: "Navy", stock: 8 }
    ],
    stock: 43,
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: "2",
    name: "ឡាន់ហ្គេសស្ត្រីស្លឹកឈើ",
    price: 28.50,
    originalPrice: 35.00,
    image: "https://images.pexels.com/photos/28828019/pexels-photo-28828019.jpeg",
    images: [
      "https://images.pexels.com/photos/28828019/pexels-photo-28828019.jpeg",
      "https://via.placeholder.com/400x400/E1BEE7/000000?text=Dress-2"
    ],
    description: "រ៉ូបស្ត្រីគួរសមសម្រាប់ថ្ងៃឈប់សម្រាក ឬពិសេស",
    variants: [
      { id: "2-1", name: "S", stock: 5 },
      { id: "2-2", name: "M", stock: 12 },
      { id: "2-3", name: "L", stock: 3 }
    ],
    stock: 20,
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: "3",
    name: "ស្បែកជើងស្ពត Adidas Style",
    price: 42.00,
    image: "https://via.placeholder.com/400x400/FFF3E0/000000?text=Sneakers",
    images: ["https://via.placeholder.com/400x400/FFF3E0/000000?text=Sneakers"],
    description: "ស្បែកជើងស្ពត ស្រាល ដើរបានយូរ",
    variants: [
      { id: "3-1", name: "40", stock: 10 },
      { id: "3-2", name: "42", stock: 14 },
      { id: "3-3", name: "44", stock: 6 }
    ],
    stock: 30,
    rating: 4.3,
    reviewCount: 67
  },
  {
    id: "4",
    name: "ខោវ៉ាយឡង់ស្តរ",
    price: 24.99,
    image: "https://via.placeholder.com/400x400/E3F2FD/000000?text=Jeans",
    images: ["https://via.placeholder.com/400x400/E3F2FD/000000?text=Jeans"],
    description: "ខោវ៉ាយឡង់ស្តរ ម៉ូតបែបសម័យ",
    variants: [{ id: "4-1", name: "30", stock: 8 }, { id: "4-2", name: "32", stock: 12 }],
    stock: 20,
    rating: 4.4,
    reviewCount: 45
  },
  {
    id: "5",
    name: "ហូឌីធំសម្រាប់រដូវរងា",
    price: 32.00,
    originalPrice: 45.00,
    image: "https://images.pexels.com/photos/28828019/pexels-photo-28828019.jpeg",
    images: ["https://images.pexels.com/photos/28828019/pexels-photo-28828019.jpeg"],
    stock: 15,
    rating: 4.6,
    reviewCount: 92
  },
  {
    id: "6",
    name: "កាបូបស្ត្រី Handbag",
    price: 38.00,
    image: "https://images.pexels.com/photos/28828019/pexels-photo-28828019.jpeg",
    images: ["https://images.pexels.com/photos/28828019/pexels-photo-28828019.jpeg"],
    stock: 12,
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: "7",
    name: "វ៉ែនតា UV Protection",
    price: 18.50,
    image: "https://images.pexels.com/photos/28828019/pexels-photo-28828019.jpeg",
    images: ["https://images.pexels.com/photos/28828019/pexels-photo-28828019.jpeg"],
    stock: 25,
    rating: 4.2,
    reviewCount: 78
  },
  {
    id: "8",
    name: "នាឡិកាដៃ Quartz Watch",
    price: 55.00,
    originalPrice: 75.00,
    image: "https://images.pexels.com/photos/28828019/pexels-photo-28828019.jpeg",
    images: ["https://images.pexels.com/photos/28828019/pexels-photo-28828019.jpeg"],
    stock: 9,
    rating: 4.7,
    reviewCount: 203
  }
]