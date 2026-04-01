import GuestHeader from "../../components/layout/GuestHeader";
import Footer from "../../components/layout/Footer";
import FeaturedShelfSection from "./sections/FeaturedShelfSection";
import HeroSection from "./sections/HeroSection";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:bg-[#0f0f10]">
      <GuestHeader />
      <main>
        <HeroSection />
        <FeaturedShelfSection />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
