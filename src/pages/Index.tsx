import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import HowItWorks from "@/components/HowItWorks";
import ProductsSection from "@/components/ProductsSection";
import WhyIonic from "@/components/WhyIonic";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <StickyHeader />
    <main>
      <HeroSection />
      <ClientsSection />
      <ProblemSection />
      <SolutionsSection />
      <HowItWorks />
      <ProductsSection />
      <WhyIonic />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
