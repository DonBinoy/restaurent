"use client";

import Image from "next/image";

const people = [
  { id: 1, name: "Arun Vijay", image: "/test_1.png" },
  { id: 2, name: "Sneha Reddy", image: "/test_2.png" },
  { id: 3, name: "Kiran Kumar", image: "/test_1.png" },
  { id: 4, name: "Deepa Menon", image: "/test_2.png" },
  { id: 5, name: "Rahul Sharma", image: "/test_1.png" },
  { id: 6, name: "Priya Das", image: "/test_2.png" },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900 via-[var(--color-primary)] to-[var(--color-primary)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-2">
          They&apos;re talking about <span className="text-[var(--color-accent)]">Sankaran Bakery</span>
        </h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-10">
          The perfect choice for every celebration
        </p>
        
        {/* Profile Avatars Row */}
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap mb-12">
          {people.map((person) => (
            <div key={person.id} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border-2 border-[var(--color-accent)] overflow-hidden relative">
                <Image src={person.image || "/ingredients.png"} alt={person.name} fill className="object-cover" />
              </div>
              <span className="text-white/80 text-[9px] font-medium uppercase tracking-wider">{person.name}</span>
            </div>
          ))}
        </div>

        {/* Video Overlays (Mocking the overlapping video cards) */}
        <div className="relative h-[300px] md:h-[400px] flex justify-center items-center mt-8">
          
          <div className="absolute left-1/4 md:left-[15%] w-[200px] h-[250px] md:w-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl -rotate-6 z-10 opacity-60">
             <Image src="/test_1.png" alt="Review" fill className="object-cover" />
          </div>
          
          <div className="absolute w-[220px] h-[280px] md:w-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl z-30 border-4 border-[var(--color-primary)]">
             <Image src="/hero_sweets.png" alt="Review" fill className="object-cover" />
             <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-black border-b-8 border-b-transparent ml-1"></div>
             </div>
          </div>
          
          <div className="absolute right-1/4 md:right-[15%] w-[200px] h-[250px] md:w-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl rotate-6 z-20 opacity-60">
             <Image src="/test_2.png" alt="Review" fill className="object-cover" />
          </div>

        </div>

      </div>
    </section>
  );
}
