import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import SpecialOfferSection from "@/components/special-offer-section"
import WorkSection from "@/components/work-section"
import IndustriesSection from "@/components/industries-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ThreeBackground from "@/components/three-background"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ThreeBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecialOfferSection />
        <WorkSection />
        <IndustriesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
