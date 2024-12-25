"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { cartService } from "@/services/cart";

interface CartContextType {
  refreshCart: () => Promise<void>;
  totalItems: number;
  cartVersion: number; // Add this to trigger cart component updates
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [cartVersion, setCartVersion] = useState(0);

  const updateTotalItems = () => {
    setTotalItems(cartService.getTotalItems());
  };

  const refreshCart = async () => {
    setCartVersion((v) => v + 1);
    updateTotalItems();
  };

  // Initial load
  useEffect(() => {
    updateTotalItems();
  }, []);

  // Listen for storage events (cross-tab updates)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "shopping_cart") {
        updateTotalItems();
        setCartVersion((v) => v + 1);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <CartContext.Provider value={{ refreshCart, totalItems, cartVersion }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
