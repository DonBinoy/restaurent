"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star } from "lucide-react";

export default function SpecialOffer() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="w-full bg-[#0F172A] rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-2xl">
          
          {/* Subtle noise pattern overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
          
          {/* Glowing orb behind image */}
          <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/20 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Left Content */}
          <div className="w-full lg:w-1/2 relative z-20 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8"
            >
              <Star className="text-[var(--color-accent)] fill-[var(--color-accent)]" size={14} />
              <span className="text-white text-xs font-bold tracking-widest uppercase">Festive Exclusive</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-sans font-black text-white uppercase leading-[0.9] tracking-tight mb-6"
            >
              The Royal<br />
              <span className="text-[var(--color-accent)] font-serif italic font-normal normal-case tracking-normal">Gift Box</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 font-serif text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              12 classic flavors curated in a premium heritage box. The perfect gift for the season.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <button className="bg-[var(--color-accent)] text-[#0F172A] w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-3 group">
                Grab 15% Off Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                <Clock size={14} />
                <span>Ends in 12h 45m</span>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
            className="w-full lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center lg:justify-end z-20"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {/* Spinning background badge */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 md:top-0 md:right-10 w-24 h-24 md:w-32 md:h-32 bg-[var(--color-accent)] rounded-full flex items-center justify-center z-20 shadow-xl"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="text-[12px] font-bold uppercase tracking-[0.2em] fill-[#0F172A]">
                    <textPath href="#curve" startOffset="0%">
                      Special Offer • Limited Time • 
                    </textPath>
                  </text>
                </svg>
                <span className="absolute text-[#0F172A] font-black text-xl md:text-2xl">-15%</span>
              </motion.div>
              
              <Image
                src="/halwa_black.png"
                alt="Royal Gift Box"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                unoptimized
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
