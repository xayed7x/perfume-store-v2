// src/app/api/products/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// The function now takes no parameters.
export async function GET() {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}