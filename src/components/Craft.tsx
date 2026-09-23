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
        <div className="relative w-[250px] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
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
      <span className="font-title font-black text-6xl md:text-8xl text-white opacity-80 mb-4">{step.num}</span>
      <h3 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight">{step.title}</h3>
      <p className="text-white/70 font-light text-base md:text-lg leading-relaxed max-w-sm">{step.desc}</p>
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
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
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

        <div className="absolute top-12 md:top-20 right-12 md:right-32 z-20">
          <h2 className="font-title font-black text-lg md:text-2xl text-white/30 tracking-widest uppercase">The Craft</h2>
        </div>

      </div>
    </section>
  );
}
