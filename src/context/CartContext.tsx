// src/context/CartContext.tsx

'use client';

import { createContext, useState, ReactNode, useContext } from 'react';
import { CartItem, PerfumeProduct } from '@/types';

// 1. Add the new functions to our context's type definition
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: PerfumeProduct) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: PerfumeProduct) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product: product, quantity: 1 }];
      }
    });
  };

  // 2. NEW FUNCTION: Decrease an item's quantity
  const decreaseQuantity = (productId: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === productId);

      // If item quantity is 1, remove it from the cart
      if (existingItem?.quantity === 1) {
        return prevItems.filter(item => item.product.id !== productId);
      }
      
      // Otherwise, just decrease the quantity by 1
      return prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  // 3. NEW FUNCTION: Remove an item from the cart completely
  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => {
      return prevItems.filter(item => item.product.id !== productId);
    });
  };
  
  // 4. Add the new functions to the value object
  const value = {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}