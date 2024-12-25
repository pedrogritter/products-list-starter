"use client";
import { useCart } from "@/app/CartContext";

const ProductsList = () => {
  const { totalItems } = useCart();

  return (
    <div className="w-full flex h-full justify-center items-start">
      <div>
        <h4 className="text-lg">Items in Cart</h4>
        <h2 className="text-6xl font-semibold my-8 text-center">
          {totalItems}
        </h2>
      </div>
    </div>
  );
};

export default ProductsList;
