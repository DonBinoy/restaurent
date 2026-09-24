"use client";

import { Globe, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full relative z-50 bg-[#0B57A5] text-white pt-8 pb-16 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center relative z-10">
        
        {/* Logo */}
        <Link href="/" className="text-3xl md:text-4xl font-bold tracking-widest font-sans flex-shrink-0 drop-shadow-sm">
          SANKARAN<sup className="text-lg">®</sup>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-12 text-xs md:text-sm tracking-widest uppercase items-center relative font-bold">
          <Link href="#" className="hover:text-gray-300 transition-colors">Best Sellers</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Classic Boxes</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Our Story</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex gap-6 items-center flex-shrink-0">
          <button className="w-12 h-12 rounded-full border-[1.5px] border-white flex items-center justify-center hover:bg-white hover:text-[#0B57A5] transition-all shadow-sm">
            <Globe size={20} strokeWidth={2.5} />
          </button>
          <button className="w-12 h-12 rounded-full bg-white text-[#0B57A5] flex items-center justify-center hover:bg-gray-100 transition-all shadow-md">
            <ShoppingBag size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Wavy bottom border */}
      <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-[50px] md:h-[70px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,60 C150,120 300,0 450,60 C600,120 750,0 900,60 C1050,120 1200,0 1200,60 L1200,120 L0,120 Z"
            fill="#FFFEF0"
          ></path>
          <path
            d="M0,45 C150,105 300,-15 450,45 C600,105 750,-15 900,45 C1050,105 1200,-15 1200,45"
            fill="none"
            stroke="white"
            strokeWidth="3"
          ></path>
        </svg>
      </div>
    </nav>
  );
}
