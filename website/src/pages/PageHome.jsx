import React, { useState } from "react";
import { Search } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
// import ProductGrid from "../components/ProductGrid";
// import {products,categories} from "../data/product"
// import Cart from "../components/Cart";
import ProductListPage from "./ProductListPage";





function PageHome() {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);

  // Filter products based on selected category
  // const filteredProducts =
  //   selectedCategoryId === 1
  //     ? products
  //     : products.filter((p) => p.categoryId === selectedCategoryId);

  return (
    <div className="bg-gradient-to-b from-blue-400/20 via-blue-200/20 to-blue-200 flex flex-col">
      {/* Header + Search */}
      <div className="container h-[190px] mx-auto m-5">
        <div className="h-[55%]">
          <h1 className="text-4xl text-black font-bold text-center py-3">
            Welcome to our store
          </h1>
          <p className="text-center text-black">
            Discover our amazing products and services
          </p>
        </div>
       
      </div>

      {/* Categories - Desktop */}
      <div className="w-full container mx-auto px-4 py-2">
      <div className="relative py-2 px-3 sm:px-4">
  {/* Horizontal scroll container */}
  <div className="overflow-x-auto  no-scrollbar snap-x snap-mandatory -mx-1 sm:-mx-0   rounded-4xl ">
    {/* <div className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 px-1 sm:px-0">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategoryId(category.id)}
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
    </div> */}
  </div>

  {/* Optional subtle gradient fade on edges - very common in mobile apps */}
  <div className="pointer-events-none  overflow-hidden bg-gradient-to-r rounded-l-full absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent dark:from-blue-400/20 dark:to-transparent sm:hidden" />
  <div className="pointer-events-none rounded-r-full  bg-gradient-to-l absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent dark:from-blue-400/20 dark:to-transparent sm:hidden" />
</div>

        {/* Categories - Mobile (horizontal scroll) */}
        {/* <div className="xl:hidden overflow-x-auto px-[8.5px] no-scrollbar bg-white py-2 rounded-4xl shadow-lg shadow-gray-200">
          <div className="inline-flex items-center gap-2">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategoryId(category.id)}
                className={`text-center rounded-[48px] transition-colors py-1 duration-300 cursor-pointer px-4 whitespace-nowrap
                  ${
                    selectedCategoryId === category.id
                      ? "bg-blue-300/20 text-blue-500 shadow-blue-200 "
                      : "hover:bg-blue-300/20 hover:text-blue-500 text-gray-800"
                  }`}
              >
                <h1 className="text-lg font-mono font-semibold">
                  {category.name}
                </h1>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Title */}
      {/* <div className="container mx-auto h-[5%] items-center flex">
        <h1 className="text-2xl font-bold text-black m-[40px]">
          {selectedCategoryId === 1
            ? "All Products"
            : `${categories.find((c) => c.id === selectedCategoryId)?.name} Products`}
        </h1>
      </div> */}

      {/* Products Grid */}
      <ProductListPage />
      {/* {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 text-xl py-10">
          No products found in this category.
        </p>
      )} */}
    </div>
  );
}

export default PageHome;