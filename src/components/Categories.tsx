"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  { name: "Classic Black", image: "/halwa_black.png", count: "Black Halwa", color: "bg-[#2A2A2A]" },
  { name: "Rich Banana", image: "/halwa_banana.png", count: "Banana Halwa", color: "bg-[#D4A373]" },
  { name: "Dry Fruit", image: "/halwa_dryfruit.png", count: "Dry Fruit Halwa", color: "bg-[#8B5A2B]" },
  { name: "Pineapple", image: "/halwa_pineapple.png", count: "Pineapple Halwa", color: "bg-[#E9C46A]" },
  { name: "Tender Coconut", image: "/halwa_coconut.png", count: "Coconut Halwa", color: "bg-[#F4F1DE]" },
];

export default function Categories() {
  return (
    <section className="pb-10 bg-white relative border-b border-gray-100 z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">

        <div className="flex flex-wrap justify-center md:justify-center items-center gap-4 md:gap-8 pt-8 md:pt-12 mb-12 relative z-30">
          
          {categories.map((cat, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
              key={idx}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full ${cat.color} flex items-center justify-center mb-4 overflow-hidden border-[6px] border-white group-hover:border-[#A8763E] transition-colors duration-300 shadow-xl group-hover:shadow-2xl -mt-20 md:-mt-28`}>
                <Image 
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain scale-[1.2] group-hover:scale-[1.3] transition-transform duration-500 p-3"
                  unoptimized
                />
              </div>
              
              <h3 className="font-bold text-sm md:text-base text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                {cat.name}
              </h3>
              <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                {cat.count}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
