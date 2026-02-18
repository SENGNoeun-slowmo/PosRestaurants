// src/pages/PageProductList.tsx
import React, { useState } from 'react';
import { products } from '../features/products/data/product';
import { categories } from '../features/categorys/data/category';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ProductGrid from '../features/products/components/ProductGrid';

export default function PageProductList() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // Filter products using the actual field name from your data: CategoryId
  const filteredProducts = selectedCategoryId === null
    ? products
    : products.filter((p) => p.CategoryId === selectedCategoryId);

  // Optional: fake loading (remove if you want instant display)
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <LoadingSpinner size="lg" message="កំពុងទាញផលិតផល..." />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Category Filter - Horizontal Scroll */}
      <div className="relative py-2 px-3 sm:px-4">
  {/* Horizontal scroll container */}
  <div className="overflow-x-auto  no-scrollbar snap-x snap-mandatory -mx-1 sm:-mx-0   rounded-4xl ">
    <div className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 px-1 sm:px-0">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategoryId(category.categoryId)}
          className={`
            flex-shrink-0 px-4  py-1.5  xs:px-4 xs:py-2 sm:px-5 sm:py-2
            text-[13px] xs:text-sm sm:text-[15px]
            font-medium rounded-full
            transition-all duration-200 ease-in-out
            cursor-pointer select-none
            active:scale-[0.98]
            
            
            ${
              selectedCategoryId === category.id
                ? "bg-[#2481cc]/10 text-[#2481cc] dark:bg-[#3a8ed8]/20 dark:text-[#60a5fa] shadow-sm ring-1 ring-[#2481cc]/25 dark:ring-[#60a5fa]/20"
                : "bg-gray-100/90 text-gray-700 hover:bg-gray-200/90 active:bg-gray-300/80 dark:bg-gray-800/60 dark:text-gray-200 dark:hover:bg-gray-700/70 dark:active:bg-gray-600/80"
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  </div>

  {/* Optional subtle gradient fade on edges - very common in mobile apps */}
  <div className="pointer-events-none  overflow-hidden bg-gradient-to-r rounded-l-full absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent dark:from-blue-400/20 dark:to-transparent sm:hidden" />
  <div className="pointer-events-none rounded-r-full  bg-gradient-to-l absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent dark:from-blue-400/20 dark:to-transparent sm:hidden" />
</div>

      {/* Page Title */}
      <div className='items-start justify-start '>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
        {selectedCategoryId === null
          ? 'ផលិតផលទាំងអស់'
          : categories.find(c => c.categoryId === selectedCategoryId)?.name || 'ផលិតផល'}
      </h1>
      </div>
      

      {/* Show message when no products in selected category */}
      {filteredProducts.length === 0 && selectedCategoryId !== null ? (
        <div className="text-center py-16 text-gray-600 text-lg">
          មិនទាន់មានផលិតផលក្នុងប្រភេទនេះទេ
        </div>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </div>
  );
}