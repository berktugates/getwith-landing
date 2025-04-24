import { Footer } from "@/components/ui/common/Footer";
import { Navbar } from "@/components/ui/common/Navbar";
import { Features } from "@/components/ui/home/Features";
import { HeroSection } from "@/components/ui/home/HeroSection";
import { MarqueeC } from "@/components/ui/home/Marquee";
import { Pricing } from "@/components/ui/home/Pricing";

export default function Home() {
  return (
    <>
      <div
        id="root"
        className="py-4 px-6 md:max-w-xl md:mx-auto md:px-0 lg:max-w-4xl"
      >
        <Navbar />
        <main id="main">
          <HeroSection />
          <MarqueeC />
          <Pricing />
          <Features />
          <Footer />
        </main>
      </div>
    </>
  );
}
