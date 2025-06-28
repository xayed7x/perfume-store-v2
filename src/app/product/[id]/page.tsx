// src/app/product/[id]/page.tsx

'use client'; 

import { mockProducts } from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from './ProductPage.module.css';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { use } from 'react'; // 1. Import the 'use' hook

export default function ProductPage({ params }: any) {
  const { addToCart } = useCart();
  
  // 2. Use the hook to safely "unwrap" the params
  const resolvedParams = use(params);

  // 3. Add a safeguard to make sure params and params.id exist
  if (!resolvedParams || !resolvedParams.id) {
    return notFound();
  }

  // 4. Use the new resolvedParams variable to find the product
  const product = mockProducts.find(
    (p) => p.id.toString() === resolvedParams.id
  );

  if (!product) {
    return notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={styles.detailsWrapper}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
          <div className={styles.buttonGroup}>
            <button 
              className={`${styles.button} ${styles.primaryButton}`}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <Link href="/" className={`${styles.button} ${styles.secondaryButton}`}>
              &larr; Back to Collection
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}