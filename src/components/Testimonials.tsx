"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const videos = [
  { id: 1, name: "Aarav", location: "Mumbai", image: "/test_1.png" },
  { id: 2, name: "Meera", location: "Bangalore", image: "/test_2.png" },
  { id: 3, name: "Fahad", location: "Dubai", image: "/test_1.png" },
  { id: 4, name: "Shreya", location: "Kozhikode", image: "/test_2.png" },
  { id: 5, name: "Kiran", location: "Chennai", image: "/test_1.png" },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2); // Center active

  return (
    <section className="py-24 bg-[#053a73] overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 bg-[url('/vintage_store.png')] bg-cover mix-blend-overlay"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl mb-6"
          >
            They're talking about <span className="text-[var(--color-accent)] font-bold italic">Sankaran</span>
          </motion.h2>

          {/* Avatar Heads */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center gap-4 md:gap-8 flex-wrap"
          >
            {videos.map((vid, idx) => (
              <div 
                key={vid.id} 
                onClick={() => setActiveIndex(idx)}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${activeIndex === idx ? 'border-[var(--color-accent)] scale-110' : 'border-transparent opacity-60 group-hover:opacity-100'}`}>
                  <Image src={vid.image} alt={vid.name} width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-wider transition-colors ${activeIndex === idx ? 'text-[var(--color-accent)]' : 'text-white/60'}`}>{vid.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Video Cards Carousel */}
        <div className="flex justify-center items-center gap-4 md:gap-8 h-[400px] md:h-[500px]">
          {videos.map((vid, idx) => {
            const isActive = idx === activeIndex;
            const isPrev = idx === activeIndex - 1;
            const isNext = idx === activeIndex + 1;
            
            // Only show adjacent cards on mobile, or 5 cards on desktop
            if (Math.abs(idx - activeIndex) > 2) return null;

            return (
              <motion.div
                key={vid.id}
                onClick={() => setActiveIndex(idx)}
                animate={{
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : (isPrev || isNext ? 0.6 : 0.3),
                  zIndex: isActive ? 30 : 10,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all w-[240px] md:w-[320px] aspect-[9/16] ${!isActive && 'hidden md:block'}`}
              >
                <Image
                  src={vid.image}
                  alt={vid.name}
                  fill
                  className="object-cover"
                />
                
                {/* Dark Overlay */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isActive ? 'opacity-20' : 'opacity-60'}`}></div>

                {/* Play Button */}
                {isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 animate-pulse">
                      <Play size={24} fill="white" className="text-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Footer Info */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-sm font-bold">{vid.name}</h3>
                  <p className="text-[10px] opacity-80">{vid.location}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

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
