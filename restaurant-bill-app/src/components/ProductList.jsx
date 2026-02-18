// src/components/ProductList.js
function ProductList({ name }) {
  return (
    <div className="h-[100%] flex gap-3 text-center items-center p-2">
      <div className="w-[120px] h-[100px] flex justify-center items-center cursor-pointer">
        {name}
      </div>
    </div>
  );
}

export default ProductList;