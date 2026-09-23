"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const row1 = [
  { name: "Rahul M.", location: "Kochi", text: "The authentic taste of Kozhikode! The red halwa melts in your mouth. Best packaging too.", rating: 5 },
  { name: "Sneha P.", location: "Bangalore", text: "Ordered the festive hamper for Diwali. Absolutely loved the quality and the traditional touch.", rating: 5 },
  { name: "Anoop V.", location: "Dubai", text: "Reminds me of my childhood. The black halwa is exactly how it used to taste 20 years ago.", rating: 5 },
  { name: "Meera K.", location: "Chennai", text: "Very premium packaging and the taste is unmatched. The sugar-free option is a lifesaver!", rating: 5 },
];

const row2 = [
  { name: "Karthik R.", location: "Mumbai", text: "I've tried halwa from everywhere, but Sankaran's balance of sweetness and texture is perfection.", rating: 5 },
  { name: "Priya S.", location: "Trivandrum", text: "Gifting these beautiful boxes has become our family tradition. The ghee aroma is intoxicating.", rating: 5 },
  { name: "Varun J.", location: "Delhi", text: "Was blown away by the Tender Coconut halwa. It feels so light yet incredibly rich.", rating: 5 },
  { name: "Lekshmi B.", location: "Pune", text: "The presentation alone is worth it. It feels like you are opening a box of heritage and history.", rating: 5 },
];

const ReviewCard = ({ review }: any) => (
  <div className="min-w-[320px] md:min-w-[450px] bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl flex flex-col hover:border-white/20 transition-colors">
    <div className="flex gap-1 mb-6">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" className="text-[var(--color-accent)]" />
      ))}
    </div>
    <p className="font-serif text-lg md:text-xl text-white/90 italic mb-8 leading-relaxed">
      "{review.text}"
    </p>
    <div className="flex items-center gap-4 mt-auto">
      <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-title font-bold uppercase">
        {review.name.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-white tracking-wide">{review.name}</p>
        <p className="text-xs text-white/50 tracking-wider uppercase mt-1">{review.location}</p>
      </div>
      <div className="ml-auto text-[10px] font-bold text-[#fcc822] border border-[#fcc822]/30 bg-[#fcc822]/10 px-3 py-1 rounded-full tracking-widest uppercase">
        Verified
      </div>
    </div>
  </div>
);

export default function TextReviews() {
  return (
    <section className="py-32 bg-[#111] overflow-hidden relative border-t border-white/5">
      
      {/* Header */}
      <div className="text-center mb-20 px-4 relative z-20">
        <h2 className="font-title text-3xl md:text-5xl text-white tracking-widest uppercase mb-4">
          What Our Customers Say
        </h2>
        <div className="flex justify-center items-center gap-2 mt-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" className="text-[#fcc822]" />
            ))}
          </div>
          <span className="text-sm font-medium text-white/60 tracking-wider ml-2">
            4.9/5 from 2,000+ reviews
          </span>
        </div>
      </div>

      {/* Marquee Area */}
      <div className="relative flex flex-col gap-6 md:gap-8">
        
        {/* Gradient Fades for edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 - Scrolls Left */}
        <div className="flex w-[200%]">
          <motion.div 
            className="flex gap-6 md:gap-8 min-w-max pr-6 md:pr-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...row1, ...row1, ...row1].map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Scrolls Right */}
        <div className="flex w-[200%]">
          <motion.div 
            className="flex gap-6 md:gap-8 min-w-max pr-6 md:pr-8"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...row2, ...row2, ...row2].map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </motion.div>
        </div>

      </div>

    </section>
  );
}
