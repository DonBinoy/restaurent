"use client";

import Image from "next/image";

const categories = [
  { name: "Sugar Free", image: "/halwa_red.png" },
  { name: "Festive", image: "/halwa_black.png" },
  { name: "Dry Fruits", image: "/halwa_dryfruit.png" },
  { name: "Savouries", image: "/product_jalebi.png" },
  { name: "Gift Box", image: "/sankaran_box.png" },
  { name: "Assorted", image: "/halwa_coconut.png" },
];

export default function Categories() {
  return (
    <section className="bg-[#FFFEF0] py-8 md:py-12 border-b border-[#0B57A5]/10 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Title Area */}
        <div className="flex-shrink-0 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-serif text-[#1E1B16] font-bold">
            Shop by Category
          </h2>
          <div className="w-12 h-[2px] bg-[#0B57A5] mx-auto md:mx-0 mt-3"></div>
        </div>

        {/* Categories Row */}
        <div className="flex overflow-x-auto gap-4 md:gap-8 w-full pb-2 pt-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer flex-shrink-0 min-w-[90px]"
            >
              {/* Circular Image Container */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#0B57A5]/20 bg-white flex items-center justify-center mb-3 transition-all duration-300 shadow-sm group-hover:border-[#0B57A5] group-hover:shadow-md group-hover:bg-[#F1E9D6]">
                
                <div className="relative w-16 h-16 md:w-20 md:h-20 z-10 transition-transform duration-300 group-hover:scale-110 rounded-full overflow-hidden flex items-center justify-center bg-white mix-blend-multiply">
                  <Image 
                    src={cat.image || "/halwa_box.png"}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Label */}
              <h3 className="font-sans text-xs md:text-sm font-bold text-gray-800 text-center group-hover:text-[#0B57A5] transition-colors leading-tight">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
