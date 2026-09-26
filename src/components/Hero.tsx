"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const flavors = [
  { name: "CLASSIC BLACK", image: "/halwa/halwa_black.png", color: "bg-[#2A2A2A]" },
  { name: "RICH BANANA", image: "/halwa/halwa_banana.png", color: "bg-[#D4A373]" },
  { name: "DRY FRUIT", image: "/halwa/halwa_dryfruit.png", color: "bg-[#8B5A2B]" },
  { name: "PINEAPPLE", image: "/halwa/halwa_pineapple.png", color: "bg-[#E9C46A]" },
  { name: "TENDER COCONUT", image: "/halwa/halwa_coconut.png", color: "bg-[#F4F1DE]" },
];
const rightImages = ['/bananahalwa.png', '/hero5.png', '/hero4.png'];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % rightImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative w-full min-h-[75vh] lg:min-h-[85vh] text-white pt-24 pb-12 overflow-hidden flex flex-col font-sans"
      style={{ background: 'radial-gradient(circle at 65% 50%, #005bb5 0%, #002f6c 55%, #00193d 100%)' }}
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col h-full flex-grow">
        
        {/* Top Section: Left Text & Right Slideshow */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-8 md:mt-16 gap-12 flex-grow">
          
          {/* Left Column (Text & CTA) */}
          <div className="flex flex-col justify-start w-full lg:w-1/2 text-center lg:text-left z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-[5rem] font-black font-title uppercase leading-[1.1] tracking-widest mb-4 text-white drop-shadow-xl"
            >
              AUTHENTIC<br />
              KOZHIKODE<br />
              <span className="text-[#A8763E]">HALWA</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 font-serif text-base md:text-lg uppercase tracking-[0.2em] mb-10 max-w-lg mx-auto lg:mx-0"
            >
              PURE GHEE • WOOD-FIRED • SINCE 1933
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <button className="bg-[#A8763E] text-white rounded-full px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-[#A8763E] transition-colors shadow-lg">
                Shop Now
              </button>
              <button className="border border-white/30 text-white rounded-full px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-colors">
                View Menu
              </button>
            </motion.div>
          </div>

          {/* Right Column (Slideshow Image) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-20 relative h-[300px] md:h-[400px] lg:h-[500px]">
            <AnimatePresence>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -100, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                className="absolute inset-0 flex items-center justify-center lg:justify-end"
              >
                <div className="relative w-full h-full mx-auto drop-shadow-2xl scale-110 md:scale-125 lg:scale-[1.4] -mt-16 md:-mt-20 lg:-mt-28">
                  <Image
                    src={rightImages[currentImageIndex] || '/halwa_red1.png'}
                    alt="Halwa Display"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Smooth Wavy Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg className="relative block w-full h-[25px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C100,120 100,0 200,60 C300,120 300,0 400,60 C500,120 500,0 600,60 C700,120 700,0 800,60 C900,120 900,0 1000,60 C1100,120 1100,0 1200,60 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>

    </section>
  );
}
