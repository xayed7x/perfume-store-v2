// src/app/product/[id]/ProductClientPage.tsx

'use client';

import styles from './ProductPage.module.css';

// We are using the same props structure as before
export default function ProductClientPage({ params }: { params: { id: string } }) {
  return (
    <main className={styles.main}>
      <div className={styles.container} style={{ padding: '2rem' }}>
        <h1 className={styles.title}>Product Page</h1>
        <p style={{fontSize: '1.2rem', margin: '1rem 0'}}>
          The ID for this product is: <strong>{params.id}</strong>
        </p>
        <p>
          If you can see this page on the live Vercel site, it means our new component structure is working.
        </p>
      </div>
    </main>
  );
}