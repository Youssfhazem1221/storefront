import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mockProducts } from "@/data/mockProducts";

export default function ArchivePage() {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col mb-16 border-b border-[#222] pb-6">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white mb-4">
          Archive
        </h1>
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
          Selected campaigns and visual research.
        </p>
      </div>

      <div className="space-y-32">
        {/* Campaign 1 */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl tracking-widest font-bold uppercase">Spring / Summer 26</h2>
            <Link href="/store" className="text-xs uppercase tracking-widest border-b hover:text-gray-400 transition-colors">Shop</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/5] bg-[#111]">
               <Image src="/images/hero.png" alt="Editorial 1" fill className="object-cover opacity-80" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-[3/4] bg-[#111]">
                 <Image src="/images/product3.png" alt="Editorial 2" fill className="object-cover opacity-90" />
              </div>
              <div className="relative aspect-[3/4] bg-[#111] mt-12">
                 <Image src="/images/product5.png" alt="Editorial 3" fill className="object-cover opacity-90" />
              </div>
            </div>
          </div>
        </section>

        {/* Campaign 2 */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl tracking-widest font-bold uppercase text-gray-400">Core Collection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[3/4] bg-[#111]">
               <Image src="/images/product4.png" alt="Editorial 4" fill className="object-cover opacity-70 grayscale" />
            </div>
            <div className="relative aspect-[3/4] bg-[#111] md:translate-y-12">
               <Image src="/images/product7.jpeg" alt="Editorial 5" fill className="object-cover opacity-70 grayscale" />
            </div>
            <div className="relative aspect-[3/4] bg-[#111] md:translate-y-24">
               <Image src="/images/product1.png" alt="Editorial 6" fill className="object-cover opacity-70 grayscale" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
