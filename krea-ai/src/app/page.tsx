import Header from "../components/Header";
import FeaturedCarousel from "../components/FeaturedCarousel";
import GenerateTools from "../components/GenerateTools";
import LegalPricingLinks from "../components/LegalPricingLinks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8">
        <FeaturedCarousel />
        <GenerateTools />
        <LegalPricingLinks />
      </main>
      <Footer />
    </div>
  );
}
