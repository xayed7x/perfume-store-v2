// src/components/ProductCard.tsx

import { PerfumeProduct } from '@/types';
import Link from 'next/link';
import Image from 'next/image'; // 1. Import the Next.js Image component
import styles from './ProductCard.module.css';

type ProductCardProps = {
  product: PerfumeProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        {/* 2. This is the new block for our image */}
        <div className={styles.cardImageContainer}>
          <Image 
            src={product.imageUrl} 
            alt={product.name}
            fill={true} // This makes the image fill its parent container
            style={{ objectFit: 'cover' }} // This makes sure the image covers the area without distortion
          />
        </div>

        {/* 3. We wrap the text content in its own div */}
        <div className={styles.cardContent}>
          <h2 className={styles.cardName}>{product.name}</h2>
          <p className={styles.cardDescription}>{product.description}</p>
          <p className={styles.cardPrice}>${product.price}</p>
        </div>
      </div>
    </Link>
  );
}