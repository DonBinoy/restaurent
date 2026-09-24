"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B57A5] pt-24 pb-8 text-white relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none transform rotate-180">
        <svg
          className="relative block w-full h-[30px] md:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,60 C150,0 300,120 450,60 C600,0 750,120 900,60 C1050,0 1200,120 1200,60 L1200,120 L0,120 Z"
            fill="#F1E9D6"
          ></path>
          <path
            d="M0,60 C150,0 300,120 450,60 C600,0 750,120 900,60 C1050,0 1200,120 1200,60"
            fill="none"
            stroke="white"
            strokeWidth="2"
          ></path>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold tracking-widest font-sans mb-6">
              SANKARAN<sup className="text-sm">®</sup>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-8 font-medium">
              Handcrafted sweets and pastries baked fresh every morning with love, patience, and simple ingredients.
            </p>
            <div className="flex gap-6 text-white font-bold text-sm">
              <a href="#" className="hover:text-gray-300 transition-colors">FB</a>
              <a href="#" className="hover:text-gray-300 transition-colors">IG</a>
              <a href="#" className="hover:text-gray-300 transition-colors">TW</a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-serif italic text-xl text-white mb-6">Menu</h4>
            <ul className="space-y-4 text-sm text-white/80 uppercase tracking-widest font-semibold">
              <li><Link href="#" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Classic Boxes</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Vegan Options</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Beverages</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-serif italic text-xl text-white mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm text-white/80 uppercase tracking-widest font-semibold">
              <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Store Locator</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal / Payment */}
          <div>
            <h4 className="font-serif italic text-xl text-white mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/80 uppercase tracking-widest font-semibold">
              <li><Link href="#" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Sankaran. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
             <span className="text-xs text-white/60 tracking-wider">Secure Payments</span>
             <div className="flex gap-2">
               <div className="w-8 h-5 bg-white/20 rounded"></div>
               <div className="w-8 h-5 bg-white/20 rounded"></div>
               <div className="w-8 h-5 bg-white/20 rounded"></div>
             </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
