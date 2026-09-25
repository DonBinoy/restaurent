"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// More crowded reviews data
const reviewsData = [
  { top: "30%", name: "Rahul M.", title: "Authentic taste!", text: "The red halwa melts in your mouth.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { top: "65%", name: "Sneha P.", title: "Loved the quality!", text: "The traditional touch is amazing.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { top: "20%", name: "Anoop V.", title: "Childhood memories", text: "Exactly how it used to taste 20 years ago.", image: "https://randomuser.me/api/portraits/men/46.jpg" },
  { top: "80%", name: "Meera K.", title: "Premium packaging", text: "The sugar-free option is an absolute lifesaver!", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { top: "40%", name: "Karthik R.", title: "Perfect sweetness", text: "Sankaran's texture is pure perfection.", image: "https://randomuser.me/api/portraits/men/72.jpg" },
  { top: "15%", name: "Lekshmi B.", title: "Heritage in a box", text: "It feels like you are opening history.", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { top: "70%", name: "Varun J.", title: "Blown away", text: "The Tender Coconut halwa feels so light.", image: "https://randomuser.me/api/portraits/men/22.jpg" },
  { top: "35%", name: "Priya S.", title: "Family tradition", text: "Gifting these has become our tradition.", image: "https://randomuser.me/api/portraits/women/33.jpg" },
  { top: "85%", name: "Arjun T.", title: "Simply the best", text: "Nothing comes close to the original Kozhikode halwa.", image: "https://randomuser.me/api/portraits/men/91.jpg" },
  { top: "25%", name: "Divya C.", title: "Mouth-watering", text: "Packed with pure ghee and roasted cashews.", image: "https://randomuser.me/api/portraits/women/81.jpg" },
  { top: "60%", name: "Mohammed F.", title: "A true classic", text: "I travel 50kms just to buy this halwa.", image: "https://randomuser.me/api/portraits/men/15.jpg" },
  { top: "10%", name: "Sara W.", title: "Amazing texture!", text: "So soft and doesn't stick to your teeth.", image: "https://randomuser.me/api/portraits/women/94.jpg" },
  { top: "75%", name: "Vikas P.", title: "Incredible!", text: "The Dry Fruit halwa is loaded with nuts.", image: "https://randomuser.me/api/portraits/men/55.jpg" },
  { top: "45%", name: "Nisha T.", title: "So fresh", text: "It arrived perfectly fresh and warm-tasting.", image: "https://randomuser.me/api/portraits/women/25.jpg" },
  { top: "20%", name: "Ravi K.", title: "Top notch", text: "Best sweets in all of Kerala, hands down.", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { top: "85%", name: "Anita S.", title: "Beautiful boxes", text: "The presentation makes it a perfect gift.", image: "https://randomuser.me/api/portraits/women/77.jpg" },
];

export default function TextReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 60000;
    const interval = setInterval(() => {
      const elapsed = (Date.now() - start) % duration;
      progressRef.current = (elapsed / duration) * 50; 
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const currentPan = progressRef.current;
        const totalAvatars = reviewsData.length * 2;
        const validIndices = [];

        for (let i = 0; i < totalAvatars; i++) {
          const leftPercent = (i / totalAvatars) * 100;
          // Extremely strict margin: only select avatars that are sitting right in the middle 40% of the screen!
          // This absolutely prevents them from being near the edges when they pop up.
          if (leftPercent >= currentPan + 15 && leftPercent <= currentPan + 35) {
             validIndices.push(i);
          }
        }
        
        if (validIndices.length === 0) return prev;
        
        let next = validIndices[Math.floor(Math.random() * validIndices.length)];
        let attempts = 0;
        while (next === prev && validIndices.length > 1 && attempts < 10) {
           next = validIndices[Math.floor(Math.random() * validIndices.length)];
           attempts++;
        }
        return next;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[#fafafa] relative overflow-hidden h-[600px] md:h-[650px] border-t border-gray-200 flex flex-col items-center">
      
      {/* Clean Title */}
      <div className="absolute top-10 w-full text-center z-30 pointer-events-none">
        <h2 className="font-title text-4xl md:text-5xl text-gray-900 tracking-widest uppercase font-black">
          What Our <span className="text-[#0B57A5]">Customers</span> Say
        </h2>
      </div>

      {/* Infinite Panning Container */}
      <div className="absolute top-32 bottom-8 left-0 w-[200vw] flex">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full flex"
        >
          
          {[...reviewsData, ...reviewsData].map((review, idx) => {
            
            const isActualActive = idx === activeIndex;

            return (
              <div 
                key={`review-${idx}`}
                className={`absolute ${isActualActive ? 'z-50' : 'z-10'}`}
                style={{ top: review.top, left: `${(idx / (reviewsData.length * 2)) * 100}%`, transform: 'translate(-50%, -50%)' }}
              >
                {/* The Avatar */}
                <motion.div
                  animate={{ 
                    scale: isActualActive ? 1.5 : 1, 
                    filter: isActualActive ? 'blur(0px)' : 'blur(4px)',
                    opacity: isActualActive ? 1 : 0.6
                  }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg mx-auto ${isActualActive ? 'border-[3px] border-[#0B57A5] shadow-[0_0_20px_rgba(11,87,165,0.4)] relative z-50' : 'border border-gray-300'}`}
                >
                  <img src={review.image} className="w-full h-full object-cover" />
                </motion.div>

                {/* The Tooltip Card (Only shows if this avatar is active) */}
                <AnimatePresence>
                  {isActualActive && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-5 md:mt-6 bg-white rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] p-5 md:p-6 w-[260px] md:w-[320px] text-left border border-gray-100 z-50"
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>
                      
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-serif text-gray-800 text-sm font-bold">{review.name}</h3>
                          <div className="flex gap-[1px] bg-[#0B57A5] px-2 py-1 rounded">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={8} fill="white" className="text-white" />
                            ))}
                          </div>
                        </div>
                        
                        <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1 leading-tight">
                          {review.title}
                        </h4>
                        
                        <p className="text-gray-500 leading-snug font-sans text-xs">
                          {review.text}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Smooth Wavy Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg className="relative block w-full h-[25px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C100,120 100,0 200,60 C300,120 300,0 400,60 C500,120 500,0 600,60 C700,120 700,0 800,60 C900,120 900,0 1000,60 C1100,120 1100,0 1200,60 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
