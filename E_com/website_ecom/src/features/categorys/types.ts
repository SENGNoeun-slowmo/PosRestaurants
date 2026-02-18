// src/features/products/data/mockCategories.ts

export interface Category {
  id: string;
  name: string; // Khmer name (shown to users)
  name_en: string; // English name (useful for slugs / admin)
  slug: string; // URL-friendly: used in /category/slug
  icon?: string; // optional: heroicons name or image path
  description?: string;
  count?: number; // optional: number of products (can be dynamic)
  //   parentId?: string;
  categoryId?: string|number;
}

