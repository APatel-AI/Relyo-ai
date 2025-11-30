import { Hero } from "./components/Hero";
import { PreviewSection } from "./components/PreviewSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { SecondaryCTA } from "./components/SecondaryCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PreviewSection />
      <BenefitsSection />
      <SecondaryCTA />
    </div>
  );
}
