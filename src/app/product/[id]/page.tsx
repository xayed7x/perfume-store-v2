// src/app/product/[id]/page.tsx

import ProductClientPage from './ProductClientPage';

// This is a Server Component, so it can cleanly receive props from Next.js
export default function ProductPage({ params }: { params: { id: string } }) {
  // Its only job is to render our Client Component and pass the params down.
  return <ProductClientPage params={params} />;
}