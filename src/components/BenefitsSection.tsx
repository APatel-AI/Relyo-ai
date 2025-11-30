import { CheckCircle2, Users, Brain, Layout } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Stay on top of every responsibility",
      description: "Never miss a deadline, appointment, or important task again",
    },
    {
      icon: Users,
      title: "Keep your family effortlessly in sync",
      description: "Everyone knows what's happening and what needs to be done",
    },
    {
      icon: Brain,
      title: "AI that remembers what you can't",
      description: "Get intelligent reminders and insights about your schedule",
    },
    {
      icon: Layout,
      title: "Your life in a single organized space",
      description: "One beautiful dashboard for everything that matters",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <benefit.icon className="w-10 h-10 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg text-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-[#8E8E8E] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-[#E5E5E5]" />
      </div>
    </section>
  );
}
