// src/components/Header.tsx

'use client'; 

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useSearch } from '@/context/SearchContext'; // 1. Import our new useSearch hook
import styles from './Header.module.css';

export default function Header() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // 2. Get the search query and the function to set it from the context
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Aura
      </Link>
      
      <div className={styles.searchContainer}>
        {/* 3. Connect the input to our context state */}
        <input
          type="text"
          placeholder="Search for a fragrance..."
          className={styles.searchInput}
          value={searchQuery} // The input's value is now controlled by our state
          onChange={(e) => setSearchQuery(e.target.value)} // When you type, it updates the state
        />
      </div>

      <Link href="/cart" className={styles.cartLink}>
        {totalItems > 0 && (
          <span className={styles.cartCount}>
            {totalItems}
          </span>
        )}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      </Link>
    </header>
  );
}