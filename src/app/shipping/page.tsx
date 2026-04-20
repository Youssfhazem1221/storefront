import React from "react";

export default function ShippingPage() {
  return (
    <div className="max-w-[700px] mx-auto px-6 py-24 min-h-[70vh]">
      <h1 className="text-3xl font-bold uppercase tracking-widest mb-16 border-b border-[#222] pb-6">
        Shipping & Returns
      </h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-[#222] pb-2">Global Dispatch</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            All orders are dispatched from our European fulfillment center. Please allow 2-4 business days for order processing before shipment.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-[#222] pb-2">Return Policy</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Returns must be initiated within 14 days of receipt. Garments must be unworn, with all original archive tags attached. Return costs are the responsibility of the client.
          </p>
        </section>
      </div>
    </div>
  );
}
