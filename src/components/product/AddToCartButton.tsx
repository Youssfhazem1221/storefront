"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/mockProducts";

interface AddToCartProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { addToCart } = useCart();
  
  const isOutOfStock = product.stockStatus === "out-of-stock";

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    addToCart(product, selectedSize);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Size Selector */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Select Size</span>
          <button className="text-xs text-gray-500 uppercase tracking-widest underline decoration-gray-700 hover:text-white">
            Size Guide
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              disabled={isOutOfStock}
              className={`
                py-3 text-xs uppercase tracking-widest font-bold border transition-colors
                ${isOutOfStock ? "opacity-50 cursor-not-allowed border-[#333] text-gray-600 bg-transparent" 
                : selectedSize === size 
                  ? "bg-white text-black border-white" 
                  : "bg-transparent text-white border-[#333] hover:border-gray-500"}
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={`
          w-full py-5 flex items-center justify-center text-sm font-bold uppercase tracking-[0.2em] transition-colors
          ${isOutOfStock 
            ? "bg-[#111] text-gray-600 cursor-not-allowed border border-[#333]" 
            : "bg-white text-black hover:bg-gray-200"}
        `}
      >
        {isOutOfStock ? "Out of Stock" : "Add to Bag"}
      </button>
    </div>
  );
}
