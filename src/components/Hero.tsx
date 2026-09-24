"use client";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FFFEF0] bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat font-sans flex flex-col pt-12 pb-32">
      
      {/* Overlay to ensure text readability if hero.png is too busy */}
      <div className="absolute inset-0 bg-white/20 z-0"></div>

      {/* Central Typography */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 mt-16 md:mt-32 relative z-10 flex justify-start">
        <h1 className="text-4xl md:text-[5vw] lg:text-[5.5vw] font-serif text-[#1E1B16] leading-[1.1] tracking-tight font-normal text-left drop-shadow-sm max-w-3xl">
          Stories that <br className="hidden md:block" /> taste like <br className="hidden md:block" /> <span className="italic">home.</span>
        </h1>
      </div>

      {/* Bottom Content */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 mt-24 md:mt-32 flex flex-col md:flex-row justify-between items-end relative z-20">
        
        {/* Bottom Left Text */}
        <div className="max-w-sm text-sm md:text-base text-[#1E1B16] leading-relaxed font-medium mb-16 md:mb-0 text-left bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm">
          You can find us at the corner where <br/>
          <span className="font-serif italic text-gray-800 font-normal">the smell of freshly baked sweets meets <br/> morning sunlight.</span>
        </div>

        {/* Discover Button */}
        <div className="w-full md:w-auto flex justify-start md:justify-end mt-4 md:mt-0">
          <button className="rounded-full border border-[#0B57A5] bg-white/80 backdrop-blur-sm text-[#0B57A5] uppercase text-xs md:text-sm font-semibold tracking-wider px-8 py-3 md:px-12 md:py-4 hover:bg-[#0B57A5] hover:text-white transition shadow-sm">
            Discover the Taste
          </button>
        </div>
      </div>

      {/* Wavy bottom border for Hero */}
      <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-[30px] md:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,60 C150,0 300,120 450,60 C600,0 750,120 900,60 C1050,0 1200,120 1200,60 L1200,120 L0,120 Z"
            fill="#FFFEF0"
          ></path>
          <path
            d="M0,60 C150,0 300,120 450,60 C600,0 750,120 900,60 C1050,0 1200,120 1200,60"
            fill="none"
            stroke="#0B57A5"
            strokeWidth="2"
          ></path>
        </svg>
      </div>

    </section>
  );
}
