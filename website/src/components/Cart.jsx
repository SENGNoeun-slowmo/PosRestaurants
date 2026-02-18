// MiniCart.tsx
import { useState } from 'react';
import { Trash2, Heart, ChevronDown, X } from 'lucide-react';

export default function MiniCart({onClose }) {
  const [size, setSize] = useState('38');
  const [quantity, setQuantity] = useState(1);

  // Price calculation (from your screenshot)
  const originalPrice = 40.59;
  const discountAmount = 6.09;
  const discountedPrice = originalPrice - discountAmount;
  const delivery = 1;
  const total = discountedPrice + delivery;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      {/* Drawer / Side panel */}
      <div className="bg-white w-full max-w-md h-full overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-black"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 space-y-6">
          {/* Product item */}
          <div className="flex gap-4">
            {/* Product image */}
            <div className="w-28 h-28 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Casual Sneakers Orange"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Casual Sneakers</h3>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Code: 5252508039 - Orange
                  </p>
                </div>
                <button className="text-gray-500 hover:text-red-600">
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Size & Quantity */}
              <div className="flex gap-6 mt-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Size</label>
                  <div className="relative inline-block">
                    <select
                      value={size}
                      onChange={e => setSize(e.target.value)}
                      className="border border-gray-300 rounded px-3 py-1.5 pr-8 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-black"
                    >
                      <option>36</option>
                      <option>37</option>
                      <option>38</option>
                      <option>39</option>
                      <option>40</option>
                      <option>41</option>
                    </select>
                    <ChevronDown 
                      size={16} 
                      className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Quantity</label>
                  <div className="relative inline-block">
                    <select
                      value={quantity}
                      onChange={e => setQuantity(Number(e.target.value))}
                      className="border border-gray-300 rounded px-3 py-1.5 pr-8 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-black"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(n => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                    <ChevronDown 
                      size={16} 
                      className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" 
                    />
                  </div>
                </div>
              </div>

              {/* Pricing per item */}
              <div className="mt-3">
                <div className="text-lg font-bold text-red-600">
                  US${discountedPrice.toFixed(2)}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="line-through text-gray-500">
                    US${originalPrice.toFixed(2)}
                  </span>
                  <span className="text-green-600 font-medium">
                    (15% off) -US${discountAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Wishlist action */}
              <button className="flex items-center gap-1.5 mt-3 text-sm text-gray-700 hover:text-red-600">
                <Heart size={16} />
                <span>Move to wishlist</span>
              </button>
            </div>
          </div>

          {/* Empty wishlist hint (faded background text like in screenshot) */}
          <div className="text-center py-10 text-gray-300 italic pointer-events-none select-none">
            <p className="text-xl font-medium">Awww ..Snap.</p>
            <p>Your wish list is empty!</p>
            <p className="text-sm mt-2">
              Check out our latest arrivals and stay up to date with our latest styles!
            </p>
          </div>
        </div>

        {/* Footer / Summary */}
        <div className="border-t p-5 bg-gray-50">
          <div className="space-y-2.5 text-sm">
            <div className="flex justify-between">
              <span>Total</span>
              <span>US${originalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Save</span>
              <span>-US${discountAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery fee</span>
              <span>US${delivery.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-3 border-t font-bold text-base">
              <span>Amount to pay</span>
              <span>US${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-black text-white py-3.5 rounded-lg font-medium hover:bg-gray-900 transition">
            Proceed to Checkout
          </button>

          {/* Optional extra button like in some Zando flows */}
          <button className="w-full mt-3 border border-black text-black py-3 rounded-lg font-medium hover:bg-gray-50 transition">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}