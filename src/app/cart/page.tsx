"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen"></div>;

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24 min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white mb-12 border-b border-[#222] pb-6">
        Shopping Bag
      </h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-gray-500 uppercase tracking-widest text-lg mb-8">Your bag is empty.</p>
          <Link href="/store" className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <div className="hidden md:flex justify-between text-xs tracking-widest uppercase text-gray-500 border-b border-[#222] pb-4 mb-6">
              <span className="w-1/2">Product</span>
              <span className="w-1/4 text-center">Quantity</span>
              <span className="w-1/4 text-right">Total</span>
            </div>

            {cart.map((item) => (
              <div key={item.cartItemId} className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-[#222] gap-6 md:gap-0">
                <div className="w-full md:w-1/2 flex gap-6">
                  <div className="w-24 aspect-[3/4] bg-[#111] overflow-hidden">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <Link href={`/store/${item.slug}`} className="text-sm tracking-widest font-bold uppercase hover:text-gray-400">{item.name}</Link>
                    <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">Size: {item.selectedSize}</p>
                    <button 
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-xs text-gray-600 uppercase tracking-widest mt-4 self-start underline hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-1/4 flex justify-start md:justify-center">
                  <div className="flex items-center border border-[#333]">
                    <button 
                      className="px-4 py-2 hover:bg-[#111]"
                      onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-sm">{item.quantity}</span>
                    <button 
                      className="px-4 py-2 hover:bg-[#111]"
                      onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-1/4 flex justify-between md:justify-end text-sm tracking-widest">
                  <span className="md:hidden text-gray-500 uppercase">Total</span>
                  {item.price * item.quantity} EGP
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[380px] bg-[#0a0a0a] border border-[#222] p-8 h-fit">
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-[#222] pb-4 mb-6">Order Summary</h2>
            <div className="flex justify-between text-sm tracking-widest mb-4">
              <span className="text-gray-400">Subtotal</span>
              <span>{cartTotal} EGP</span>
            </div>
            <div className="flex justify-between text-sm tracking-widest mb-8 border-b border-[#222] pb-6">
              <span className="text-gray-400">Shipping</span>
              <span className="text-gray-500">Calculated at checkout</span>
            </div>
            <div className="flex justify-between text-lg tracking-widest mb-8">
              <span>Total</span>
              <span className="font-bold">{cartTotal} EGP</span>
            </div>
            <Link 
              href="/checkout"
              className="block w-full py-5 bg-white text-black text-center font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
