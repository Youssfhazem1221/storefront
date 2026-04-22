import React from "react";

export default function TermsPage() {
  return (
    <div className="max-w-[700px] mx-auto px-6 py-24 min-h-[70vh]">
      <h1 className="text-3xl font-bold uppercase tracking-widest mb-16 border-b border-[#222] pb-6">
        Terms & Conditions
      </h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-[#222] pb-2">Agreement</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            By interacting with this storefront, you agree to the conditions set forth. All imagery, garments, and related branding are the intellectual property of Nouveau.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-[#222] pb-2">Purchases</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            We reserve the right to refuse service to anyone. Order quantities may be limited to ensure fair distribution of archive pieces.
          </p>
        </section>
      </div>
    </div>
  );
}
