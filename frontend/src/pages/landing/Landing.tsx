import GuestHeader from "../../components/layout/GuestHeader";
import Footer from "../../components/layout/Footer";
import FeaturedShelfSection from "./sections/FeaturedShelfSection";
import HeroSection from "./sections/HeroSection";
import HighlightsSection from "./sections/HighlightsSection";
import PricingSection from "./sections/PricingSection";
import RitualSection from "./sections/RitualSection";
import TestimonialsSection from "./sections/TestimonialsSection";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <GuestHeader />
      <main>
        <HeroSection />
        <FeaturedShelfSection />
        <HighlightsSection />
        <RitualSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
