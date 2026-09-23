"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/halwa/halwa_red.png?v=2",
  "/halwa/halwa_green.png?v=2",
  "/halwa/halwa_yellow.png?v=2"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[var(--color-primary)] text-white pt-12 pb-12 overflow-hidden flex flex-col justify-between font-sans">
      
      {/* The Center Arch (Dropping from the absolute top) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] md:w-[45vw] lg:w-[32vw] xl:w-[30vw] h-[60vh] md:h-[75vh] bg-[var(--color-background)] rounded-b-[150px] md:rounded-b-[300px] flex items-center justify-center shadow-xl z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-12"
          >
            <Image 
              src={images[index]}
              alt="Sankaran Halwa"
              fill
              className="object-contain scale-[1.1]"
              priority
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full flex flex-col h-full flex-grow">
        
        {/* Top Section: Left Text & Right Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start flex-grow mt-10 md:mt-20">
          
          {/* Left Column */}
          <div className="flex flex-col justify-start w-full lg:w-[33%] text-center lg:text-left z-20">
            <p className="text-white/80 font-serif text-xl md:text-2xl mb-2 italic">Since 1933,</p>
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold font-sans uppercase leading-[0.9] tracking-tight mb-6 text-white whitespace-nowrap">
              AUTHENTIC<br />
              <span className="font-serif italic font-normal normal-case tracking-normal text-white/80">&</span><br />
              KOZHIKODE<br />
              <span className="font-serif italic font-normal normal-case tracking-normal text-white/90">Halwa</span>
            </h1>
            <p className="text-white/80 font-serif text-base md:text-lg leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0">
              Transforming traditional recipes into stunning flavors—pure ghee, slow-cooked perfection that captivates and delivers joy.
            </p>
            <button className="bg-[var(--color-background)] text-[var(--color-primary)] rounded-full px-6 py-3 flex items-center justify-between w-max gap-6 group hover:bg-white transition-colors mx-auto lg:mx-0">
              <span className="font-bold text-sm tracking-widest uppercase">Shop Now</span>
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="text-[var(--color-background)]" size={16} />
              </div>
            </button>
          </div>

          {/* Right Column (Stats) */}
          <div className="hidden lg:flex flex-col justify-start items-end gap-12 w-[33%] text-right z-20 mt-10">
            <div className="flex flex-col items-center w-max">
              <span className="text-4xl xl:text-5xl font-bold font-sans text-white">100+</span>
              <span className="text-white/70 text-sm font-serif italic mt-1">Years Legacy</span>
            </div>
            <div className="flex flex-col items-center w-max">
              <span className="text-4xl xl:text-5xl font-bold font-sans text-white">1M+</span>
              <span className="text-white/70 text-sm font-serif italic mt-1">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center w-max">
              <span className="text-4xl xl:text-5xl font-bold font-sans text-white">100%</span>
              <span className="text-white/70 text-sm font-serif italic mt-1">Pure Ghee</span>
            </div>
            <div className="flex flex-col items-center w-max">
              <span className="text-4xl xl:text-5xl font-bold font-sans text-white">50</span>
              <span className="text-white/70 text-sm font-serif italic mt-1">Global Locations</span>
            </div>
          </div>

        </div>

        {/* Bottom Features Row */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-auto pt-12 relative z-20">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20"></div>
          
          <div className="border-l border-white/20 pl-6">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-white">Wood-Fired</h4>
            <p className="text-white/60 text-xs leading-relaxed font-serif italic pr-4">Slow cooked over traditional wood fires.</p>
          </div>
          <div className="border-l border-white/20 pl-6">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-white">No Preservatives</h4>
            <p className="text-white/60 text-xs leading-relaxed font-serif italic pr-4">Made with 100% natural ingredients.</p>
          </div>
          <div className="border-l border-white/20 pl-6">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-white">Authentic Heritage</h4>
            <p className="text-white/60 text-xs leading-relaxed font-serif italic pr-4">Legendary Kozhikode recipe since 1933.</p>
          </div>
          <div className="border-l border-white/20 pl-6">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-white">Pan-India</h4>
            <p className="text-white/60 text-xs leading-relaxed font-serif italic pr-4">Shipped fresh directly to your doorstep.</p>
          </div>
        </div>

      </div>

    </section>
  );
}
