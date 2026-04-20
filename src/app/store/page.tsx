import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mockProducts } from "@/data/mockProducts";

export default function StorePage() {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-[#222] pb-6 gap-6">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white">
          Collection
        </h1>
        <div className="flex gap-6 text-xs uppercase tracking-widest text-gray-500 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
          <button className="text-white border-b border-white hover:text-white transition-colors whitespace-nowrap">All</button>
          <button className="hover:text-white transition-colors whitespace-nowrap">Outerwear</button>
          <button className="hover:text-white transition-colors whitespace-nowrap">Knitwear</button>
          <button className="hover:text-white transition-colors whitespace-nowrap">Denim</button>
          <button className="hover:text-white transition-colors whitespace-nowrap">Trousers</button>
          <button className="hover:text-white transition-colors whitespace-nowrap">Accessories</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
        {mockProducts.map((product) => (
          <Link href={`/store/${product.slug}`} key={product.id} className="group flex flex-col group block">
            <div className="relative aspect-[3/4] w-full bg-[#111] overflow-hidden mb-4 border border-[#222]">
              <Image 
                src={product.images[0]} 
                alt={product.name} 
                fill 
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
              />
              {product.stockStatus === "out-of-stock" && (
                <div className="absolute top-4 right-4 bg-black px-3 py-1 text-[10px] uppercase tracking-widest text-white">
                  Sold Out
                </div>
              )}
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest">{product.name}</h3>
            <p className="text-xs text-gray-500 uppercase mt-1 mb-2 tracking-widest">{product.category}</p>
            <p className="text-sm border-t border-[#222] pt-2 mt-auto">{product.price} EGP</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
