// src/app/product/[id]/page.tsx

// Notice: 'use client' is GONE. This is now a Server Component.

import { mockProducts } from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from './ProductPage.module.css';
import Image from 'next/image';
import AddToCartButton from "@/components/AddToCartButton"; // 1. Import our new Client Component

// Server Components can be async functions
export default async function ProductPage({ params }: { params: { id: string } }) {
  
  // This logic runs on the server
  const product = mockProducts.find(
    (p) => p.id.toString() === params.id
  );

  if (!product) {
    notFound();
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
            {/* 2. We now use our new, isolated button component */}
            {/* We pass the product data it needs as a prop */}
            <AddToCartButton product={product} />

            <Link href="/" className={`${styles.button} ${styles.secondaryButton}`}>
              &larr; Back to Collection
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}