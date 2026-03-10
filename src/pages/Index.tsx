import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GroupTrainingSection from "@/components/GroupTrainingSection";
import PersonalTrainingSection from "@/components/PersonalTrainingSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GroupTrainingSection />
        <PersonalTrainingSection />
        <GallerySection />
        <PricingSection />
        <ScheduleSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
