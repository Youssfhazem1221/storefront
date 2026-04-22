import React from "react";
import Link from "next/link";

export default function InfoPage() {
  return (
    <div className="max-w-[700px] mx-auto px-6 py-24 min-h-screen">
      <h1 className="text-3xl font-bold uppercase tracking-widest mb-16 border-b border-[#222] pb-6">
        Information
      </h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-[#222] pb-2">About The Studio</h2>
          <p className="text-sm leading-relaxed text-gray-300 mb-4">
            Founded on the principles of brutalism and architectural deconstruction, Nouveau is an exploration of silhouette and texture. Based in the shadows of the industrial metropolis, we craft garments that challenge traditional form.
          </p>
          <p className="text-sm leading-relaxed text-gray-300">
            Each piece is developed with a strict adherence to monochromatic palettes, utilizing overdyed heavy cottons, raw canvas, and uncompromising metals.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-[#222] pb-2">Directory</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/shipping" className="text-sm uppercase tracking-widest hover:text-gray-400 transition-colors">Shipping & Returns</Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm uppercase tracking-widest hover:text-gray-400 transition-colors">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm uppercase tracking-widest hover:text-gray-400 transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm uppercase tracking-widest hover:text-gray-400 transition-colors">Contact</Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
