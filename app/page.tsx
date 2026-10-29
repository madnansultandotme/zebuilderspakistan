import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { CommunityIntro } from "@/components/landing/CommunityIntro";
import { FocusAreas } from "@/components/landing/FocusAreas";
import { NetworkSection } from "@/components/landing/NetworkSection";
import { PurposeVision } from "@/components/landing/PurposeVision";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { FloatingSocials } from "@/components/shared/FloatingSocials";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingSocials />
      <main id="main-content">
        <Hero />
        <CommunityIntro />
        <FocusAreas />
        <NetworkSection />
        <PurposeVision />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
