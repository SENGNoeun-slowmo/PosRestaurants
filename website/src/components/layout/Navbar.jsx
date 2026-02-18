import React, { useState, useEffect, useRef } from 'react';
import flat from '../../../public/images/flat.png';
import { ShoppingCart, UserRound, ChevronDown, X, Search } from 'lucide-react';
import Cart from '../../components/Cart'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);           // reference to the whole search area
  const [IsOpenCart,setIsOpenCart]=useState(false)

  // Toggle open/close when clicking the search icon
  const toggleSearch = () => {
    setIsOpen(prev => !prev);
  }; 

  // Close when clicking outside the search panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Only add listener when search is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // re-run when isOpen changes

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="bg-white z-50 sticky top-0 shadow-lg shadow-gray-200/70">
        <nav className="flex justify-between items-center h-16 px-4 md:px-6">
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold text-black cursor-pointer">
            <a href="/">LOGO</a>
          </h1>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search toggle */}
            <button
              onClick={toggleSearch}
              className="p-2.5 rounded-full bg-green-50 hover:bg-green-100 transition-colors"
              aria-label="Toggle search"
            >
              {isOpen ? (
                <Search className="w-6 h-6 text-gray-700" />
              ) : (
                <Search className="w-6 h-6 text-gray-700" />
              )}
            </button>

            {/* Language */}
            <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-green-50 hover:bg-green-100 transition-colors">
              <img src={flat} alt="flag" className="w-6 h-6 rounded-full" />
              <span className="font-medium text-sm">KH</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* User & Cart */}
            <button className="p-2.5 rounded-full bg-green-50 hover:bg-green-100 transition-colors">
              <UserRound className="w-6 h-6 text-gray-700" />
            </button>
            <button onClick={() => setIsOpenCart(true)} 
            className="relative p-2.5 rounded-full bg-green-50 hover:bg-green-100 transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
        
          </div>
        </nav>
      </div>

      {/* Search panel - appears below navbar */}
      <div
        ref={searchRef}  // ← important for outside click detection
        className={`
          absolute inset-x-0 top-full z-40 
          transition-all duration-300 ease-out origin-top
          ${isOpen
            ? 'opacity-100 translate-y-0 scale-y-100'
            : 'opacity-0 -translate-y-4 scale-y-95 pointer-events-none'
          }
        `}
      >
        <div className="px-4 py-6 md:py-8 flex justify-center">
          <div className="relative w-full max-w-xl">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 "
              size={20}
            />
            <input
              type="text"
              autoFocus={isOpen}
              className="
                w-full h-14 pl-12 pr-5 
                text-black
                bg-white backdrop-blur-sm border border-white/40 shadow-sm
                rounded-full text-base placeholder:text-gray-500
                focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-300/50
                transition-all duration-200
              "
              placeholder="Search products..."
            />
          </div>
        </div>
      </div>
     {IsOpenCart && <Cart  onClose={() =>setIsOpenCart(false)} />}

    </div>
  );
}

export default Navbar;