"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const storyNodes = [
  {
    title: "A LEGACY, STIRRED BY HAND.",
    subtitle: "Kozhikode · Since 1933",
    content: [
      "Some things are made.",
      "Some things are passed down.",
      "And some become part of a place itself.",
      "For more than nine decades, Sankaran has been part of the story of Kozhikode — a story that began on the streets of Mittai Theruvu, where the aroma of halwa has long been woven into the character of the city. Sankaran Bakery opened its doors in 1933, and over the generations, its name became closely associated with the craft of Kozhikodan halwa."
    ]
  },
  {
    title: "IT BEGAN WITH A NAME.",
    content: [
      "At the heart of Sankaran's story is a relationship between a student and his mentor.",
      "Kadapamannil Chandukutty began the journey alongside his mentor, Sankarettan. When his mentor passed away, Chandukutty continued the business, keeping the name Sankaran as a tribute to the man who had taught him.",
      "The name remained.",
      "And so did the craft."
    ]
  },
  {
    title: "THE CRAFT WAS NEVER MEANT TO BE RUSHED.",
    content: [
      "Halwa doesn't happen in a hurry.",
      "Flour is prepared. The mixture meets the heat. The stirring begins.",
      "And then comes the part that cannot simply be automated — knowing the moment when everything is ready.",
      "For generations, that knowledge has been carried from one pair of hands to another.",
      "The copper vessels. The heat. The long hours of stirring. The texture. The finish.",
      "Not just a recipe, but an understanding of the craft."
    ]
  },
  {
    title: "FROM ONE GENERATION TO THE NEXT.",
    content: [
      "Sankaran grew with the generations that came through its doors.",
      "The shop sold more than halwa — biscuits and other bakery favourites were part of its early story too. But halwa remained its signature.",
      "And behind that signature were people.",
      "Craftsmen who understood the process. Families who kept the business moving. And generations who chose to keep doing things the way they had learned them.",
      "Today, the fourth generation continues that journey."
    ]
  },
  {
    title: "TRADITION DIDN'T MEAN STANDING STILL.",
    content: [
      "A legacy survives not by refusing to change, but by knowing what must never change.",
      "The craft remained at the heart of Sankaran. But the possibilities around it continued to grow.",
      "New flavours joined the classics. Traditional halwa evolved into new expressions, while the care behind its making remained.",
      "The result is a collection that carries both sides of Sankaran:",
      "what came before, and what comes next."
    ]
  },
  {
    title: "FROM MITTAI THERUVU TO THE WORLD.",
    content: [
      "The street has changed. Kozhikode has changed. Generations have come and gone.",
      "But Sankaran remains on the same historic street that helped give Kozhikode its identity as a destination for sweets and food.",
      "What began as a bakery became part of the memory of a city.",
      "A box carried home from SM Street. A flavour remembered from childhood. A gift taken to someone far away. A familiar taste waiting at the end of a journey back to Kozhikode."
    ]
  },
  {
    title: "1933 → TODAY",
    content: [
      "More than ninety years later, the story is still being written.",
      "The hands may change. The flavours may evolve. The world may move faster.",
      "But some things are worth taking slowly.",
      "The fire. The craft. The patience. The taste. And the promise behind the name."
    ],
    finale: "SANKARAN",
    finaleSub: "A legacy you can taste."
  }
];

export default function Heritage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });
  
  // Transform scroll progress to SVG coordinate height (0 to 1000 for viewBox)
  const clipHeight = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  // Map the van's position and rotation precisely along the Bezier curves of the road
  const vanY = clipHeight;
  const vanX = useTransform(vanY, 
    [0, 75, 150, 225, 300, 375, 450, 525, 600, 675, 750, 825, 900, 950, 1000],
    [50, 72.5, 50, 27.5, 50, 72.5, 50, 27.5, 50, 72.5, 50, 27.5, 50, 75, 50]
  );
  const vanRotation = useTransform(vanY,
    [0, 75, 150, 225, 300, 375, 450, 525, 600, 675, 750, 825, 900, 950, 1000],
    [20, 0, -20, 0, 20, 0, -20, 0, 20, 0, -20, 0, 20, -10, 0]
  );

  return (
    <section ref={containerRef} className="py-32 bg-[var(--color-background)] relative overflow-hidden">
      
      {/* Aged Paper Noise Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', mixBlendMode: 'multiply' }}></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col">

        {/* The Winding Animated Road */}
        <div 
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[150px] md:w-[300px] pointer-events-none drop-shadow-2xl opacity-90"
          style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}
        >
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1000">
            <defs>
              <clipPath id="roadClip">
                <motion.rect x="-50" y="0" width="200" height={clipHeight} />
              </clipPath>
              
              <filter id="roadShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.4" />
              </filter>
            </defs>

            <g clipPath="url(#roadClip)" filter="url(#roadShadow)">
              {/* Outer White Border of Road */}
              <path 
                d="M 50 0 C 130 100, -30 200, 50 300 C 130 400, -30 500, 50 600 C 130 700, -30 800, 50 900 C 130 1000, 50 1000, 50 1000"
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="16" 
              />
              
              {/* Main Dark Asphalt Road */}
              <path 
                d="M 50 0 C 130 100, -30 200, 50 300 C 130 400, -30 500, 50 600 C 130 700, -30 800, 50 900 C 130 1000, 50 1000, 50 1000"
                fill="none" 
                stroke="#1f2937" 
                strokeWidth="14" 
              />
              
              {/* Center Dashed White Line */}
              <path 
                d="M 50 0 C 130 100, -30 200, 50 300 C 130 400, -30 500, 50 600 C 130 700, -30 800, 50 900 C 130 1000, 50 1000, 50 1000"
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="1.5" 
                strokeDasharray="4 4"
              />
            </g>

            {/* The Animated Van */}
            <motion.image
              href="/van.png"
              x="-12"
              y="-24"
              width="24"
              height="48"
              preserveAspectRatio="xMidYMid meet"
              style={{
                x: vanX,
                y: vanY,
                rotate: vanRotation,
                transformOrigin: "center center"
              }}
              className="drop-shadow-xl"
            />
          </svg>
        </div>

        {/* Story Nodes */}
        {storyNodes.map((node, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full md:w-5/12 flex flex-col py-24 md:py-32 relative ${isLeft ? 'self-start md:items-end md:text-right' : 'self-end md:items-start md:text-left'} text-center items-center`}
            >
              {/* Point Indicator on the road */}
              <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-yellow-400 border-[3px] border-white shadow-lg z-20 ${isLeft ? '-right-[calc(10.6vw+11px)] lg:-right-[calc(11.5vw+15px)] xl:-right-[144px]' : '-left-[calc(10.6vw+11px)] lg:-left-[calc(11.5vw+15px)] xl:-left-[144px]'}`}>
                <div className="absolute inset-1.5 bg-yellow-600 rounded-full animate-pulse"></div>
              </div>

              {node.subtitle && (
                <span className="text-[0.6rem] md:text-xs font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4 bg-white/50 px-3 py-1 rounded-full border border-gray-200">
                  {node.subtitle}
                </span>
              )}
              
              <h3 className="font-serif text-3xl md:text-5xl text-[var(--color-primary)] mb-8 leading-tight">
                {node.title}
              </h3>

              <div className="space-y-6 text-sm md:text-base text-gray-700 font-medium leading-relaxed max-w-sm">
                {node.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {node.finale && (
                <div className="mt-20 flex flex-col items-center md:items-start text-center md:text-left">
                  <h1 className="font-title text-5xl md:text-8xl text-[var(--color-accent)] tracking-widest mb-4">
                    {node.finale}
                  </h1>
                  <p className="font-serif italic text-2xl md:text-3xl text-[var(--color-primary)]">
                    {node.finaleSub}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
