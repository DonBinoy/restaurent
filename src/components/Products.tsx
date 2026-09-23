"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  { name: "Traditional Red Halwa", desc: "The original. Timeless.", weight: "500g", price: 320, image: "/halwa_red.png", tag: "Best Seller" },
  { name: "Black Halwa", desc: "Rich. Bold. Unforgettable.", weight: "500g", price: 340, image: "/halwa_black.png", tag: "Must Try" },
  { name: "Banana Halwa", desc: "A classic with a twist.", weight: "500g", price: 320, image: "/halwa_banana.png", tag: "" },
  { name: "Tender Coconut Halwa", desc: "A modern flavour.", weight: "500g", price: 360, image: "/halwa_coconut.png", tag: "New" },
  { name: "Dry Fruit Halwa", desc: "For those who love more.", weight: "500g", price: 420, image: "/halwa_dryfruit.png", tag: "" },
  { name: "Pineapple Halwa", desc: "Fruity. Fresh. Familiar.", weight: "500g", price: 340, image: "/halwa_pineapple.png", tag: "" },
];

export default function Products() {
  return (
    <section id="halwa" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold">
            Most <span className="italic text-[var(--color-primary)]">Popular</span> Products
          </h2>
          <button className="hidden md:block text-xs font-bold text-[var(--color-primary)] uppercase tracking-widest hover:text-[var(--color-accent)] transition-colors">
            View All &rarr;
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              {/* Image Area */}
              <div className="relative aspect-square w-full bg-gray-50 flex items-center justify-center p-4">
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-yellow-400 text-black text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest z-10 shadow-sm">
                    {product.tag}
                  </span>
                )}
                <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="text-sm md:text-base font-bold text-gray-900 leading-tight mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-4 line-clamp-1">
                  {product.desc}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-medium">{product.weight}</span>
                    <span className="text-sm md:text-base font-bold text-gray-900">₹ {product.price}</span>
                  </div>
                  
                  <button className="bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors shadow-sm">
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <button className="w-full mt-8 py-4 border-2 border-gray-200 rounded-xl text-xs font-bold text-gray-600 uppercase tracking-widest md:hidden">
          View All Products
        </button>

      </div>
    </section>
  );
}
