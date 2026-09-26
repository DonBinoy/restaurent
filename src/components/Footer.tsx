"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.8 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="w-full relative bg-[var(--color-primary)] text-white overflow-hidden h-auto flex flex-col justify-between pt-16">
      
      {/* Background Illustration (Positioned at bottom) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/kozhikode_bg.png" 
          alt="Kozhikode Illustration" 
          fill 
          className="object-cover object-bottom opacity-30 mix-blend-luminosity" 
          priority
        />
        {/* Gradient to fade top of image smoothly into the solid background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)]/80 to-transparent"></div>
        {/* Gradient to fade bottom of image for bottom text readability */}
        <div className="absolute inset-0 top-auto h-[40%] bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/70 to-transparent"></div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-between"
      >
        
        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          
          {/* Left: Brand */}
          <motion.div variants={itemVariants} className="max-w-md lg:max-w-lg mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start mb-6 -mt-4 md:-mt-16">
              <div className="relative w-48 h-48 md:w-[250px] md:h-[250px]">
                <Image 
                  src="/shanakaran_logo.svg" 
                  alt="Sankaran" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-title text-3xl font-black tracking-widest uppercase -mt-8 md:-mt-8 z-10">
                SANKARAN BAKERY
              </span>
            </div>
            <p className="text-white/60 text-[0.8rem] leading-relaxed max-w-sm">
              Sankaran helps you discover the authentic taste of Kozhikode — everything you need in one traditional box.
            </p>
          </motion.div>
          
          {/* Right: Links and Payments */}
          <motion.div variants={itemVariants} className="flex flex-col gap-12 mt-12 lg:mt-0">
            {/* Link Columns Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
              
              {/* Column 1 */}
              <div className="flex flex-col">
                <h4 className="font-bold text-[0.85rem] mb-6 text-white/90">Product</h4>
                <div className="flex flex-col gap-4 text-[0.8rem] text-white/60">
                  <a href="#" className="hover:text-white transition-colors">Our Halwa</a>
                  <a href="#" className="hover:text-white transition-colors">Festive Hampers</a>
                  <a href="#" className="hover:text-white transition-colors">Corporate Gifting</a>
                  <a href="#" className="hover:text-white transition-colors">New Arrivals</a>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col">
                <h4 className="font-bold text-[0.85rem] mb-6 text-white/90">Resources</h4>
                <div className="flex flex-col gap-4 text-[0.8rem] text-white/60">
                  <a href="#" className="hover:text-white transition-colors">The Craft</a>
                  <a href="#" className="hover:text-white transition-colors">Ingredients</a>
                  <a href="#" className="hover:text-white transition-colors">Blog</a>
                  <a href="#" className="hover:text-white transition-colors">Store Locator</a>
                  <a href="#" className="hover:text-white transition-colors">Support</a>
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col col-span-2 sm:col-span-1 mt-4 sm:mt-0">
                <h4 className="font-bold text-[0.85rem] mb-6 text-white/90">Company</h4>
                <div className="flex flex-col gap-4 text-[0.8rem] text-white/60">
                  <a href="#" className="hover:text-white transition-colors">About Us</a>
                  <a href="#" className="hover:text-white transition-colors">Heritage</a>
                  <a href="#" className="hover:text-white transition-colors">Careers</a>
                  <a href="#" className="hover:text-white transition-colors">Partners</a>
                  <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
              </div>

            </div>

            {/* Payment Methods Section */}
            <div className="w-full">
              <h4 className="font-bold text-[0.85rem] mb-4 text-white/90">Secure Payments</h4>
              <div className="flex items-center justify-center bg-white/95 rounded-md shadow-sm w-full max-w-[450px] h-[45px] md:h-[60px] p-2 relative overflow-hidden">
                 <Image 
                    src="/payment_methods.svg" 
                    alt="Supported Payment Methods" 
                    fill
                    className="object-contain"
                    unoptimized
                 />
              </div>
            </div>
            
          </motion.div>
        </div>

      </motion.div>

      {/* Bottom Bar (pushed to the very bottom, sitting on top of the illustration) */}
      <div className="w-full relative z-10 mt-16 md:mt-24 pb-8 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.7rem] text-white/50 font-medium">
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 order-2 md:order-1 text-center md:text-left">
            <p>© 2026 SANKARAN. All rights reserved.</p>
            <p className="hidden md:block">|</p>
            <p>Developed and designed by <a href="#" className="text-white hover:text-[var(--color-accent)] transition-colors font-bold tracking-wider">Asimovx Technologies AB</a></p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 order-1 md:order-2 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">Privacy Policy</a>
          </div>
          
        </div>
      </div>

    </footer>
  );
}
