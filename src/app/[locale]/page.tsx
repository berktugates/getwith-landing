import { Footer } from "@/components/ui/common/Footer";
import { Navbar } from "@/components/ui/common/Navbar";
import { HeroSection } from "@/components/ui/home/HeroSection";
import { MarqueeC } from "@/components/ui/home/Marquee";
import { Pricing } from "@/components/ui/home/Pricing";
import { Card } from "@/components/ui/card";
import Image from "next/image";

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
          <div id="features" className="my-6">
            <h1 className="text-white text-2xl md:text-4xl text-center">
              Features
              <div
                id="feature-cards"
                className="grid md:grid-cols-2 mt-6 gap-y-4 md:gap-y-0 md:gap-x-4"
              >
                <Card className="flex items-center bg-black border border-white">
                  <Image
                    src={"/home/first_mockup.png"}
                    className="object-cover"
                    width={200}
                    height={50}
                    alt="first-mockup"
                  />
                </Card>
                <Card className="flex items-center bg-black border border-white">
                  <Image
                    src={"/home/second_mockup.png"}
                    className="object-cover"
                    width={200}
                    height={50}
                    alt="first-mockup"
                  />
                </Card>
              </div>
            </h1>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
