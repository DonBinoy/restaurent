"use client";

import Image from "next/image";
import { Package, Lock, Truck, Home, Building2, Trees } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer className="w-full overflow-hidden">
      {/* Top Banner section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col lg:flex-row w-full bg-[var(--color-background)] min-h-[260px]"
      >
        
        {/* Left Box Image */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/3 relative h-[300px] lg:h-auto overflow-hidden group">
          <Image 
            src="/sankaran_box.png" 
            alt="Sankaran Box" 
            fill 
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
          />
        </motion.div>

        {/* Middle Promise & Shipping */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/3 bg-[#F1E9D6] py-12 px-8 lg:px-12 flex flex-col justify-center border-x border-[#e2d5c3]">
          <div className="flex flex-col h-full justify-between gap-10">
            
            <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <motion.p variants={itemVariants} className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-bold mb-6 relative inline-block">
                Our Promise
                <span className="absolute -bottom-2 left-1/2 lg:left-0 w-8 h-[2px] bg-[var(--color-accent)] -translate-x-1/2 lg:translate-x-0"></span>
              </motion.p>
              <motion.h3 variants={itemVariants} className="font-serif text-3xl lg:text-4xl text-[var(--color-foreground)] mb-4 leading-tight">
                From our kitchen<br />in Kozhikode to<br />your doorstep.
              </motion.h3>
              <motion.p variants={itemVariants} className="text-[0.75rem] text-[var(--color-foreground)]/70 mb-8 font-medium max-w-[250px] lg:max-w-none">
                Carefully packed. Freshly made. Always.
              </motion.p>
              <motion.button 
                whileHover={{ x: 5 }}
                variants={itemVariants} 
                className="uppercase text-[0.65rem] tracking-[0.2em] font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 group"
              >
                Shop Now <span className="text-[var(--color-accent)] transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </motion.button>
            </div>

            <motion.div variants={itemVariants} className="border-t border-[#e2d5c3] pt-8 w-full">
              <div className="flex justify-between items-center text-[var(--color-foreground)] w-full px-2">
                  <div className="flex flex-col items-center gap-3">
                    <Package size={22} strokeWidth={1.5} className="text-[var(--color-accent)]" />
                    <span className="text-[0.55rem] tracking-[0.1em] font-bold uppercase opacity-80">Packed</span>
                  </div>
                  <span className="text-[0.6rem] opacity-50">&rarr;</span>
                  <div className="flex flex-col items-center gap-3">
                    <Lock size={22} strokeWidth={1.5} className="text-[var(--color-accent)]" />
                    <span className="text-[0.55rem] tracking-[0.1em] font-bold uppercase opacity-80">Sealed</span>
                  </div>
                  <span className="text-[0.6rem] opacity-50">&rarr;</span>
                  <div className="flex flex-col items-center gap-3">
                    <Truck size={22} strokeWidth={1.5} className="text-[var(--color-accent)]" />
                    <span className="text-[0.55rem] tracking-[0.1em] font-bold uppercase opacity-80">Shipped</span>
                  </div>
                  <span className="text-[0.6rem] opacity-50">&rarr;</span>
                  <div className="flex flex-col items-center gap-3">
                    <Home size={22} strokeWidth={1.5} className="text-[var(--color-accent)]" />
                    <span className="text-[0.55rem] tracking-[0.1em] font-bold uppercase opacity-80">Arrived</span>
                  </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Right Call to Action with Illustration */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/3 bg-[#0B57A5] py-12 px-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
           {/* Illustration Placeholder using Lucide Icons to simulate line art */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="flex items-end justify-center text-[#A8763E] opacity-70 mb-8 gap-2 border-b border-[#A8763E]/30 pb-3 w-full max-w-[200px]"
           >
             <Building2 size={44} strokeWidth={1} />
             <Trees size={36} strokeWidth={1} />
           </motion.div>
           
           <motion.h3 variants={itemVariants} className="font-serif text-white text-2xl lg:text-3xl tracking-wide leading-relaxed mb-8">
             TAKE A PIECE OF<br />KOZHIKODE HOME.
           </motion.h3>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             variants={itemVariants} 
             className="uppercase text-[0.7rem] tracking-[0.2em] font-bold text-white border-b border-white/30 pb-1 hover:text-white/70 transition-colors flex items-center gap-2"
           >
             Shop Halwa <span className="text-[#A8763E]">&rarr;</span>
           </motion.button>
        </motion.div>
      </motion.div>

      {/* Dark Blue Footer section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="bg-[#084280] text-white relative overflow-hidden"
      >
        {/* Floating Ambient Element */}
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
          className="absolute -top-[10%] -right-[5%] w-96 h-96 bg-[var(--color-primary)]/50 rounded-full blur-[100px] pointer-events-none z-0"
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-12 lg:gap-0 relative z-10">
          
          <motion.div variants={itemVariants} className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            <div className="relative w-28 h-28 md:w-36 md:h-36 mb-4">
              <Image 
                src="/shanakaran_logo.svg" 
                alt="Sankaran Logo" 
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-title text-3xl tracking-[0.2em] font-medium mb-3">SANKARAN</h2>
            <p className="font-sans text-[0.6rem] tracking-[0.3em] opacity-70">KOZHIKODE - EST. 1933</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[0.6rem] tracking-[0.2em] uppercase opacity-80 w-full lg:w-1/3">
            <a href="#" className="hover:text-white transition-colors hover:opacity-100">Story</a>
            <a href="#" className="hover:text-white transition-colors hover:opacity-100">Halwa</a>
            <a href="#" className="hover:text-white transition-colors hover:opacity-100">Craft</a>
            <a href="#" className="hover:text-white transition-colors hover:opacity-100">Archive</a>
            <a href="#" className="hover:text-white transition-colors hover:opacity-100">Journal</a>
            <a href="#" className="hover:text-white transition-colors hover:opacity-100">Shop</a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end gap-6 opacity-80 w-full lg:w-1/3">
             <motion.a whileHover={{ scale: 1.1, rotate: 5 }} href="#" className="hover:text-white flex items-center justify-center w-8 h-8 rounded-full border border-white/50 text-[10px] font-bold transition-all">IG</motion.a>
             <motion.a whileHover={{ scale: 1.1, rotate: -5 }} href="#" className="hover:text-white flex items-center justify-center w-8 h-8 rounded-full border border-white/50 text-[10px] font-bold transition-all">FB</motion.a>
             <motion.a whileHover={{ scale: 1.1, rotate: 5 }} href="#" className="hover:text-white flex items-center justify-center w-8 h-8 rounded-full border border-white/50 text-[10px] font-bold transition-all">YT</motion.a>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center border-t border-white/10 gap-6 md:gap-0 text-center md:text-left">
          <p className="text-[0.65rem] text-white/50 tracking-wider">
            © 2024 Sankaran Bakery. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
             {/* Small illustration in the bottom right */}
             <div className="hidden md:flex items-end justify-center text-[#A8763E] opacity-50 gap-1 border-b border-[#A8763E]/30 pb-1 pr-8">
               <Building2 size={24} strokeWidth={1} />
               <Trees size={20} strokeWidth={1} />
             </div>
             
             <div className="flex gap-6 uppercase tracking-[0.2em] text-[0.6rem] text-white/70">
                <a href="#" className="hover:text-white transition-colors">Shipping</a>
                <a href="#" className="hover:text-white transition-colors">Returns</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
