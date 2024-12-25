interface CartItem {
  id: number;
  quantity: number;
}

const CART_KEY = "shopping_cart";

export const cartService = {
  getCart: (): CartItem[] => {
    if (typeof window === "undefined") return [];
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  },

  addToCart: (productId: number) => {
    const cart = cartService.getCart();
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  },

  removeFromCart: (productId: number) => {
    const cart = cartService.getCart();
    const updatedCart = cart.filter((item) => item.id !== productId);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  },

  updateQuantity: (productId: number, quantity: number) => {
    const cart = cartService.getCart();
    const item = cart.find((item) => item.id === productId);

    if (item) {
      item.quantity = Math.max(1, quantity); // Ensure quantity is at least 1
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
  },

  getTotalItems: (): number => {
    if (typeof window === "undefined") return 0;
    const cart = cartService.getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
  },

  clearCart: () => {
    localStorage.removeItem(CART_KEY);
  },
};
