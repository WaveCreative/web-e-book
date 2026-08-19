import Footer from "../../components/layout/Footer";
import HeroSection from "./sections/HeroSection";
// import FlashSale from "./sections/Populer";
import Kategori from "./sections/Kategori";
import TrandingBooks from "./sections/TrandingBooks";
import WhyChooseUs from "./sections/WhyChooseUs";
import Subscription from "./sections/Subscription";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";

function Landing() {
  return (
    <div className="min-h-screen bg-(--background)">
      <main>
        <HeroSection/>
        <Kategori/>
        <TrandingBooks/>
        <WhyChooseUs/>
        <Subscription/>
        <Testimonials/>
        <FAQ/>
        {/* <FlashSale/> */}
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
