"use client";
import { Button } from "@nextui-org/react";
import { ShoppingBasket } from "lucide-react";
import { cartService } from "@/services/cart";
import { useState } from "react";
import { useCart } from "@/app/CartContext";

const AddCartButton = ({ id }: { id: number }) => {
  const [isAdding, setIsAdding] = useState(false);
  const { refreshCart } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      cartService.addToCart(id);
      await refreshCart(); // Only call once
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Button
      className="text-white w-full
        bg-gradient-to-tr from-[#a8c0ff] to-[#3f2b96] hover:bg-gradient-to-bl
        transition-all duration-300"
      endContent={<ShoppingBasket size={24} color="white" />}
      onPress={handleAddToCart}
      isLoading={isAdding}
      spinnerPlacement="end"
    >
      Add to Cart
    </Button>
  );
};

export default AddCartButton;
// bg-gradient-to-r from-[#a8c0ff], to-[#3f2b96]
//bg-gradient-to-r from-purple-600 to-purple-400
