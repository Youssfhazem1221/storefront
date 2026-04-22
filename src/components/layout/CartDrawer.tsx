"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-black border-l border-[#333] z-50 flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-[#333]">
          <h2 className="text-xl tracking-widest font-bold">CART</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-sm tracking-widest hover:text-gray-400 transition-colors uppercase"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <p className="text-gray-500 uppercase tracking-widest text-sm text-center mt-10">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.cartItemId} className="flex gap-4 border-b border-[#222] pb-6">
                <div className="w-24 aspect-[3/4] bg-[#111] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm tracking-widest font-bold uppercase">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase">Size: {item.selectedSize}</p>
                    <p className="text-sm mt-2">{item.price} EGP</p>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-[#333]">
                      <button 
                        className="px-3 md:px-3 py-1 hover:bg-[#111]"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="px-3 text-sm">{item.quantity}</span>
                      <button 
                        className="px-3 py-1 hover:bg-[#111]"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-xs text-gray-500 uppercase tracking-widest hover:text-white transition-colors underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-[#333] bg-[#0a0a0a]">
            <div className="flex justify-between items-center mb-6">
              <span className="uppercase tracking-widest text-sm">Subtotal</span>
              <span className="text-lg">{cartTotal} EGP</span>
            </div>
            <Link 
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-4 bg-white text-black text-center font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
