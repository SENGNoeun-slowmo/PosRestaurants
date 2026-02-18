// src/components/layout/Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, UserRound, ChevronDown, Search } from 'lucide-react';
import flat from '/images/flat.png'; // adjust path if needed
import { useCartStore } from '../../features/cart/store/CartStore';

function Navbar() {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Get real cart count from Zustand
  const cartItemCount = useCartStore(state => state.totalItems());

  // Close search when click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold text-black cursor-pointer">
            <a href="/">LOGO</a>
          </h1>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle search"
            >
              <Search className="w-6 h-6 text-gray-700" />
            </button>

            {/* Language */}
            <button className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors">
              <img src={flat} alt="KH Flag" className="w-6 h-6 rounded-full" />
              <span className="font-medium text-sm hidden sm:inline">KH</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* User */}
            <button className="p-2.5 rounded-full hover:bg-gray-100 transition-colors">
              <UserRound className="w-6 h-6 text-gray-700" />
            </button>

            {/* Cart */}
            <button
              onClick={() => navigate('/cart')} // or open cart drawer
              className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Search Panel */}
      <div
        ref={searchRef}
        className={`
          absolute inset-x-0 top-full z-40 bg-white shadow-lg
          transition-all duration-300 ease-out origin-top
          ${isSearchOpen
            ? 'opacity-100 translate-y-0 scale-y-100'
            : 'opacity-0 -translate-y-4 scale-y-95 pointer-events-none'}
        `}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              autoFocus={isSearchOpen}
              placeholder="ស្វែងរកផលិតផល..."
              className="
                w-full h-14 pl-12 pr-5
                bg-gray-50 border border-gray-200 rounded-full text-base
                placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                transition-all duration-200
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;