// src/app/product/[id]/page.tsx

'use client'; 

import { mockProducts } from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from './ProductPage.module.css';
import { useCart } from '@/context/CartContext';
import Image from 'next/image'; // 1. Import the Image component

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  
  const product = mockProducts.find(
    (p) => p.id.toString() === params.id
  );

  if (!product) {
    notFound();
  }

  return (
    <main className={styles.main}>
      {/* 2. The container now holds two columns */}
      <div className={styles.container}>
        {/* Column 1: Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Column 2: Details */}
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