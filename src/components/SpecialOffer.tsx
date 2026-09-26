"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useRef } from "react";

export default function SpecialOffer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yForeground = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-white flex items-center justify-center">
      
      {/* Massive Background Typography (Parallax) */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-10"
      >
        <h2 className="font-title font-black text-[25vw] text-black/[0.03] uppercase tracking-tighter leading-none whitespace-nowrap text-center">
          SIGNATURE
        </h2>
      </motion.div>

      {/* Floating Tag (Top Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute top-12 left-6 md:top-20 md:left-20 bg-[var(--color-accent)] text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-lg z-40"
      >
        Limited Time Exclusive
      </motion.div>

      {/* Massive Title (Center Left) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="absolute top-1/3 md:top-1/2 left-6 md:left-20 md:-translate-y-1/2 z-40"
      >
        <h3 className="font-title font-black text-5xl md:text-7xl text-[var(--color-primary)] uppercase tracking-tight leading-[0.9] drop-shadow-sm">
          The<br/>Black<br/><span className="text-[var(--color-accent)]">Halwa</span>
        </h3>
      </motion.div>

      {/* Floating Product Image (Center / Center-Right) */}
      <motion.div 
        style={{ y: yForeground }}
        className="absolute top-1/2 left-1/2 md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] z-30 pointer-events-none"
      >
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[var(--color-primary)]/5 blur-[100px] rounded-full"></div>
        
        <Image
          src="/hero4.png"
          alt="Signature Black Halwa"
          fill
          className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.3)]"
          priority
          unoptimized
        />
        
        {/* Discount Badge attached to product */}
        <div className="absolute top-10 right-10 md:top-20 md:right-20 bg-[var(--color-primary)] text-white w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center shadow-2xl transform rotate-12 z-50">
            <span className="font-black text-2xl md:text-4xl leading-none">-15%</span>
            <span className="font-bold text-[10px] md:text-[12px] uppercase tracking-widest mt-1 text-[var(--color-accent)]">Off</span>
        </div>
      </motion.div>

      {/* Floating CTA & Timer (Bottom Right) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-12 right-6 md:bottom-20 md:right-20 flex flex-col items-end z-40"
      >
        <div className="flex items-center gap-3 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] px-6 py-4 rounded-full border border-black/5 mb-4">
          <Clock size={16} className="text-red-500" />
          <span className="text-red-500">Ends in 12h 45m</span>
        </div>

        <button className="bg-[var(--color-primary)] text-white px-10 py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[var(--color-accent)] transition-all flex items-center justify-center gap-4 group shadow-[0_20px_40px_rgba(5,43,84,0.4)]">
          Claim Offer Now
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>

      {/* Smooth Wavy Shape Divider - Transitioning into Footer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-50 pointer-events-none">
        <svg className="relative block w-full h-[25px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C100,120 100,0 200,60 C300,120 300,0 400,60 C500,120 500,0 600,60 C700,120 700,0 800,60 C900,120 900,0 1000,60 C1100,120 1100,0 1200,60 L1200,120 L0,120 Z" fill="var(--color-primary)"></path>
        </svg>
      </div>
    </section>
  );
}
