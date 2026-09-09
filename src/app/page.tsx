import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import GallerySection from "@/components/GallerySection";
import HomepageTeam from "@/components/HomepageTeam";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import GetInTouch from "@/components/GetInTouch";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import LoadingCurtain from "@/components/LoadingCurtain";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans relative">
      <ScrollProgressBar />
      <LoadingCurtain />
      <Header />
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <FeaturedProjects />
      <Process />
      <GallerySection />
      <HomepageTeam />
      <Testimonials />
      <FAQSection />
      <GetInTouch />
      <Newsletter />
      <Footer />
    </main>
  );
}
