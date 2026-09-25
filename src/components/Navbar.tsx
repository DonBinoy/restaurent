"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Check if scrolled past threshold for background change
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    
    // Hide on scroll down, show on scroll up
    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = ["STORY", "HALWA", "CRAFT", "ARCHIVE", "JOURNAL", "SHOP"];

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`sticky top-0 w-full z-50 transition-colors duration-300 border-b ${scrolled ? 'bg-[#0B57A5]/90 backdrop-blur-md border-white/10' : 'bg-[var(--color-primary)] border-transparent'}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center h-24">
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-4 text-white w-1/4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-20 h-20 md:w-24 md:h-24"
          >
            <Image 
              src="/shanakaran_logo.svg" 
              alt="Sankaran Logo" 
              fill
              className="object-contain"
            />
          </motion.div>
          <div className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-title text-xl md:text-2xl tracking-[0.2em] font-medium"
            >
              SANKARAN
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-sans text-[0.5rem] md:text-[0.6rem] tracking-[0.3em] opacity-70"
            >
              KOZHIKODE - EST. 1933
            </motion.span>
          </div>
        </Link>

        {/* Center Links */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
          }}
          className="hidden lg:flex justify-center gap-10 w-2/4"
        >
          {navLinks.map((item) => (
            <motion.div 
              key={item}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Icons */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
          }}
          className="hidden lg:flex justify-end items-center gap-6 text-white w-1/4"
        >
          <motion.button variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} whileHover={{ scale: 1.1 }} className="hover:text-white/70 transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </motion.button>
          <motion.button variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} whileHover={{ scale: 1.1 }} className="hover:text-white/70 transition-colors">
            <User size={18} strokeWidth={1.5} />
          </motion.button>
          <motion.button variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} whileHover={{ scale: 1.05 }} className="relative hover:text-white/70 transition-colors flex items-center">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <motion.span 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ delay: 1, type: "spring" }}
              className="absolute -top-1 -right-2 bg-white text-black text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
            >
              0
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="lg:hidden text-white"
        >
          <Menu size={24} />
        </motion.button>
      </div>
    </motion.nav>
  );
}
