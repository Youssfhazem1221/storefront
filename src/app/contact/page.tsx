import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-[700px] mx-auto px-6 py-24 min-h-[70vh]">
      <h1 className="text-3xl font-bold uppercase tracking-widest mb-16 border-b border-[#222] pb-6">
        Contact
      </h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-[#222] pb-2">Client Services</h2>
          <p className="text-sm leading-relaxed text-gray-300 mb-2 font-mono">
            inquiries@nouveau-archive.com
          </p>
          <p className="text-sm leading-relaxed text-gray-300">
            For assistance with product availability, sizing guidance, and order inquiries.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-[#222] pb-2">Studios</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            No public showroom is available at this time. All collections are released digitally and via select retail partners.
          </p>
        </section>
      </div>
    </div>
  );
}
