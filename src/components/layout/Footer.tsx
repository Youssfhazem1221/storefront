import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#222] bg-black mt-20">
      <div className="max-w-[1600px] mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <Link href="/" className="block relative w-64 h-32 mix-blend-screen">
            <Image 
              src="/images/logo.jpeg" 
              alt="Brand Logo" 
              fill
              className="object-contain object-left" 
            />
          </Link>
          <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
            A high-end brutalist aesthetic for the modern avant-garde. Designed with intention.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-white">Brand</h4>
            <Link href="/store" className="text-xs text-gray-400 uppercase tracking-[0.1em] hover:text-white transition-colors">Store</Link>
            <Link href="/archive" className="text-xs text-gray-400 uppercase tracking-[0.1em] hover:text-white transition-colors">Archive</Link>
            <Link href="/info" className="text-xs text-gray-400 uppercase tracking-[0.1em] hover:text-white transition-colors">Information</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-white">Support</h4>
            <Link href="/shipping" className="text-xs text-gray-400 uppercase tracking-[0.1em] hover:text-white transition-colors">Shipping</Link>
            <Link href="/terms" className="text-xs text-gray-400 uppercase tracking-[0.1em] hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="text-xs text-gray-400 uppercase tracking-[0.1em] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-xs text-gray-400 uppercase tracking-[0.1em] hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#111]">
        <div className="max-w-[1600px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} NOUVEAU. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[10px] text-gray-600 uppercase tracking-widest hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

