import { Hero } from "./components/Hero";
// import { PricingSection } from "./components/PricingSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { SecondaryCTA } from "./components/SecondaryCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      {/* <PricingSection /> */}
      <BenefitsSection />
      <SecondaryCTA />
    </div>
  );
}
