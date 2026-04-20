import Image from "next/image";
import Link from "next/link";
import { mockProducts } from "@/data/mockProducts";

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden border-b border-[#222]">
        <div className="absolute inset-0">
          <Image 
            src="/images/hero.png" 
            alt="Spring Summer 26 Editorial" 
            fill 
            sizes="100vw"
            className="object-cover object-center hero-image opacity-80"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-12 left-6 right-6 md:bottom-20 md:left-12 max-w-[1600px] mx-auto z-10 flex flex-col md:flex-row justify-between items-end">
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-white mb-6 md:mb-0">
            SPRING /<br />SUMMER 26
          </h1>
          <Link 
            href="/store" 
            className="flex items-center justify-center px-8 py-4 bg-white text-black text-sm uppercase tracking-[0.2em] font-bold hover:bg-gray-200 transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Collection */}      <section className="py-24 max-w-[1600px] mx-auto w-full px-6">
        <div className="flex justify-between items-end mb-12 border-b border-[#222] pb-6">
          <h2 className="text-xl md:text-3xl font-bold uppercase tracking-widest text-white">Featured</h2>
          <Link href="/store" className="text-xs uppercase tracking-widest hover:text-gray-400 transition-colors border-b border-transparent hover:border-gray-400">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link href={`/store/${product.slug}`} key={product.id} className="group flex flex-col group block">
              <div className="relative aspect-[3/4] w-full bg-[#111] overflow-hidden mb-4 border border-[#222]">
                <Image 
                  src={product.images[0]} 
                  alt={product.name} 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest">{product.name}</h3>
              <p className="text-xs text-gray-500 uppercase mt-1 mb-2 tracking-widest">{product.category}</p>
              <p className="text-sm border-t border-[#222] pt-2 mt-auto">{product.price} EGP</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
