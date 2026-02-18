// src/pages/ProductDetailPage.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../features/products/data/product';
import { useCartStore } from '../features/cart/store/CartStore';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { ShoppingCart } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  const { addItem } = useCartStore();

  if (!product) {
    return <div className="text-center py-20 text-red-600">រកមិនឃើញផលិតផល</div>;
  }

  const allImages = product.images.length > 0 ? [product.image, ...product.images] : [product.image];

  const [mainImage] = useState(allImages[0] || '');

  const handleAddToCart = () => {
    addItem({
      id: product.id + (selectedVariant ? `-${selectedVariant}` : ''),
      name: product.name + (selectedVariant ? ` (${selectedVariant})` : ''),
      price: product.price,
      quantity,
      image: product.image,
    });
    alert(`បានបន្ថែម ${quantity} ${product.name} ទៅកន្ត្រក!`);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div className="flex flex-col gap-4">
          <div className="aspect-square bg-white rounded-2xl overflow-hidden border shadow-lg">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-contain p-6"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {allImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                className="aspect-square object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition"
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-bold text-blue-700">
              {product.price.toLocaleString('km-KH')} ៛
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xl text-gray-500 line-through">
                {product.originalPrice.toLocaleString('km-KH')} ៛
              </span>
            )}
          </div>

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3">ជម្រើស</h3>
              <div className="flex flex-wrap gap-3">
                {product.variants.map(v => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.name)}
                    className={`px-5 py-2 border-2 rounded-full transition ${
                      selectedVariant === v.name
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stock */}
          <p className="text-lg">
            ស្តុកនៅសល់: <span className={product.stock && product.stock <= 5 ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}>
              {product.stock || 'អស់ស្តុក'}
            </span>
          </p>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-5 py-3 text-xl font-bold hover:bg-gray-100"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-8 py-3 text-xl font-semibold min-w-[70px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="px-5 py-3 text-xl font-bold hover:bg-gray-100"
                disabled={quantity >= (product.stock || 999)}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium text-lg"
            >
              <ShoppingCart size={20} />
              បញ្ចូលកន្ត្រក
            </button>
          </div>

          {/* Description */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-semibold mb-3">ពិពណ៌នា</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}