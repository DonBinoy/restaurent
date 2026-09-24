"use client";

import Image from "next/image";
import { Sparkles, Plus } from "lucide-react";

const hampers = [
  { id: 1, name: "Premium Festive Box", desc: "Assorted Halwa + Dry Fruits", price: 1200, originalPrice: 1500, image: "/sankaran_box.png" },
  { id: 2, name: "Royal Gold Collection", desc: "Signature Halwa Varieties", price: 850, originalPrice: 1000, image: "/sankaran_box.png" },
  { id: 3, name: "Family Celebration Pack", desc: "12 Flavours Combo", price: 1800, originalPrice: 2200, image: "/sankaran_box.png" },
];

export default function FeaturedHampers() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#0B57A5] overflow-hidden">
      
      {/* Decorative Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }}></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col items-center">
        
        {/* Title */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <Sparkles className="text-[#A8763E] w-10 h-10 mb-6" strokeWidth={1} />
          <h2 className="text-5xl md:text-7xl font-serif text-[#FFFEF0] mb-8 leading-[1.1] tracking-tight">
            Sankaran Bakery <br/>
            <span className="italic text-[#A8763E]">Diwali Treats</span>
          </h2>
          <div className="flex gap-4">
            <button className="bg-[#A8763E] text-[#FFFEF0] font-bold px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[#8e602e] transition-colors shadow-lg">
              Pre-Order Now
            </button>
            <button className="bg-transparent border-[1.5px] border-[#FFFEF0]/30 text-[#FFFEF0] font-bold px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[#FFFEF0]/10 transition-colors">
              Explore All
            </button>
          </div>
        </div>

        {/* Hampers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 w-full">
          {hampers.map((hamper) => (
            <div key={hamper.id} className="group flex flex-col relative cursor-pointer">
              
              {/* Image Area - Arched Window */}
              <div className="relative w-full aspect-[4/5] rounded-t-full overflow-hidden bg-[#FFFEF0] mb-8 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex items-center justify-center p-8">
                
                {/* Discount Tag */}
                <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0B57A5] text-[#FFFEF0] text-[9px] font-bold px-5 py-2 rounded-full z-10 uppercase tracking-[0.2em] shadow-sm">
                  {Math.round(((hamper.originalPrice - hamper.price) / hamper.originalPrice) * 100)}% OFF
                </span>
                
                {/* Product Image */}
                <div className="relative w-[85%] h-[85%] z-10 transition-transform duration-700 group-hover:scale-110">
                  <Image 
                    src={hamper.image} 
                    alt={hamper.name}
                    fill
                    className="object-contain drop-shadow-2xl mix-blend-multiply"
                  />
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#A8763E] text-[#FFFEF0] flex items-center justify-center opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 shadow-xl">
                  <Plus size={24} strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Content Area */}
              <div className="flex flex-col items-center text-center px-4">
                <h3 className="font-serif text-2xl md:text-3xl text-[#FFFEF0] mb-3 leading-tight group-hover:text-[#A8763E] transition-colors">
                  {hamper.name}
                </h3>
                <p className="text-[10px] md:text-xs text-[#FFFEF0]/70 uppercase tracking-[0.2em] font-bold mb-5">{hamper.desc}</p>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#FFFEF0]/40 line-through decoration-[#FFFEF0]/30 font-medium">₹{hamper.originalPrice}</span>
                  <span className="font-sans font-bold text-2xl text-[#A8763E]">₹{hamper.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Top and Bottom wavy borders for transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none rotate-180">
        <svg className="relative block w-full h-[30px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,60 C150,0 300,120 450,60 C600,0 750,120 900,60 C1050,0 1200,120 1200,60 L1200,120 L0,120 Z" fill="#FFFEF0"></path>
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg className="relative block w-full h-[30px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,60 C150,120 300,0 450,60 C600,120 750,0 900,60 C1050,120 1200,0 1200,60 L1200,120 L0,120 Z" fill="#FFFEF0"></path>
        </svg>
      </div>

    </section>
  );
}
