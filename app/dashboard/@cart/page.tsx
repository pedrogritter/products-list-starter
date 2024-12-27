"use client";
import { useEffect, useState } from "react";
import { Card, Button } from "@nextui-org/react";
import CartCard from "@/components/CartCard";
import { cartService } from "@/services/cart";
import { getProduct } from "@/services/product";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/app/CartContext";
import ConfirmationModal from "@/components/ConfirmationModal";

interface CartProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const { refreshCart, cartVersion } = useCart(); // Add cartVersion here
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadCartItems = async () => {
    const cart = cartService.getCart();
    const items = await Promise.all(
      cart.map(async (item) => {
        const product = await getProduct(item.id);

        return {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: item.quantity,
        };
      })
    );
    setCartItems(items);
  };

  // Update effect to depend on cartVersion
  useEffect(() => {
    loadCartItems();
  }, [cartVersion]); // Reload when cartVersion changes

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 gap-4">
        <ShoppingBag size={48} className="text-gray-400" />
        <p className="text-xl text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartCard
            key={item.id}
            id={item.id}
            name={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
            quantity={item.quantity}
            onUpdate={async () => {
              await loadCartItems();
              refreshCart();
            }}
          />
        ))}
      </div>

      {/* Order Summary */}
      <Card className="p-4 mt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-xl font-bold">${totalAmount.toFixed(2)}</span>
        </div>
        <Button
          className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white"
          size="lg"
          onPress={handleConfirmOrder}
        >
          Confirm Order
        </Button>
      </Card>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartItems={cartItems.map((item) => ({
          name: item.title,
          quantity: item.quantity,
          price: item.price,
        }))}
        totalAmount={totalAmount}
      />
    </div>
  );
};

export default Cart;
