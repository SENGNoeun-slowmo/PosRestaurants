import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import { products } from "../components/features/products/data/product"; // កែ path ឲ្យត្រឹមត្រូវ

function ProductDetail() {
  const { id } = useParams();
  const productId = Number(id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-xl text-red-600 font-medium">
        រកមិនឃើញផលិតផល
      </div>
    );
  }

  // រូបភាពទាំងអស់
  const allImages = product.images?.length > 0 
    ? [product.image, ...product.images] 
    : [product.image || "/images/fallback-product.png"];

  const [mainImage, setMainImage] = useState(allImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  // Reset ពេល product ផ្លាស់ប្តូរ
  useEffect(() => {
    setMainImage(allImages[0]);
    setQuantity(1);
    setSelectedVariant(null);
  }, [productId, allImages]);

  const handleQuantityChange = (change: number) => {
    const maxStock = product.stock ?? 999;
    const newQty = quantity + change;
    if (newQty >= 1 && newQty <= maxStock) {
      setQuantity(newQty);
    }
  };

  const handleAddToCart = () => {
    if (quantity < 1) return;
    
    console.log("បន្ថែមទៅកន្ត្រក:", {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      variant: selectedVariant,
      image: mainImage,
    });

    alert(`បានបន្ថែម ${quantity} ${product.name} ទៅកន្ត្រក!`);
    // បន្ថែមទៅ cart store នៅទីនេះ (zustand ឬ context)
  };

  // Related products – ប្រើ categoryId (ត្រឹមត្រូវជាង name)
  const relatedProducts = products
    .filter((p) => p.id === product.id && p.id !== product.id)
    .slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Gallery */}
        <div className="flex flex-row lg:flex-row-reverse gap-4">
          <div className="w-20 md:w-24 lg:w-28 flex flex-col gap-3">
            {allImages.map((imgSrc, index) => (
              <button
                key={index}
                onClick={() => setMainImage(imgSrc)}
                className={`
                  border-2 rounded-lg overflow-hidden transition-all duration-200
                  ${mainImage === imgSrc 
                    ? "border-blue-600 shadow-md scale-105" 
                    : "border-gray-200 hover:border-blue-400 hover:shadow"}
                `}
              >
                <img
                  src={imgSrc}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full aspect-square object-cover"
                  onError={(e) => (e.currentTarget.src = "/images/fallback-product.png")}
                />
              </button>
            ))}
          </div>

          <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-auto max-h-[520px] object-contain p-6 mx-auto"
              onError={(e) => (e.currentTarget.src = "/images/fallback-product.png")}
            />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-blue-100">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl md:text-5xl font-bold text-blue-700">
                {product.price.toLocaleString("km-KH")} ៛
              </span>
              {product.original_price && product.original_price > product.price && (
                <span className="text-xl md:text-2xl text-gray-500 line-through">
                  {product.original_price.toLocaleString("km-KH")} ៛
                </span>
              )}
            </div>

            {/* Variants */}
            {product.variants?.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3">ជម្រើស / ទំហំ</h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedVariant(variant.value)}
                      className={`
                        px-5 py-2.5 border-2 rounded-full font-medium transition-colors
                        ${selectedVariant === variant.value
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"}
                      `}
                    >
                      {variant.value}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 text-lg">
              <span className="font-semibold">ស្តុកនៅសល់៖ </span>
              <span className={product.stock && product.stock <= 5 ? "text-red-600 font-bold" : "text-green-600 font-bold"}>
                {product.stock ?? "អស់ស្តុក"}
              </span>
            </div>

            <div className="mt-8 text-gray-700 leading-relaxed">
              <p>{product.description || "គ្មានការពិពណ៌នាលម្អិតសម្រាប់ផលិតផលនេះទេ។"}</p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-5 py-3 text-xl font-bold hover:bg-gray-100 disabled:opacity-40"
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="px-8 py-3 text-xl font-semibold min-w-[70px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-5 py-3 text-xl font-bold hover:bg-gray-100 disabled:opacity-40"
                  disabled={quantity >= (product.stock ?? 999)}
                >
                  +
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium text-lg flex-1"
                >
                  <ShoppingCart size={20} />
                  បញ្ចូលកន្ត្រក
                </button>

                <button className="px-8 py-4 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition font-medium text-lg flex-1">
                  ទិញឥឡូវ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
            ផលិតផលពាក់ព័ន្ធ
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => (window.location.href = `/product/${rel.id}`)}
                className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100"
              >
                <div className="aspect-square bg-gray-50">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => (e.currentTarget.src = "/images/fallback-product.png")}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-800 line-clamp-2 h-12">
                    {rel.name}
                  </h4>
                  <p className="mt-2 text-lg font-bold text-blue-700">
                    {rel.price.toLocaleString("km-KH")} ៛
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;