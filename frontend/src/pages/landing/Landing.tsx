import Footer from "../../components/layout/Footer";
import HeroSection from "./sections/HeroSection";
import FlashSale from "./sections/FlashSale";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:bg-[#0f0f10]">
      <main>
        <HeroSection/>
        <FlashSale/>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
