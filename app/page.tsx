import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedStrip } from "@/components/home/FeaturedStrip";
import { PerformanceSection } from "@/components/home/PerformanceSection";
import { ConciergeCta } from "@/components/home/ConciergeCta";
import { HeritageTeaser } from "@/components/home/HeritageTeaser";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedStrip />
      <PerformanceSection />
      <ConciergeCta />
      <HeritageTeaser />
    </main>
  );
}