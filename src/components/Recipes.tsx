"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";

const recipes = [
  { id: 1, title: "Halwa Ice Cream Sundae", image: "/product_halwa.png", duration: "5 Mins" },
  { id: 2, title: "Traditional Halwa Payasam", image: "/product_jalebi.png", duration: "20 Mins" },
  { id: 3, title: "Halwa Stuffed Paratha", image: "/product_ladoo.png", duration: "15 Mins" },
  { id: 4, title: "Festive Halwa Bites", image: "/hero_sweets.png", duration: "10 Mins" },
];

export default function Recipes() {
  return (
    <section className="py-16 bg-[var(--color-primary)] relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-2">Get Creative</p>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4">
            Cook with <span className="text-[var(--color-accent)]">Sankaran Bakery</span>
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto md:mx-0">
            Explore unique and delicious ways to incorporate our traditional halwa into modern desserts and everyday treats.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer border border-white/10 shadow-lg">
              
              {/* Background Image */}
              <Image 
                src={recipe.image || "/ingredients.png"} 
                alt={recipe.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              {/* Play Icon */}
              <div className="absolute top-4 right-4 text-white/80 group-hover:text-white transition-colors">
                <PlayCircle size={24} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-5">
                <span className="inline-block bg-[var(--color-accent)] text-black text-[9px] font-bold px-2 py-1 rounded mb-2 uppercase">
                  {recipe.duration}
                </span>
                <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                  {recipe.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
