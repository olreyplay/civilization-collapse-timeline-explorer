import { CivilizationPreview } from "@/components/home/CivilizationPreview";
import { HeroSection } from "@/components/home/HeroSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <HeroSection />
      <CivilizationPreview />
    </main>
  );
}
