// src/app/api/products/route.ts

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// We no longer create a new instance here.

// This is the only change: `request` is renamed to `_request`
export async function GET(_request: Request) {
  try {
    // Use the imported prisma client to fetch the data
    const products = await prisma.product.findMany();

    // Send the fetched products back as a JSON response
    return NextResponse.json(products);
  } catch (error) {
    // If there's an error, log it and return an error response
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
