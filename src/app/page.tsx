// src/app/page.tsx

'use client';

import { mockProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";
import styles from './HomePage.module.css';
import { useSearch } from "@/context/SearchContext";
import { useEffect } from 'react'; // 1. Import the useEffect hook

export default function HomePage() {
  const { searchQuery } = useSearch();

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 2. This useEffect hook will run whenever the 'searchQuery' changes
  useEffect(() => {
    // We only want to scroll if there is something in the search bar
    if (searchQuery) {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        // This command tells the browser to smoothly scroll to our product section
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [searchQuery]); // The effect depends on the searchQuery

  return (
    <main className={styles.main}>
      <Hero /> 

      <div className={styles.container} id="products">
        <h1 className={styles.title}>
          Our Perfume Collection
        </h1>
        <p className={styles.subtitle}>
          Discover a world of exquisite fragrances, crafted with passion and artistry. 
          Each bottle tells a unique story.
        </p>
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}