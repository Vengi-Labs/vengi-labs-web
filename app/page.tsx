import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import OurWork from "@/components/OurWork";
import WhyWeBuild from "@/components/WhyWeBuild";
import SupportTheWork from "@/components/SupportTheWork";
import HowWeWork from "@/components/HowWeWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/*
       * Figma layer order at page level:
       *   Nav bar  (y=16,  h=65.6) — sticky, 16 px from top
       *   Hero section (y=81.6)
       *   … remaining sections
       *
       * Both share the page's cream background (#fcf5ef) so they
       * appear visually connected.
       */}

      <NavBar />
      <HeroSection />

      <OurWork />
      <WhyWeBuild />
      <SupportTheWork />
      <HowWeWork />
      <Footer />
    </main>
  );
}
