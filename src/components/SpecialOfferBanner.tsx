"use client";

import Image from "next/image";

export default function SpecialOfferBanner() {
  return (
    <section className="w-full bg-[var(--color-accent)] py-4 px-4 relative overflow-hidden flex items-center justify-center">
      
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-full w-32 opacity-20 bg-[url('/pattern_overlay.png')] bg-repeat mix-blend-overlay"></div>
      
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center justify-between gap-4 z-10">
        
        {/* Left Side Icon + Text */}
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center border border-white/40 shadow-inner p-2 hidden md:flex">
             <Image src="/sankaran_box.png" alt="Box" width={50} height={50} className="object-contain" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg md:text-xl uppercase tracking-tight">
              Order your favourite Halwa now!
            </h3>
            <p className="text-gray-800 text-xs md:text-sm font-medium">
              Authentic. Traditional. Delivered across India.
            </p>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex gap-4">
          <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-3 rounded text-sm uppercase tracking-widest shadow-md transition-colors">
            Shop Now
          </button>
        </div>

      </div>
    </section>
  );
}
