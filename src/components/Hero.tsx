// src/components/Hero.tsx

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero-background.jpg" // Using our new local image
        alt="Collection of elegant perfumes on a stylish background"
        fill={true}
        style={{ objectFit: 'cover' }}
        className={styles.backgroundImage}
        priority={true} // Tells Next.js to load this image first
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>A Symphony of Scents</h1>
        <p className={styles.subtitle}>
          Explore our curated collection of artisanal fragrances, designed to evoke memories and inspire dreams.
        </p>
        <Link href="#products" className={styles.ctaButton}>
          Discover the Collection
        </Link>
      </div>
    </section>
  );
}