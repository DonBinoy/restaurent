import Navbar from "@/components/Navbar";
import Heritage from "@/components/Heritage";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Sankaran Kozhikode Halwa",
  description: "Discover the legacy and story of Sankaran Bakery since 1933.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-[var(--color-background)]">
        <Heritage />
      </main>
      <Footer />
    </>
  );
}
