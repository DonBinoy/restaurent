"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  { name: "Authentic Halwa", image: "/halwa_red.png", count: "8 Varieties", color: "bg-[#7A1F1E]" },
  { name: "Kerala Snacks", image: "/products/mixture.png", count: "Spicy & Savory", color: "bg-[#D48B37]" },
  { name: "Sweet Cookies", image: "/products/achappam.png", count: "Crispy Bites", color: "bg-[#E2C391]" },
  { name: "Local Chips", image: "/products/jackfruit-chips.png", count: "Freshly Fried", color: "bg-[#E9C46A]" },
  { name: "Gift Packs", image: "/products/halwa-pack.png", count: "Assorted Boxes", color: "bg-[#2A2A2A]" },
];

export default function Categories() {
  return (
    <section className="pb-10 bg-white relative border-b border-gray-100 z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">

        <div className="flex overflow-x-auto md:flex-wrap md:justify-center items-start gap-6 md:gap-8 pt-24 md:pt-32 -mt-24 md:-mt-32 px-4 md:px-0 pb-8 relative z-30 scrollbar-hide snap-x snap-mandatory w-full">
          
          {categories.map((cat, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
              key={idx}
              className="flex flex-col items-center group cursor-pointer flex-shrink-0 snap-center"
            >
              <div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full ${cat.color} flex items-center justify-center mb-4 overflow-hidden border-[6px] border-white group-hover:border-[#A8763E] transition-colors duration-300 shadow-xl group-hover:shadow-2xl`}>
                <Image 
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain scale-[1.2] group-hover:scale-[1.3] transition-transform duration-500 p-3"
                  unoptimized
                />
              </div>
              
              <h3 className="font-bold text-sm md:text-base text-gray-900 group-hover:text-[var(--color-primary)] transition-colors whitespace-nowrap">
                {cat.name}
              </h3>
              <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1 whitespace-nowrap">
                {cat.count}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
