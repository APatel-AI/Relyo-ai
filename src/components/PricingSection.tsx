import { Check, Minus } from "lucide-react";
import { useState } from "react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const pricingTiers = [
    {
      name: "Free",
      price: { monthly: 0, annual: 0 },
      features: [
        "Smart Calendar Dashboard",
        "Basic reminders & notifications",
        "Category tags",
        "Quick search",
        "Light AI assistant"
      ]
    },
    {
      name: "Pro",
      price: { monthly: 9, annual: 7 },
      highlight: true,
      features: [
        "Unlimited AI assistant",
        "Smart suggestions & insights",
        "Auto-tagging & categorization",
        "Upload screenshots/PDFs",
        "Advanced calendar views"
      ]
    },
    {
      name: "Household",
      price: { monthly: 19, annual: 15 },
      features: [
        "Shared calendars for families",
        "Role-based access",
        "Family analytics",
        "Shared priority inbox",
        "Custom permissions"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#E8E8E8]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Billing Toggle */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full p-1.5 shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-black text-white"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                billingCycle === "annual"
                  ? "bg-black text-white"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Subheading */}
        <p className="text-center text-gray-500 text-sm mb-12">
          Early adopters get 50% off all plans — limited to the first 30 users.
        </p>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-[1100px] mx-auto items-center justify-center">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded relative flex flex-col w-1/2 lg:w-[370px] p-10 transition-all ${
                tier.highlight
                  ? "bg-black text-white shadow-2xl"
                  : "bg-white text-black shadow-lg"
              }`}
            >
              {/* Plan Name */}
              <h3 className="text-3xl font-semibold mb-6">
                {tier.name}
              </h3>

              {/* Divider */}
              <div className={`border-t ${tier.highlight ? 'border-gray-700' : 'border-gray-200'} mb-8`}></div>

              {/* Features */}
              <div className="flex-grow mb-10 space-y-5">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlight ? 'text-white' : 'text-black'}`} strokeWidth={2.5} />
                    <span className="text-base leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className={`border-t ${tier.highlight ? 'border-gray-700' : 'border-gray-200'} mb-8`}></div>

              {/* Price */}
              <div className="overflow-hidden">
                <div className="flex items-baseline gap-1">
                  <span
                    key={billingCycle}
                    className="text-5xl font-bold animate-in fade-in slide-in-from-top-2 duration-300"
                  >
                    ${tier.price[billingCycle]}
                  </span>
                  <span className={`text-lg transition-all duration-300 ${tier.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    / month
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
