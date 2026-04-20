import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, mockProducts } from "@/data/mockProducts";
import AddToCartButton from "@/components/product/AddToCartButton";

export async function generateStaticParams() {
  return mockProducts.map((p) => ({ slug: p.slug }));
}

// Next.js 15+ compatible params typing
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-[1600px] mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        
        {/* Left: Image Gallery */}
        <div className="w-full lg:w-[60%] border-b lg:border-b-0 lg:border-r border-[#222] flex flex-col">
          {product.images.map((image, idx) => (
            <div key={idx} className="relative aspect-[3/4] w-full border-b border-[#222] last:border-b-0 bg-[#0a0a0a]">
              <Image 
                src={image} 
                alt={`${product.name} - View ${idx + 1}`} 
                fill 
                className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity" 
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Right: Product Details */}
        <div className="w-full lg:w-[40%] px-6 py-12 lg:px-12 lg:py-16 sticky top-20 self-start">
          
          <div className="mb-12 border-b border-[#222] pb-8">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">{product.collection}</p>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">{product.subtitle}</p>
            <p className="text-xl">{product.price} EGP</p>
          </div>

          <div className="mb-12 border-b border-[#222] pb-12">
            <AddToCartButton product={product} />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Description</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Details</h3>
              <ul className="text-sm text-gray-400 leading-relaxed list-disc pl-4 space-y-1">
                {product.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 flex justify-between text-xs text-gray-500 uppercase tracking-widest border-t border-[#222] mt-8">
              <span>Shipping Info</span>
              <span>Returns</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
