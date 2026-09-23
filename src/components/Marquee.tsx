"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const text = "TRADITIONAL CRAFT • AUTHENTIC TASTE • EST 1933 • KOZHIKODAN HALWA • ";
  const repeatedText = text.repeat(4);

  return (
    <div className="w-full bg-[var(--color-accent)] text-[var(--color-background)] py-4 overflow-hidden flex whitespace-nowrap border-y border-[#8e602e]">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 
        }}
        className="flex whitespace-nowrap"
      >
        <span className="font-serif text-2xl tracking-[0.2em] font-medium uppercase px-4">
          {repeatedText}
        </span>
        <span className="font-serif text-2xl tracking-[0.2em] font-medium uppercase px-4">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
