"use client";

import Image from "next/image";

export default function Heritage() {
  return (
    <section id="story" className="bg-[#fcfbf7] py-20 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left Image/Illustration Area */}
        <div className="w-full md:w-1/2 group cursor-pointer">
           <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border-2 border-[var(--color-accent)] shadow-xl bg-white p-2">
              <div className="relative w-full h-full border border-gray-100 overflow-hidden">
                <Image 
                  src="/vintage_store.png" // Using vintage store image
                  alt="Heritage Illustration"
                  fill
                  className="object-cover sepia-[0.8] group-hover:sepia-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
           </div>
        </div>

        {/* Right Text Area */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] mb-2">Our Heritage</p>
          <h2 className="text-3xl md:text-5xl font-bold font-sans text-gray-900 mb-6 leading-tight">
            A <span className="text-[var(--color-primary)]">Tradition</span> Worth Protecting
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Since 1933, we have been crafting the most authentic Kozhikodan Halwa. Our recipes have been passed down through generations, maintaining the exact same slow-cooking process over wood fires to give you that unmistakable melt-in-the-mouth texture.
          </p>
          
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-6 relative w-full">
            <div className="absolute left-0 top-0 w-1 h-full bg-[var(--color-accent)] rounded-l-lg"></div>
            <p className="text-gray-800 text-sm font-medium italic">
              "We don't just make halwa; we preserve a piece of Kerala's culinary history."
            </p>
          </div>

          <button className="bg-[var(--color-primary)] text-white hover:bg-green-900 font-bold px-8 py-3 rounded text-sm uppercase tracking-widest shadow-md transition-colors">
            Read Our Story
          </button>
        </div>

      </div>
    </section>
  );
}
