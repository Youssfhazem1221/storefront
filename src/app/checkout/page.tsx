"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen"></div>;

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Form */}
        <div className="flex-1 max-w-2xl">
          <Link href="/cart" className="text-xs text-gray-500 uppercase tracking-widest hover:text-white mb-8 block">
            &larr; Return to Bag
          </Link>

          <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 border-b border-[#222] pb-4">Checkout</h2>
          
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            
            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Contact Information</h3>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border border-[#333] p-4 text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Shipping */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Shipping Address</h3>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-transparent border border-[#333] p-4 text-sm focus:outline-none focus:border-white transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-transparent border border-[#333] p-4 text-sm focus:outline-none focus:border-white transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Address" 
                  className="w-full bg-transparent border border-[#333] p-4 text-sm focus:outline-none focus:border-white transition-colors col-span-2"
                />
                <input 
                  type="text" 
                  placeholder="City" 
                  className="w-full bg-transparent border border-[#333] p-4 text-sm focus:outline-none focus:border-white transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Postal Code" 
                  className="w-full bg-transparent border border-[#333] p-4 text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Payment Dummy */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Payment (Mock)</h3>
              <div className="p-6 border border-[#333] bg-[#0a0a0a]">
                <p className="text-sm text-gray-500 mb-4">This is a storefront prototype. Payment processing is not integrated.</p>
                <input 
                  type="text" 
                  placeholder="Card Number" 
                  disabled
                  className="w-full bg-transparent border border-[#222] p-4 text-sm text-gray-600 mb-4 cursor-not-allowed"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    disabled
                    className="w-full bg-transparent border border-[#222] p-4 text-sm text-gray-600 cursor-not-allowed"
                  />
                  <input 
                    type="text" 
                    placeholder="CVC" 
                    disabled
                    className="w-full bg-transparent border border-[#222] p-4 text-sm text-gray-600 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors">
              Place Order
            </button>
          </form>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full lg:w-[450px] bg-[#0a0a0a] border-l border-[#222] p-8 lg:p-12 min-h-[calc(100vh-100px)]">
          <div className="sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-[#222] pb-4">Order Summary</h3>
            
            <div className="space-y-6 mb-8 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="relative">
                    <div className="w-16 aspect-[3/4] bg-[#111] overflow-hidden border border-[#222]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white text-black w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">
                      {item.quantity}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="text-xs tracking-widest font-bold uppercase">{item.name}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{item.selectedSize}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm">{item.price * item.quantity} EGP</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-[#222] pt-6 mb-6">
              <div className="flex justify-between text-sm tracking-widest text-gray-400">
                <span>Subtotal</span>
                <span>{cartTotal} EGP</span>
              </div>
              <div className="flex justify-between text-sm tracking-widest text-gray-400">
                <span>Shipping</span>
                <span>100 EGP</span>
              </div>
            </div>

            <div className="flex justify-between text-lg tracking-widest border-t border-[#222] pt-6">
              <span>Total</span>
              <span className="font-bold">{cartTotal + 100} EGP</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
