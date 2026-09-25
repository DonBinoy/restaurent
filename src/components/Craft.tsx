"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "THE PREPARATION", desc: "Selecting the purest wheat, jaggery, and ghee.", image: "/craft_vat.png" },
  { num: "02", title: "THE HEAT", desc: "Slowly bringing the mixture to a boil in traditional copper urulis.", image: "/craft_vat.png" },
  { num: "03", title: "THE STIRRING", desc: "Hours of continuous, rhythmic hand-stirring—the true secret to the texture.", image: "/craft_vat.png" },
  { num: "04", title: "THE SETTING", desc: "Pouring the rich, glossy mixture to rest and set naturally.", image: "/craft_vat.png" },
  { num: "05", title: "THE FINISH", desc: "Cutting the blocks perfectly, ready to be boxed and gifted.", image: "/craft_vat.png" },
];

const ImageWheelItem = ({ step, index, scrollYProgress, numberRotation }: any) => {
  const center = index * 0.25;
  
  // Explicitly map the full 0 to 1 range to prevent WAAPI interpolation bugs
  let input, scaleOutput, opacityOutput;
  if (index === 0) {
    input = [0, 0.15, 1];
    scaleOutput = [1, 0.6, 0.6];
    opacityOutput = [1, 0.2, 0.2];
  } else if (index === 4) {
    input = [0, 0.85, 1];
    scaleOutput = [0.6, 0.6, 1];
    opacityOutput = [0.2, 0.2, 1];
  } else {
    input = [0, center - 0.15, center, center + 0.15, 1];
    scaleOutput = [0.6, 0.6, 1, 0.6, 0.6];
    opacityOutput = [0.2, 0.2, 1, 0.2, 0.2];
  }

  const scale = useTransform(scrollYProgress, input, scaleOutput);
  const opacity = useTransform(scrollYProgress, input, opacityOutput);
  
  const uprightRotation = useTransform(numberRotation, (val: number) => val - index * 30);

  return (
    <div 
      className="absolute top-1/2 left-1/2 w-[50%] h-[2px] -translate-y-1/2 origin-left"
      style={{ transform: `rotate(${index * 30}deg)` }}
    >
      <div className="absolute right-0 w-8 h-[2px] bg-white/40"></div>
      
      <motion.div 
        className="absolute left-full top-1/2 -translate-y-1/2 origin-center ml-6 md:ml-12"
        style={{ 
          scale, 
          opacity, 
          rotate: uprightRotation
        }}
      >
        <div className="relative w-[250px] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,118,62,0.15)] border border-[var(--color-accent)]/30 group">
          {/* Subtle inner glow for images */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)]/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
          
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
      </motion.div>
    </div>
  );
};

const TextContentItem = ({ step, index, scrollYProgress }: any) => {
  const center = index * 0.25;
  
  let input, opacityOutput, yOutput;
  if (index === 0) {
    input = [0, 0.1, 1];
    opacityOutput = [1, 0, 0];
    yOutput = [0, -40, -40];
  } else if (index === 4) {
    input = [0, 0.9, 1];
    opacityOutput = [0, 0, 1];
    yOutput = [40, 40, 0];
  } else {
    input = [0, center - 0.1, center, center + 0.1, 1];
    opacityOutput = [0, 0, 1, 0, 0];
    yOutput = [40, 40, 0, -40, -40];
  }

  const opacity = useTransform(scrollYProgress, input, opacityOutput);
  const y = useTransform(scrollYProgress, input, yOutput);

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full flex flex-col justify-center pl-[5vw] md:pl-[10vw]"
      style={{ opacity, y }}
    >
      {/* Massive Background Watermark */}
      <span className="absolute -left-10 md:left-0 top-1/2 -translate-y-1/2 font-title font-black text-[35vw] md:text-[25vw] text-white/[0.03] tracking-tighter pointer-events-none z-0 select-none">
        {step.num}
      </span>
      
      <div className="relative z-10 border-l-2 border-[var(--color-accent)] pl-8 md:pl-12">
        <span className="font-title font-black text-2xl md:text-3xl text-[var(--color-accent)] tracking-[0.2em] mb-4 block">
          STEP {step.num}
        </span>
        <h3 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight drop-shadow-xl font-medium">
          {step.title}
        </h3>
        <p className="text-white/60 font-sans text-base md:text-xl leading-relaxed max-w-md drop-shadow-md">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function Craft() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const dialRotation = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const numberRotation = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="craft" ref={containerRef} className="h-[500vh] bg-[var(--color-primary)] relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] z-0"></div>
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center z-10">
        
        {/* LEFT SIDE: The Visible Rotating Dial */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-[60vw] md:-left-[20vw] w-[110vw] md:w-[60vw] aspect-square rounded-full border border-dashed border-white/20">
          
          {/* Inner circle for extra visual rotation */}
          <motion.div 
            className="absolute inset-20 border border-white/10 rounded-full"
            style={{ rotate: dialRotation }}
          >
            {/* Dotted crosshairs to show rotation easily */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 -translate-x-1/2"></div>
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/5 -translate-y-1/2"></div>
          </motion.div>

          <motion.div 
            className="absolute inset-0 rounded-full"
            style={{ rotate: dialRotation }}
          >
            {steps.map((step, index) => (
              <ImageWheelItem 
                key={index} 
                step={step} 
                index={index} 
                scrollYProgress={scrollYProgress} 
                numberRotation={numberRotation} 
              />
            ))}
          </motion.div>
        </div>

        {/* Text inside the circle area (Fixed, doesn't rotate) */}
        <div className="absolute left-0 w-full md:w-[50vw] h-[400px] top-1/2 -translate-y-1/2 pointer-events-none z-10">
          {steps.map((step, index) => (
            <TextContentItem 
              key={index} 
              step={step} 
              index={index} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>

        {/* Section Title (Vertical Spine on Right) */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-12 z-20 pointer-events-none">
          <h2 
            className="font-title font-black text-sm md:text-xl text-white/30 tracking-[0.5em] uppercase" 
            style={{ writingMode: 'vertical-rl' }}
          >
            The Craft
          </h2>
        </div>
      </div>

      {/* Smooth Wavy Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg className="relative block w-full h-[25px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C100,120 100,0 200,60 C300,120 300,0 400,60 C500,120 500,0 600,60 C700,120 700,0 800,60 C900,120 900,0 1000,60 C1100,120 1100,0 1200,60 L1200,120 L0,120 Z" fill="#053a73"></path>
        </svg>
      </div>
    </section>
  );
}
