import React from "react";

export default function PrivacyPage() {
  return (
    <div className="max-w-[700px] mx-auto px-6 py-24 min-h-[70vh]">
      <h1 className="text-3xl font-bold uppercase tracking-widest mb-16 border-b border-[#222] pb-6">
        Privacy Policy
      </h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-[#222] pb-2">Data Collection</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            We collect only the minimum required information necessary to process your transactions and optimize your experience on this storefront. Client discretion is paramount.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-[#222] pb-2">Security</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Payment information is encrypted and transmitted securely via our merchant providers. We do not store any credit card information directly on our servers.
          </p>
        </section>
      </div>
    </div>
  );
}
