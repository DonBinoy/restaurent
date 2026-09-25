"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function FeaturedHampers() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <section id="hampers" className="bg-[#fafafa] py-32 relative z-20">
      
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <span className="font-bold tracking-[0.3em] uppercase text-[10px] text-[var(--color-accent)] mb-4 block">Specials</span>
          <h2 className="font-title font-black text-4xl md:text-6xl text-black uppercase tracking-tight leading-none">
            FESTIVE GIFTING
          </h2>
        </div>
        <p className="text-gray-500 text-sm md:text-base font-medium max-w-sm">
          Gift the authentic taste of Kozhikode with our beautifully packaged, luxury assorted halwa bento boxes.
        </p>
      </div>

      {/* Foolproof Flex-Based Bento Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row gap-6 max-w-[1400px] mx-auto px-6 lg:px-12"
      >
        
        {/* LEFT COLUMN (2/3 Width) */}
        <div className="flex flex-col gap-6 lg:w-2/3">
          
          {/* 1. HERO CARD (Massive Top Left) */}
          <motion.div variants={cardVariants} className="bg-[#052b54] rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group h-[500px] lg:h-[600px] shadow-sm">
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] z-0"></div>
            
            {/* SOLID TEXT LAYER (Behind Image, z-0) */}
            <div className="absolute top-12 right-8 md:right-12 text-right z-0">
              <span className="text-[var(--color-accent)] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Signature</span>
              <h3 className="font-title font-black text-5xl md:text-7xl text-white uppercase leading-[0.9] drop-shadow-xl">
                The Royal<br/>Heritage<br/>Box
              </h3>
            </div>

            {/* PRODUCT IMAGE (Middle Layer, z-10) */}
            <div className="absolute top-[65%] left-[-5%] md:left-0 -translate-y-1/2 w-[80%] max-w-[400px] md:max-w-[450px] aspect-square flex items-center justify-center z-10 pointer-events-none">
              <div className="absolute inset-20 bg-[var(--color-accent)]/20 blur-[80px] rounded-full"></div>
              <Image 
                src="/luxury_halwa_box.png" 
                alt="Royal Heritage Hamper" 
                fill 
                className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>

            {/* STROKED TEXT LAYER (Front Layer, z-20) */}
            <div className="absolute top-12 right-8 md:right-12 text-right z-20 pointer-events-none" aria-hidden="true">
              <span className="text-transparent font-bold tracking-[0.2em] uppercase text-xs mb-3 block select-none">&nbsp;</span>
              <h3 
                className="font-title font-black text-5xl md:text-7xl uppercase leading-[0.9] text-transparent select-none"
                style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)' }}
              >
                The Royal<br/>Heritage<br/>Box
              </h3>
            </div>

            {/* Price Badge (Top Left, z-30) */}
            <div className="absolute top-12 left-8 md:left-12 z-30">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full shadow-lg">
                <span className="font-bold text-lg">₹ 1,299</span>
              </div>
            </div>

            {/* Bottom Description & Button (Bottom Right, z-30) */}
            <div className="relative z-30 flex flex-col items-end text-right h-full justify-end mt-auto pointer-events-none">
              <div className="pointer-events-auto flex flex-col items-end">
                <p className="text-sm font-light text-white/70 max-w-[200px] md:max-w-[250px] leading-relaxed mb-6">
                  A curated collection of 12 classic flavors packed in our signature wood-finished gold foil box.
                </p>
                <button className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-colors shrink-0 shadow-2xl group-hover:scale-110">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* 2. CORPORATE GIFTING (Bottom Left) */}
          <motion.div variants={cardVariants} className="bg-[#111111] rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between group h-auto md:h-[280px] shadow-sm">
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] z-0"></div>
            
            <div className="relative z-10 max-w-sm text-center md:text-left mb-8 md:mb-0">
              <h3 className="font-title font-black text-3xl md:text-5xl text-white uppercase leading-[0.9] mb-4">Corporate<br/>Gifting</h3>
              <p className="text-sm text-white/50 font-light">Custom engraved wood boxes and bulk shipping for your employees and most valued clients.</p>
            </div>

            <div className="relative z-10">
              <button className="flex items-center gap-4 bg-[var(--color-accent)] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors">
                Inquire Now
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN (1/3 Width, Perfectly matched heights via flex-1) */}
        <div className="flex flex-col gap-6 lg:w-1/3 min-h-[904px]">
          
          {/* 3. MACRO TEXTURE CARD */}
          <motion.div variants={cardVariants} className="flex-1 bg-[var(--color-accent)] rounded-[2rem] p-8 relative overflow-hidden group min-h-[250px]">
            {/* Background Texture Layer */}
            <Image 
              src="/halwa_red.png" 
              alt="Glossy Texture" 
              fill 
              className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)] to-transparent opacity-90 z-0"></div>
            
            {/* New Overlaid Image Layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-10 pointer-events-none">
              <Image 
                src="/halwa_red - Copy.png" 
                alt="Ghee Finish Detail" 
                fill 
                className="object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-1000"
              />
            </div>

            <div className="relative z-20 h-full flex flex-col justify-end text-white">
              <span className="font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block text-white/60">The Secret</span>
              <h3 className="font-serif text-2xl mb-2 font-medium">Authentic Ghee Finish</h3>
              <p className="text-[11px] text-white/80 leading-relaxed font-light">Notice the glossy sheen? That's 100% pure country ghee, locked in using a 90-year-old technique.</p>
            </div>
          </motion.div>

          {/* 4. THE DARK TRIO */}
          <motion.div variants={cardVariants} className="flex-1 bg-white border border-gray-100 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between group min-h-[250px] shadow-sm hover:shadow-lg transition-shadow">
            <div className="relative z-10 flex justify-between items-start">
              <h3 className="font-title font-black text-2xl uppercase leading-none text-black">The Dark<br/>Trio</h3>
              <span className="font-bold text-xs bg-gray-100 text-black px-3 py-1 rounded-full">₹ 999</span>
            </div>
            <div className="relative w-full h-[140px] flex items-center justify-center z-10 pointer-events-none">
               <Image 
                  src="/halwa_black.png" 
                  alt="Black Halwa" 
                  fill 
                  className="object-contain drop-shadow-xl group-hover:rotate-6 group-hover:scale-110 transition-transform duration-700"
                />
            </div>
            <div className="relative z-10 flex justify-between items-end">
              <p className="text-[11px] text-gray-500 max-w-[140px] font-medium leading-relaxed">Black, Banana, and Coconut Halwa trio perfect for gifting.</p>
              <button className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors shrink-0">
                <ShoppingBag size={14} />
              </button>
            </div>
          </motion.div>

          {/* 5. MINI BITES */}
          <motion.div variants={cardVariants} className="flex-1 bg-[#fdfaf5] border border-[#A8763E]/10 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between group min-h-[250px] shadow-sm hover:shadow-lg transition-shadow">
            <div className="relative z-10 flex justify-between items-start">
              <h3 className="font-title font-black text-2xl uppercase leading-none text-[var(--color-accent)]">Mini<br/>Bites</h3>
              <span className="font-bold text-xs bg-white text-[var(--color-accent)] px-3 py-1 rounded-full border border-[#A8763E]/20">₹ 599</span>
            </div>
            <div className="relative w-full h-[120px] flex items-center justify-center z-10 pointer-events-none">
               <Image 
                  src="/halwa_coconut.png" 
                  alt="Coconut Halwa" 
                  fill 
                  className="object-contain drop-shadow-xl group-hover:-rotate-3 group-hover:scale-110 transition-transform duration-700"
                />
            </div>
            <div className="relative z-10 flex justify-between items-end">
              <p className="text-[11px] text-[var(--color-accent)] max-w-[140px] font-medium leading-relaxed opacity-80">A taste of everything. 6 mini blocks of our absolute best sellers.</p>
              <button className="bg-[var(--color-accent)] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition-colors shrink-0">
                <ShoppingBag size={14} />
              </button>
            </div>
          </motion.div>

        </div>

      </motion.div>

      {/* Smooth Wavy Shape Divider for the NEXT section (SpecialOffer uses white background) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg className="relative block w-full h-[25px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C100,120 100,0 200,60 C300,120 300,0 400,60 C500,120 500,0 600,60 C700,120 700,0 800,60 C900,120 900,0 1000,60 C1100,120 1100,0 1200,60 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
