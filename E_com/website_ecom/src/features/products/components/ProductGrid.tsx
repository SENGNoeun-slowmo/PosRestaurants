// src/features/products/components/ProductGrid.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../types';



interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const navigate = useNavigate();

  if (products.length === 0) {
    return (
      <div className="text-center py-16 text-gray-600 text-lg font-medium">
        មិនមានផលិតផលសម្រាប់បង្ហាញទេ
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {products.map((product) => {
        const hasDiscount = product.originalPrice && product.originalPrice > product.price;

        return (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="group relative flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-gray-100"
          >
            {/* Image */}
            <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/fallback-product.png';
                }}
              />

              {hasDiscount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                  -{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col flex-grow p-4">
              <h3 className="font-medium text-gray-800 line-clamp-2 min-h-[2.8em] mb-1.5 group-hover:text-blue-700 transition-colors">
                {product.name}
              </h3>

              <div className="mt-auto flex items-baseline gap-2.5">
                <span className="text-xl font-bold text-blue-700">
                  {product.price.toLocaleString('km-KH')} ៛
                </span>

                {hasDiscount && (
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice!.toLocaleString('km-KH')} ៛
                  </span>
                )}
              </div>

              {product.stock !== undefined && (
                <p
                  className={`mt-2 text-xs font-medium ${
                    product.stock <= 5 && product.stock > 0 ? 'text-red-600' : 'text-gray-600'
                  }`}
                >
                  ស្តុកនៅសល់: {product.stock}
                </p>
              )}

              {product.stock === 0 && (
                <p className="mt-2 text-xs text-gray-500 font-medium">អស់ស្តុក</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}