"use client";

import { motion } from "framer-motion";

const videos = [
  { 
    id: 1, 
    embedId: "DT4eTJ2gbwv",
    title: "The Making of our Classic Halwa",
  },
  { 
    id: 2, 
    embedId: "DYo6B_wTMId",
    title: "About Sankaran Bakery",
  },
];

const partners = ["AMAZON", "FLIPKART", "SWIGGY MINIS", "BLINKIT", "ZEPTO"];
const repeatedPartners = [...partners, ...partners, ...partners, ...partners];

export default function ReelsCarousel() {
  return (
    <section className="bg-[#FFFEF0] pt-16 md:pt-24 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col gap-12">
        
        {/* Title Area */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-[#1E1B16] leading-none tracking-tight">
            The <span className="italic text-[#0B57A5]">Diaries</span>
          </h2>
          <div className="flex items-center gap-4">
            <span className="bg-red-500 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-2 animate-pulse shadow-sm tracking-widest">
              <span className="w-2 h-2 bg-white rounded-full"></span> Live on Instagram
            </span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full pb-12 items-center justify-center">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="relative w-full max-w-[320px] mx-auto aspect-[9/16] rounded-[32px] overflow-hidden shadow-2xl bg-[#FFFEF0] border-4 border-[#FFFEF0] ring-1 ring-[#0B57A5]/20"
            >
              {/* 
                CSS Hack: We make the iframe taller than the container and shift it upwards 
                to perfectly crop out Instagram's un-hideable profile header!
              */}
              <div className="absolute w-full h-[calc(100%+120px)] -top-[60px] left-0">
                <iframe 
                  src={`https://www.instagram.com/reel/${video.embedId}/embed/?hidecaption=true`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="w-full h-full"
                  title={video.title}
                ></iframe>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Partners Marquee Strip */}
      <div className="w-full bg-[#0B57A5] text-white py-6 overflow-hidden flex items-center relative border-y border-[#0B57A5]/20 mt-4 shadow-inner">
        <div className="absolute left-0 top-0 h-full w-12 md:w-24 bg-gradient-to-r from-[#0B57A5] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-12 md:w-24 bg-gradient-to-l from-[#0B57A5] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 25 
          }}
          className="flex whitespace-nowrap items-center min-w-max"
        >
          <div className="flex items-center gap-12 px-6">
            {repeatedPartners.map((partner, i) => (
              <div key={i} className="flex items-center gap-12">
                {/* Available On Prefix every 5 items */}
                {i % partners.length === 0 && (
                  <span className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-[0.3em] font-sans">
                    Available On
                  </span>
                )}
                
                <span className="font-serif text-2xl md:text-3xl font-medium tracking-wider uppercase drop-shadow-sm">
                  {partner}
                </span>
                
                {/* Separator Dot */}
                {(i + 1) % partners.length !== 0 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
