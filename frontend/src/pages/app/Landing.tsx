import Recommended from "./dashboard/Recommended";
import Kategori from "./dashboard/Kategori";
import WhyChooseUs from "./dashboard/WhyChooseUs";
import Subscription from "./dashboard/Subscription";
import Testimonials from "./dashboard/Testimonials";
import FAQ from "./dashboard/FAQ";
import Footer from "../../components/layout/Footer";
function Landing() {
  return (
    <div className="min-h-screen bg-(--background) dark:bg-[#0f0f10]">
      <main>
        <Recommended/>
        <Kategori/>
        <WhyChooseUs/>
        <Subscription/>
        <Testimonials/>
        <FAQ/>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
