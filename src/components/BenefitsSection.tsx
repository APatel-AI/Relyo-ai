import { CheckCircle2, Users, Brain, Layout } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Stay on top of every responsibility",
      description: "Appointments, tasks, documents, dates—finally organized and easy to track.",
    },
    {
      icon: Users,
      title: "All the little things, remembered for you",
      description: "No more digging through texts, emails, or notebooks to recall what happened when.",
    },
    {
      icon: Brain,
      title: "AI that keeps you ahead",
      description: "Smart reminders and insights so nothing slips through the cracks.",
    },
    {
      icon: Layout,
      title: "A single place to track all your family responsibilities",
      description: "Clean, calm, and built for people who carry the mental load.",
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
