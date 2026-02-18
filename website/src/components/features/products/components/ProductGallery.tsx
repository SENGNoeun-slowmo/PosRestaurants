// src/features/products/components/ProductGallery.tsx
import { useState } from 'react'

interface ProductGalleryProps {
  images: string[]
  mainImage?: string
}

export default function ProductGallery({ images, mainImage }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage || images[0])

  if (images.length === 0) {
    return <div className="aspect-square bg-gray-200 rounded-lg" />
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden border">
        <img
          src={selectedImage}
          alt="Product"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`aspect-square rounded-md overflow-hidden border-2 ${
                selectedImage === img
                  ? 'border-red-500'
                  : 'border-transparent hover:border-gray-300'
              } transition-all`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}