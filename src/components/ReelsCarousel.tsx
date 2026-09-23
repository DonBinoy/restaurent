"use client";

import Image from "next/image";
import { Play, Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const reels = [
  { id: 1, title: "The Best Halwa I've Ever Had!", views: "1.2M", likes: "124K", image: "/craft_vat.png" },
  { id: 2, title: "Unboxing the Festive Hamper 🎁", views: "850K", likes: "98K", image: "/hero.png" },
  { id: 3, title: "Traditional Kozhikodan Halwa", views: "2.4M", likes: "310K", image: "/vintage_store.png" },
  { id: 4, title: "Trying Black Halwa for the first time", views: "500K", likes: "45K", image: "/craft_vat.png" },
];

export default function ReelsCarousel() {
  return (
    <section className="py-20 bg-[var(--color-primary)] overflow-hidden relative">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/vintage_store.png')] bg-cover mix-blend-overlay"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-serif text-4xl md:text-5xl text-white">Sankaran Reels</h2>
              <span className="bg-red-500 text-white text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider animate-pulse shadow-lg">Live</span>
            </div>
            <p className="text-white/70 text-sm">Watch the magic unfold. Real people, real reactions.</p>
          </div>
          <button className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest hover:text-white transition-colors">
            Follow on Instagram &rarr;
          </button>
        </div>

        {/* Carousel */}
        <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0">
          {reels.map((reel) => (
            <motion.div 
              key={reel.id}
              whileHover={{ y: -10 }}
              className="relative min-w-[260px] md:min-w-[300px] aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
            >
              <Image
                src={reel.image}
                alt={reel.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Instagram-style Top Header */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Play size={10} fill="white" className="text-white" />
                  <span className="text-[10px] text-white font-bold">{reel.views}</span>
                </div>
                <MoreHorizontal size={20} className="text-white drop-shadow-md" />
              </div>

              {/* Instagram-style Side Icons */}
              <div className="absolute bottom-24 right-4 flex flex-col gap-6 items-center z-20">
                <div className="flex flex-col items-center gap-1">
                  <Heart size={26} className="text-white drop-shadow-md hover:text-red-500 hover:fill-red-500 transition-colors" />
                  <span className="text-[10px] text-white font-bold">{reel.likes}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <MessageCircle size={24} className="text-white drop-shadow-md" />
                  <span className="text-[10px] text-white font-bold">1.2K</span>
                </div>
                <Share2 size={24} className="text-white drop-shadow-md" />
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                  <Play size={24} fill="white" className="text-white ml-1" />
                </div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 text-white z-20 pr-20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] border border-white flex items-center justify-center text-[8px] font-bold">S</div>
                  <span className="text-xs font-bold tracking-wide">@sankaranhalwa</span>
                </div>
                <h3 className="text-sm font-medium leading-snug line-clamp-2">{reel.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
