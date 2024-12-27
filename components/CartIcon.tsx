"use client";
import { Badge } from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/CartContext";

const CartIcon = () => {
  const { totalItems } = useCart();

  return (
    <div className="relative">
      <ShoppingCart size={24} />
      {totalItems > 0 && (
        <Badge
          content={totalItems}
          color="secondary"
          className="absolute -top-2 -right-2"
        >
          {/* Empty children required by NextUI Badge */}
          <></>
        </Badge>
      )}
    </div>
  );
};

export default CartIcon;
