"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-30 bg-black border-b border-[#222]">
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Desktop Left Nav */}
        <nav className="hidden md:flex gap-8">
          <Link href="/store" className="text-xs tracking-[0.2em] uppercase font-bold hover:text-gray-400 transition-colors">
            Store
          </Link>
          <Link href="/archive" className="text-xs tracking-[0.2em] uppercase font-bold hover:text-gray-400 transition-colors">
            Archive
          </Link>
          <Link href="/info" className="text-xs tracking-[0.2em] uppercase font-bold hover:text-gray-400 transition-colors">
            Info
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xs tracking-widest uppercase"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          Menu
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="block relative w-48 h-20 flex items-center justify-center mix-blend-screen">
            <Image 
              src="/images/logo.jpeg" 
              alt="Brand Logo" 
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>


        {/* Right Nav */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="text-xs tracking-[0.2em] uppercase font-bold hover:text-gray-400 transition-colors outline-none"
          >
            Cart ({cartCount})
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col pt-20 px-6">
          <button 
            className="absolute top-6 left-6 text-xs tracking-widest uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Close
          </button>
          
          <nav className="flex flex-col gap-8 mt-12">
            <Link 
              href="/store" 
              className="text-4xl font-bold uppercase tracking-widest border-b border-[#222] pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store
            </Link>
            <Link 
              href="/archive" 
              className="text-4xl font-bold uppercase tracking-widest border-b border-[#222] pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Archive
            </Link>
            <Link 
              href="/info" 
              className="text-4xl font-bold uppercase tracking-widest border-b border-[#222] pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Info
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

