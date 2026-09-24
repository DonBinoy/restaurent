"use client";

import { Star } from "lucide-react";

const reviews = [
  { id: 1, title: "Authentic Taste", text: "The best halwa I have ever had. The texture and the sweetness are just perfect. Reminds me of my childhood.", author: "Rajiv M.", date: "Oct 12, 2023" },
  { id: 2, title: "Perfect for Gifting", text: "Ordered the festive hamper for Diwali and everyone loved it. The packaging is premium and the taste is unmatched.", author: "Sunita K.", date: "Nov 05, 2023" },
  { id: 3, title: "Melt in Mouth", text: "Absolutely brilliant. The pure ghee shines through every bite. Will definitely be ordering again soon.", author: "Vikram P.", date: "Jan 18, 2024" },
  { id: 4, title: "Sugar-free is amazing", text: "Finally a great tasting traditional sweet for diabetics. Doesn't compromise on the authentic Kozhikode flavour.", author: "Meena R.", date: "Feb 22, 2024" },
];

export default function TextReviews() {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-sans text-gray-900 mb-2">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
             <span>4.9/5 Average Rating</span>
             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
             <span>Based on 10,000+ Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#fafafa] p-6 rounded-lg border border-gray-100 flex flex-col h-full">
              <div className="flex text-[var(--color-accent)] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{review.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-6 flex-grow italic">
                &quot;{review.text}&quot;
              </p>
              <div className="flex justify-between items-center text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                <span>{review.author}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
