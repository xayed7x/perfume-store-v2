// src/components/Footer.tsx

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.divider}></div>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="#" className={styles.link}>About</Link>
          <Link href="#" className={styles.link}>Contact</Link>
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} Aura Perfumes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}