import AppFooter from "../../components/layout/AppFooter";
import FeaturedShelfSection from "./dashboard/FlashSale";
import HeroSection from "./dashboard/HeroSection";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:bg-[#0f0f10]">
      <main>
        <HeroSection/>
        <FeaturedShelfSection/>
      </main>
      <AppFooter />
    </div>
  );
}

export default Landing;
