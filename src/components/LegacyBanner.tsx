"use client";

import { motion } from "framer-motion";
import { ArrowRight, History } from "lucide-react";
import Image from "next/image";

export default function LegacyBanner() {
  return (
    <section className="bg-white py-16 relative overflow-hidden z-20">
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#052b54] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-[0_30px_60px_-15px_rgba(5,43,84,0.3)] relative overflow-hidden"
        >
          {/* Subtle noise and radial gradients to make it look premium */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none mix-blend-luminosity">
             <Image src="/kozhikode_bg.png" alt="Vintage Kozhikode" fill className="object-cover object-right" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#052b54] via-[#052b54]/90 to-transparent pointer-events-none"></div>

          <div className="flex-1 text-center md:text-left relative z-10">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[var(--color-accent)] mb-6 mx-auto md:mx-0 border border-white/10">
              <History size={16} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Since 1933</span>
            </div>
            <h2 className="font-title font-black text-4xl md:text-5xl text-white uppercase tracking-tight leading-none mb-4">
              The Legacy of<br/> Sankaran Bakery
            </h2>
            <p className="text-white/70 font-sans font-light text-sm md:text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
              For over 90 years, our original wood-fired recipes have remained untouched. Discover the rich history behind Kozhikode's most authentic halwa.
            </p>
          </div>
          
          <div className="shrink-0 w-full md:w-auto flex justify-center relative z-10">
            <button className="bg-white text-[#052b54] px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[var(--color-accent)] hover:text-white transition-all flex items-center justify-center gap-4 group shadow-xl">
              Read Our Story
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
