import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ReelsCarousel from "@/components/ReelsCarousel";
import FeaturedHampers from "@/components/FeaturedHampers";
import Products from "@/components/Products";
import SpecialOfferBanner from "@/components/SpecialOfferBanner";
import Testimonials from "@/components/Testimonials";
import TextReviews from "@/components/TextReviews";
import Recipes from "@/components/Recipes";
import Heritage from "@/components/Heritage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <ReelsCarousel />
        <FeaturedHampers />
        <SpecialOfferBanner />
        <Testimonials />
        <TextReviews />
        <Recipes />
        <Heritage />
      </main>
      <Footer />
    </>
  );
}
