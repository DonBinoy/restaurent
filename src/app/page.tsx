import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReelsCarousel from "@/components/ReelsCarousel";
import FeaturedHampers from "@/components/FeaturedHampers";
import Categories from "@/components/Categories";
import SpecialOffer from "@/components/SpecialOffer";
import Products from "@/components/Products";
import GiftingBanner from "@/components/GiftingBanner";
import Testimonials from "@/components/Testimonials";
import TextReviews from "@/components/TextReviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <FeaturedHampers />
        <SpecialOffer />
        <ReelsCarousel />
        <GiftingBanner />
        <Testimonials />
        <TextReviews />
      </main>
      <Footer />
    </>
  );
}
