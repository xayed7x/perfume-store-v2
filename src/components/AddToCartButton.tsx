// src/components/AddToCartButton.tsx

'use client'; // This is the key: this small component is a Client Component.

import { useCart } from "@/context/CartContext";
import { PerfumeProduct } from "@/types";
import styles from './AddToCartButton.module.css';

// The component receives the specific product to add as a prop
type AddToCartButtonProps = {
  product: PerfumeProduct;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  // It uses the cart context to get the addToCart function
  const { addToCart } = useCart();

  return (
    <button 
      className={`${styles.button} ${styles.primaryButton}`}
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  );
}