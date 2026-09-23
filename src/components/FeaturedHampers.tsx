"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const hampers = [
  { 
    name: "THE ROYAL GIFT BOX", 
    desc: "A curated collection of 12 classic flavors in a premium heritage box.", 
    price: "1,299", 
    image: "/halwa_red.png",
    circleColor: "bg-[#fcc822]",
    position: "top"
  },
  { 
    name: "FESTIVE COMBO", 
    desc: "Black, Banana, and Tender Coconut Halwa trio perfect for gifting.", 
    price: "999", 
    image: "/halwa_black.png",
    circleColor: "bg-[var(--color-accent)]",
    position: "bottom"
  },
  { 
    name: "MINI ASSORTMENT", 
    desc: "A taste of everything. 6 mini blocks of our best sellers.", 
    price: "599", 
    image: "/halwa_coconut.png",
    circleColor: "bg-[var(--color-primary)]",
    position: "top"
  },
];

export default function FeaturedHampers() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll progress to horizontal movement.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="h-[300vh] bg-white relative">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden py-20">
        
        {/* The entire horizontal layout wrapped in motion.div */}
        <motion.div style={{ x }} className="flex h-full items-center pl-6 md:pl-24 w-[2800px] relative">
          
          {/* Introduction Block */}
          <div className="min-w-[300px] md:min-w-[400px] z-20 shrink-0">
            <h2 className="font-title font-black text-4xl md:text-6xl text-black uppercase tracking-tight leading-none mb-4">
              SANKARAN<br/>FESTIVE SPECIALS
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium max-w-sm">
              Gift the authentic taste of Kozhikode with our beautifully packaged assorted halwa boxes.
            </p>
          </div>

          {/* The Continuous SVG Line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[350px] md:left-[450px] min-w-[2500px] h-[400px] pointer-events-none z-0">
            <svg width="100%" height="100%" viewBox="0 0 2500 400" preserveAspectRatio="none">
              <path 
                d="M 0 200 C 150 200, 250 50, 450 50 C 650 50, 750 350, 950 350 C 1150 350, 1250 50, 1450 50 C 1650 50, 1750 350, 1950 350 C 2150 350, 2300 200, 2500 200"
                fill="none" 
                stroke="#000000" 
                strokeWidth="2.5" 
              />
            </svg>
          </div>

          {/* The Hampers */}
          <div className="flex gap-32 md:gap-48 relative z-10 pl-[100px] md:pl-[200px] shrink-0">
            {hampers.map((hamper, idx) => {
              const isTop = hamper.position === "top";
              return (
                <div 
                  key={idx}
                  className={`flex flex-col relative w-[280px] md:w-[320px] shrink-0 ${isTop ? '-translate-y-16 md:-translate-y-24' : 'translate-y-16 md:translate-y-24 flex-col-reverse'}`}
                >
                  
                  {/* The Big Circle with Product Image */}
                  <div className="relative w-full aspect-square flex items-center justify-center group cursor-pointer z-10">
                    <div className="absolute inset-[-10px] md:inset-[-20px] border border-black/10 rounded-full scale-90 group-hover:scale-100 transition-transform duration-500"></div>
                    <div className={`absolute inset-0 rounded-full ${hamper.circleColor} group-hover:scale-95 transition-transform duration-500`}></div>
                    
                    {/* Perfectly Round Image Container */}
                    <div className="relative w-[75%] h-[75%] rounded-full overflow-hidden z-10 group-hover:scale-110 transition-transform duration-700">
                      <Image
                        src={hamper.image}
                        alt={hamper.name}
                        fill
                        className="object-cover group-hover:-rotate-3 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  {/* Text Content (Removed white background to prevent clipping the line) */}
                  <div className={`flex flex-col ${isTop ? 'mt-8' : 'mb-8'} px-2 z-20`}>
                    <h3 className="font-title font-black text-2xl md:text-3xl text-black uppercase leading-none mb-3">
                      {hamper.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base font-medium mb-6 leading-relaxed">
                      {hamper.desc}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-xl text-black">₹ {hamper.price}</span>
                      <button className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] transition-colors">
                        Add
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
