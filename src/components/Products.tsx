"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  { name: "Traditional Red Halwa", desc: "The original. Timeless.", weight: "500g", price: 320, image: "/halwa_red.png", tag: "Best Seller" },
  { name: "Black Halwa", desc: "Rich. Bold. Unforgettable.", weight: "500g", price: 340, image: "/halwa_black.png", tag: "Must Try" },
  { name: "Banana Halwa", desc: "A classic with a twist.", weight: "500g", price: 320, image: "/halwa_banana.png", tag: "" },
  { name: "Tender Coconut Halwa", desc: "A modern flavour.", weight: "500g", price: 360, image: "/halwa_coconut.png", tag: "New" },
  { name: "Dry Fruit Halwa", desc: "For those who love more.", weight: "500g", price: 420, image: "/halwa_dryfruit.png", tag: "" },
  { name: "Pineapple Halwa", desc: "Fruity. Fresh. Familiar.", weight: "500g", price: 340, image: "/halwa_pineapple.png", tag: "" },
  { name: "Mango Halwa", desc: "Summer in a bite.", weight: "500g", price: 360, image: "/halwa_pineapple.png", tag: "Seasonal" },
  { name: "Dates Halwa", desc: "Naturally sweetened richness.", weight: "500g", price: 380, image: "/halwa_black.png", tag: "" },
  { name: "Kerala Mixture", desc: "Crispy, spicy, and irresistible.", weight: "400g", price: 180, image: "/products/mixture.png", tag: "Spicy" },
  { name: "Jackfruit Chips", desc: "Authentic Kerala crunch.", weight: "250g", price: 220, image: "/products/jackfruit-chips.png", tag: "Popular" },
  { name: "Achappam", desc: "Traditional rose cookies.", weight: "200g", price: 150, image: "/products/achappam.png", tag: "" },
  { name: "Pakkavada", desc: "Crispy ribbon pakoda.", weight: "300g", price: 160, image: "/products/pakkavada.png", tag: "" },
  { name: "Butter Cookies", desc: "Melt in your mouth goodness.", weight: "250g", price: 200, image: "/products/cookies.png", tag: "" },
  { name: "Murukku", desc: "Crunchy spiral savory snack.", weight: "300g", price: 150, image: "/products/murukk.png", tag: "" },
  { name: "Assorted Halwa Pack", desc: "A bit of everything.", weight: "1kg", price: 750, image: "/products/halwa-pack.png", tag: "Value" },
];

export default function Products() {
  return (
    <section id="halwa" className="pt-8 pb-20 bg-white relative overflow-hidden">
      
      {/* Abstract Thick Curved Lines Background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <svg className="absolute w-[200%] md:w-[120%] h-full opacity-70" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            d="M -200 300 C 200 -100, 400 800, 800 400 C 1200 0, 1300 900, 1600 500"
            fill="transparent"
            stroke="#0B57A5"
            strokeWidth="60"
            strokeLinecap="round"
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            d="M -200 700 C 300 1100, 500 100, 900 600 C 1300 1100, 1400 200, 1600 800"
            fill="transparent"
            stroke="#0B57A5"
            strokeWidth="100"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
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
            >
              <Link href={`/product/${product.name.toLowerCase().replace(/ /g, '-')}`} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full block">
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
                    
                    <button className="bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors shadow-sm pointer-events-none">
                      View
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <button className="w-full mt-8 py-4 border-2 border-[var(--color-primary)] rounded-xl text-xs font-bold text-[var(--color-primary)] uppercase tracking-widest md:hidden hover:bg-[var(--color-primary)] hover:text-white transition-colors">
          View All Products
        </button>

      </div>

      {/* Smooth Wavy Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg className="relative block w-full h-[25px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C100,120 100,0 200,60 C300,120 300,0 400,60 C500,120 500,0 600,60 C700,120 700,0 800,60 C900,120 900,0 1000,60 C1100,120 1100,0 1200,60 L1200,120 L0,120 Z" fill="#fafafa"></path>
        </svg>
      </div>
    </section>
  );
}
