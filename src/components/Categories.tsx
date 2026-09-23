"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  { name: "Classic Halwa", image: "/halwa_red.png", count: "4 Items", color: "bg-[#F8F9FA]" },
  { name: "Premium Dry Fruits", image: "/halwa_dryfruit.png", count: "3 Items", color: "bg-[#FDF8F5]" },
  { name: "Festive Hampers", image: "/halwa_black.png", count: "2 Items", color: "bg-[#F5F8FD]" },
  { name: "Assorted Bites", image: "/halwa_coconut.png", count: "5 Items", color: "bg-[#FCF5FD]" },
  { name: "Wood-Fired", image: "/halwa_yellow.png", count: "2 Items", color: "bg-[#FFFDF5]" },
  { name: "Sugar-Free", image: "/halwa_red.png", count: "3 Items", color: "bg-[#F5FDF8]" },
  { name: "Savouries", image: "/halwa_coconut.png", count: "8 Items", color: "bg-[#FFF5F5]" },
  { name: "New Arrivals", image: "/halwa_dryfruit.png", count: "4 Items", color: "bg-[#F8F5FF]" },
];

export default function Categories() {
  return (
    <section className="pt-8 pb-4 bg-white relative border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        
        <h2 className="text-2xl font-bold font-sans text-gray-900 tracking-tight mb-1">
          Shop by Category
        </h2>
        <p className="text-gray-500 font-serif text-sm mb-6">
          Explore our traditional recipes
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
              key={idx}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full ${cat.color} flex items-center justify-center mb-2 overflow-hidden border border-gray-100 group-hover:border-[var(--color-primary)] transition-colors duration-300 shadow-sm group-hover:shadow-md p-1 md:p-2`}>
                <div className="relative w-full h-full rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <Image 
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              
              <h3 className="font-bold text-xs md:text-sm text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                {cat.name}
              </h3>
              <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                {cat.count}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
