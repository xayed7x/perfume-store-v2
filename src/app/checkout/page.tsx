// src/app/checkout/page.tsx (CORRECTED VERSION)

'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './CheckoutPage.module.css';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const total = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderDetails = {
      fullName,
      email,
      address,
      city,
      postalCode,
      items: cartItems,
      total,
    };
    console.log("Order Submitted:", orderDetails);
    alert("Thank you for your order! (Check the console for details)");
  };
  
  if (cartItems.length === 0) {
    return (
        <main className={styles.main} style={{textAlign: 'center'}}>
            <h1 className={styles.title}>Your Cart is Empty</h1>
            <p>You cannot proceed to checkout with an empty cart.</p>
            <Link href="/" style={{marginTop: '1rem', textDecoration: 'underline', color: '#A7727D'}}>Continue Shopping</Link>
        </main>
    )
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.checkoutGrid}>
        {/* We give the form an id */}
        <form id="shipping-form" className={styles.form} onSubmit={handleSubmit}>
          <h2>Shipping Information</h2>
          {/* ... all form groups as above ... */}
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>Full Name</label>
            <input type="text" id="fullName" className={styles.input} value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input type="email" id="email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>Street Address</label>
            <input type="text" id="address" className={styles.input} value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city" className={styles.label}>City</label>
            <input type="text" id="city" className={styles.input} value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="postalCode" className={styles.label}>Postal Code</label>
            <input type="text" id="postalCode" className={styles.input} value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
          </div>
        </form>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          {cartItems.map(({ product, quantity }) => (
            <div key={product.id} className={styles.summaryItem}>
              <span>{product.name} (x{quantity})</span>
              <span>${(product.price * quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {/* We link the button to the form using the id */}
          <button type="submit" form="shipping-form" className={styles.placeOrderButton}>
             Place Order
          </button>
        </div>
      </div>
    </main>
  );
}