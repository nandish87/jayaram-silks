import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Collections from "@/components/Collections";
import ServicesSection from "@/components/ServicesSection";
import AboutUs from "@/components/AboutUs";
import CraftsmanshipProcess from "@/components/CraftsmanshipProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import WholesaleSection from "@/components/WholesaleSection";
import GalleryMasonry from "@/components/GalleryMasonry";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import MonolithWatermark from "@/components/MonolithWatermark";
import brandConfig from "@config/brand.config";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-brand-bgCream relative selection:bg-brand-accentGold selection:text-white">
      {/* 1. Header with Logo, Navigation & Quick Contacts */}
      <Header />

      {/* 2. Hero Section with Real Saree Showcases & Direct Loom CTAs */}
      <Hero />

      {/* 3. Trust Strip with 5 Authenticity & Weaver Badges */}
      <TrustStrip />

      {/* 4. Filterable Collections & Products Grid + Product Detail Modal */}
      <Collections />

      {/* 5. Weaving & Manufacturing Services (Wholesale, Bridal, Video Call Selection) */}
      <ServicesSection />

      {/* 6. About Us: Family Weaver Heritage in Madanapalle */}
      <AboutUs />

      {/* 6. Handloom Craftsmanship Process (5-Step Visual Journey) */}
      <CraftsmanshipProcess />

      {/* 7. Why Choose Us: Direct Loom Benefits & Savings */}
      <WhyChooseUs />

      {/* 8. Wholesale Supply, Bulk Packs & Enquiry Form */}
      <WholesaleSection />

      {/* 9. Real Loom Saree Gallery & Interactive Lightbox */}
      <GalleryMasonry />

      {/* 10. Verified Patron Testimonials */}
      <Testimonials />

      {/* 11. Contact & Showroom Visit with Google Maps Embed & Directions */}
      <ContactSection />

      {/* 12. Footer with Brand Info, Socials & Re-Brandable Notice */}
      <Footer />

      {/* 13. Floating Mobile WhatsApp & Call Action Buttons */}
      <FloatingActions />

      {/* 14. Monolith Agency Watermark Badge */}
      <MonolithWatermark />
    </main>
  );
}

