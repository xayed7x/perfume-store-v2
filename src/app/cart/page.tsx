// src/app/cart/page.tsx

'use client';

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from './CartPage.module.css';

export default function CartPage() {
  // 1. Get all the functions and data we need from our context
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <main className={styles.main}>
        <div className={styles.emptyCartContainer}>
          <h1 className={styles.emptyCartMessage}>Your Shopping Cart is Empty</h1>
          <Link href="/" className={styles.backToShopLink}>
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Your Cart</h1>
      <div className={styles.cartGrid}>
        <div className={styles.cartItemsList}>
          {cartItems.map(({ product, quantity }) => (
            <div key={product.id} className={styles.cartItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>{product.name}</p>
                <p className={styles.itemPrice}>${product.price.toFixed(2)}</p>
                
                {/* 2. This is the new block for our control buttons */}
                <div className={styles.itemControls}>
                  <div className={styles.quantityControls}>
                    <button className={styles.quantityButton} onClick={() => decreaseQuantity(product.id)}>
                      -
                    </button>
                    <span className={styles.quantity}>{quantity}</span>
                    <button className={styles.quantityButton} onClick={() => addToCart(product)}>
                      +
                    </button>
                  </div>
                  <button className={styles.removeButton} onClick={() => removeFromCart(product.id)}>
                    Remove
                  </button>
                </div>

              </div>
              <div className={styles.itemSubtotal}>
                ${(product.price * quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <div className={styles.summaryLine}>
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className={styles.summaryLine}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link href="/checkout" className={styles.checkoutButton}>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}