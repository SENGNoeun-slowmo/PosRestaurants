// src/components/ProductsContainer.js
import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductData from "../data/Product.json";

function ProductsContainer({ selectedTable, addItemsToOrder, inventory }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (name) => {
    if (selectedProducts.includes(name)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== name));
    } else {
      setSelectedProducts([...selectedProducts, name]);
    }
  };

  const handleAddToOrder = () => {
    if (!selectedTable) {
      alert("Please select a table.");
      return;
    }
    if (selectedProducts.length === 0) {
      alert("Please select at least one product.");
      return;
    }

    const itemsToAdd = selectedProducts.map((name) => {
      const product = ProductData.find((p) => p.name === name);
      return { item: product.name, price: product.price };
    });

    addItemsToOrder(itemsToAdd);
    setSelectedProducts([]); // Clear selections after adding
  };

  return (
    <div className="section">
      <h2>Menu</h2>
      <div className="h-[100%] overflow-x-auto flex-wrap">
        {ProductData.map((product, index) => (
          <button
            key={index}
            className={`px-4 py-2 m-2 ${
              selectedProducts.includes(product.name)
                ? "border-green-300 bg-gray-100 border text-black"
                : "border border-gray-700"
            } ${inventory[product.name] === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => inventory[product.name] > 0 && handleProductSelect(product.name)}
            disabled={inventory[product.name] === 0}
          >
            <ProductList name={product.name} />
          </button>
        ))}
      </div>
      <button
        className="px-4 py-2 m-2 bg-blue-500 text-white rounded disabled:opacity-50"
        onClick={handleAddToOrder}
        disabled={!selectedTable || selectedProducts.length === 0}
      >
        Add to Order
      </button>
    </div>
  );
}

export default ProductsContainer;