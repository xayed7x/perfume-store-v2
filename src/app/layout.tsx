// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext"; // 1. Import our new SearchProvider
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const lora = Lora({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: "Aura Perfumes",
  description: "A collection of exquisite modern fragrances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-sans bg-background text-primary`}>
        {/* 2. Nest the providers. The outer provider wraps the inner one. */}
        <SearchProvider>
          <CartProvider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </CartProvider>
        </SearchProvider>
      </body>
    </html>
  );
}