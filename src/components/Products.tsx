"use client";

import Image from "next/image";
import { Star, Plus } from "lucide-react";

const products = [
  { id: 1, name: "Assorted Halwa Box (4 Flavours)", weight: "500g", price: 350, originalPrice: 400, image: "/sankaran_box.png", tag: "Best Seller", rating: 4.9, reviews: 342, tagColor: "bg-[#0B57A5] text-white" },
  { id: 2, name: "Pure Ghee Black Halwa", weight: "500g", price: 320, originalPrice: 350, image: "/halwa_black.png", tag: "Trending", rating: 4.8, reviews: 215, tagColor: "bg-[#A8763E] text-white" },
  { id: 3, name: "Premium Dry Fruit Halwa", weight: "500g", price: 420, originalPrice: 480, image: "/halwa_dryfruit.png", tag: "Must Try", rating: 4.9, reviews: 189, tagColor: "bg-[#0B57A5] text-white" },
  { id: 4, name: "Tender Coconut Halwa", weight: "500g", price: 360, originalPrice: 400, image: "/halwa_coconut.png", tag: "New", rating: 4.7, reviews: 92, tagColor: "bg-[#A8763E] text-white" },
];

export default function Products() {
  return (
    <section className="bg-[#F1E9D6] py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="flex flex-col">
            <span className="font-serif italic text-xl md:text-2xl text-[#0B57A5] mb-3">freshly baked for you</span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1E1B16] leading-none tracking-tight">
              Our Best Sellers
            </h2>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0">
             <button className="w-12 h-12 rounded-full border-[1.5px] border-[#0B57A5]/30 flex items-center justify-center hover:bg-[#0B57A5] hover:text-white transition-all text-[#0B57A5]">&larr;</button>
             <button className="w-12 h-12 rounded-full border-[1.5px] border-[#0B57A5]/30 flex items-center justify-center hover:bg-[#0B57A5] hover:text-white transition-all text-[#0B57A5]">&rarr;</button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-transparent group flex flex-col relative cursor-pointer">
              
              {/* Image Area - Arched Window */}
              <div className="relative w-full aspect-[3/4] rounded-t-[120px] overflow-hidden bg-[#FFFEF0] border border-[#0B57A5]/10 mb-6 transition-all duration-500 group-hover:border-[#0B57A5]/30 group-hover:shadow-[0_20px_40px_-15px_rgba(11,87,165,0.15)] flex items-center justify-center p-8">
                
                {/* Subtle Grain Overlay inside card */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }}></div>

                {/* Tag */}
                {product.tag && (
                  <span className={`absolute top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold px-4 py-1.5 rounded-full z-10 uppercase tracking-[0.2em] shadow-sm ${product.tagColor}`}>
                    {product.tag}
                  </span>
                )}

                {/* Image Wrapper */}
                <div className="relative w-[85%] h-[85%] z-10 transition-transform duration-700 group-hover:scale-110">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-xl mix-blend-multiply"
                  />
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#0B57A5] text-white flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 shadow-lg">
                  <Plus size={20} strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Details Area */}
              <div className="flex flex-col items-center text-center px-2">
                {/* Reviews */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-[#A8763E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={1} />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500 ml-1 font-medium tracking-wider">({product.reviews})</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-serif text-[#1E1B16] mb-1 group-hover:text-[#0B57A5] transition-colors leading-tight">
                  {product.name}
                </h3>
                
                {/* Weight */}
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-4 font-bold">{product.weight}</span>
                
                {/* Price */}
                <div className="flex items-center gap-3">
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-400 line-through decoration-gray-300">₹{product.originalPrice}</span>
                  )}
                  <span className="font-sans font-bold text-xl text-[#0B57A5]">₹{product.price}</span>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-20 flex justify-center">
           <button className="rounded-full border-[1.5px] border-[#0B57A5] bg-transparent text-[#0B57A5] uppercase text-xs font-bold tracking-[0.2em] px-12 py-4 hover:bg-[#0B57A5] hover:text-white transition-all shadow-sm">
             View Full Menu
           </button>
        </div>

      </div>
      
      {/* Hand-drawn accent */}
      <div className="absolute top-20 right-10 hidden lg:block opacity-10 pointer-events-none transform rotate-12">
        <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M10,100 C50,10 150,10 190,100 C150,190 50,190 10,100 Z" stroke="#0B57A5" strokeWidth="2" strokeDasharray="5 5"/>
        </svg>
      </div>
    </section>
  );
}
