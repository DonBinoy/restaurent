"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Star, Plus, Minus, ChevronRight, Truck, ShieldCheck, Leaf, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, use } from "react";

// Mock Database matching Products.tsx
const productsDB = [
  { id: "traditional-red-halwa", name: "Traditional Red Halwa", desc: "The original. Timeless.", weight: "500g", price: 320, image: "/halwa_red.png", category: "Halwa" },
  { id: "black-halwa", name: "Black Halwa", desc: "Rich. Bold. Unforgettable.", weight: "500g", price: 340, image: "/halwa_black.png", category: "Halwa" },
  { id: "banana-halwa", name: "Banana Halwa", desc: "A classic with a twist.", weight: "500g", price: 320, image: "/halwa_banana.png", category: "Halwa" },
  { id: "tender-coconut-halwa", name: "Tender Coconut Halwa", desc: "A modern flavour.", weight: "500g", price: 360, image: "/halwa_coconut.png", category: "Halwa" },
  { id: "dry-fruit-halwa", name: "Dry Fruit Halwa", desc: "For those who love more.", weight: "500g", price: 420, image: "/halwa_dryfruit.png", category: "Halwa" },
  { id: "pineapple-halwa", name: "Pineapple Halwa", desc: "Fruity. Fresh. Familiar.", weight: "500g", price: 340, image: "/halwa_pineapple.png", category: "Halwa" },
  { id: "mango-halwa", name: "Mango Halwa", desc: "Summer in a bite.", weight: "500g", price: 360, image: "/halwa_pineapple.png", category: "Halwa" },
  { id: "dates-halwa", name: "Dates Halwa", desc: "Naturally sweetened richness.", weight: "500g", price: 380, image: "/halwa_black.png", category: "Halwa" },
  { id: "kerala-mixture", name: "Kerala Mixture", desc: "Crispy, spicy, and irresistible.", weight: "400g", price: 180, image: "/products/mixture.png", category: "Snacks" },
  { id: "jackfruit-chips", name: "Jackfruit Chips", desc: "Authentic Kerala crunch.", weight: "250g", price: 220, image: "/products/jackfruit-chips.png", category: "Chips" },
  { id: "achappam", name: "Achappam", desc: "Traditional rose cookies.", weight: "200g", price: 150, image: "/products/achappam.png", category: "Cookies" },
  { id: "pakkavada", name: "Pakkavada", desc: "Crispy ribbon pakoda.", weight: "300g", price: 160, image: "/products/pakkavada.png", category: "Snacks" },
  { id: "butter-cookies", name: "Butter Cookies", desc: "Melt in your mouth goodness.", weight: "250g", price: 200, image: "/products/cookies.png", category: "Cookies" },
  { id: "murukku", name: "Murukku", desc: "Crunchy spiral savory snack.", weight: "300g", price: 150, image: "/products/murukk.png", category: "Snacks" },
  { id: "assorted-halwa-pack", name: "Assorted Halwa Pack", desc: "A bit of everything.", weight: "1kg", price: 750, image: "/products/halwa-pack.png", category: "Gifts" },
];

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [qty, setQty] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("500g");
  const [activeTab, setActiveTab] = useState("description");
  
  const product = productsDB.find(p => p.id === resolvedParams.id) || {
    name: resolvedParams.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    price: 999,
    image: "/halwa_red.png",
    desc: "A premium treat from Sankaran Bakery.",
    weight: "500g",
    category: "Specialty"
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="pt-28 pb-4 max-w-[1200px] mx-auto px-6 w-full">
        <div className="flex flex-wrap items-center gap-y-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2 flex-shrink-0" />
          <Link href="/#halwa" className="hover:text-black transition-colors">{product.category}</Link>
          <ChevronRight size={14} className="mx-2 flex-shrink-0" />
          <span className="text-black font-bold">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-24 w-full flex flex-col md:flex-row gap-8 lg:gap-20">
        
        {/* LEFT COLUMN: Image Gallery */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 relative md:sticky md:top-28 h-max z-10">
          {/* Main Image */}
          <div className="w-full aspect-square bg-[#F9F9F9] rounded-2xl flex items-center justify-center p-4 md:p-8 border border-gray-100 relative group overflow-hidden">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-contain drop-shadow-xl p-8 md:p-12 transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {[product.image, product.image, product.image].map((img, i) => (
              <div key={i} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl relative border-2 flex items-center justify-center p-2 cursor-pointer transition-colors ${i === 0 ? 'border-[var(--color-primary)] bg-white' : 'border-transparent bg-[#F9F9F9] hover:border-gray-300'}`}>
                 <Image src={img} alt={`Thumbnail ${i+1}`} fill className="object-contain p-2 drop-shadow-md" />
              </div>
            ))}
          </div>
        </div>
        
        {/* RIGHT COLUMN: Product Info */}
        <div className="w-full md:w-1/2 flex flex-col pt-4 md:pt-0 relative z-20">
          
          <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-3">
            {product.name}
          </h1>
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-medium text-gray-500 underline cursor-pointer hover:text-black">128 Reviews</span>
          </div>
          
          <div className="mb-6">
            <p className="text-3xl font-bold text-gray-900 mb-1">₹ {product.price}</p>
            <p className="text-xs text-gray-500 font-medium">Inclusive of all taxes</p>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            {product.desc} Baked to perfection using traditional wood-fired methods passed down through generations. Made with 100% pure country ghee for an unforgettable, rich experience.
          </p>

          <hr className="border-gray-100 mb-8" />

          {/* Size / Weight Selector */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Select Weight</h3>
            <div className="flex flex-wrap gap-3">
              {['250g', '500g', '1kg'].map(w => (
                <button 
                  key={w}
                  onClick={() => setSelectedWeight(w)}
                  className={`px-5 py-2.5 md:px-6 md:py-3 rounded-lg border text-sm font-bold transition-all ${selectedWeight === w ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-gray-200 text-gray-600 hover:border-gray-400'}`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Actions (Qty + Buttons) */}
          <div className="flex flex-col gap-4 mb-10 w-full">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <div className="flex items-center justify-between border border-gray-300 rounded-lg h-12 md:h-14 px-2 md:px-4 w-full sm:w-32 flex-shrink-0">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="flex items-center justify-center text-gray-600 hover:text-black p-2 h-full"><Minus size={18} /></button>
                <span className="w-8 text-center font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="flex items-center justify-center text-gray-600 hover:text-black p-2 h-full"><Plus size={18} /></button>
              </div>
              
              <button className="w-full sm:flex-1 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] h-12 md:h-14 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <ShoppingBag size={18} /> Add To Cart
              </button>
            </div>
            
            <button className="w-full bg-[var(--color-primary)] text-white h-12 md:h-14 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[#031d3a] transition-colors shadow-lg">
              Buy It Now
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-gray-100">
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Leaf size={24} className="text-green-600" />
              <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">100% Veg</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <ShieldCheck size={24} className="text-[#A8763E]" />
              <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Pure Ghee</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Truck size={24} className="text-[var(--color-primary)]" />
              <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Pan India</span>
            </div>
          </div>

          {/* Product Accordions / Tabs */}
          <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden">
            <div className="border-b border-gray-200">
              <button 
                className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setActiveTab(activeTab === 'desc' ? '' : 'desc')}
              >
                Product Details
                <ChevronDown size={16} className={`transition-transform ${activeTab === 'desc' ? 'rotate-180' : ''}`} />
              </button>
              {activeTab === 'desc' && (
                <div className="p-4 text-sm text-gray-600 leading-relaxed bg-white">
                  Crafted using a 90-year-old traditional recipe, this halwa offers a rich, melt-in-the-mouth experience. Perfect for festive gifting or a personal sweet craving.
                </div>
              )}
            </div>
            <div className="border-b border-gray-200">
              <button 
                className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setActiveTab(activeTab === 'ing' ? '' : 'ing')}
              >
                Ingredients & Shelf Life
                <ChevronDown size={16} className={`transition-transform ${activeTab === 'ing' ? 'rotate-180' : ''}`} />
              </button>
              {activeTab === 'ing' && (
                <div className="p-4 text-sm text-gray-600 leading-relaxed bg-white">
                  <strong>Ingredients:</strong> Wheat Extract, Pure Country Ghee, Sugar, Cashew Nuts, Cardamom.<br/><br/>
                  <strong>Shelf Life:</strong> 30 Days from date of manufacturing. Store in a cool, dry place.
                </div>
              )}
            </div>
            <div>
              <button 
                className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setActiveTab(activeTab === 'ship' ? '' : 'ship')}
              >
                Shipping & Returns
                <ChevronDown size={16} className={`transition-transform ${activeTab === 'ship' ? 'rotate-180' : ''}`} />
              </button>
              {activeTab === 'ship' && (
                <div className="p-4 text-sm text-gray-600 leading-relaxed bg-white">
                  Orders are dispatched within 24 hours. Delivered across India within 3-5 business days. Due to the perishable nature of the product, returns are not accepted unless the package arrives damaged.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
