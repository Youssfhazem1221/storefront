import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import WelcomeAnimation from "@/components/layout/WelcomeAnimation";
import { CartProvider } from "@/context/CartContext";

const interSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOUVEAU | Avant-Garde Fashion",
  description: "High-end brutalist aesthetic for the modern avant-garde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-white selection:text-black">
        <WelcomeAnimation />
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

