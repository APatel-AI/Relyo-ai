import { Users, FileText, Calendar, Sparkles, MessageCircle, FolderOpen, Share2, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { useState } from "react";

export function BenefitsSection() {
  const useCases = [
    {
      icon: Users,
      title: "Manage Multiple Family Profiles",
      description: "Keep each family member's health information separate but easy to navigate. Switch between profiles to view notes, appointments, medications, and updates instantly.",
    },
    {
      icon: FileText,
      title: "Track Health Logs Effortlessly",
      description: "Record symptoms, behaviors, mood changes, and daily observations. Everything stays timestamped and easy to refer back to during appointments.",
    },
    {
      icon: Calendar,
      title: "Stay on Top of Appointments",
      description: "See all upcoming doctor visits, therapies, and checkups in one clean schedule. No more forgetting what's next or who needs to be where.",
    },
    {
      icon: Sparkles,
      title: "Prepare for Appointments With AI Guidance",
      description: "Unsure what to ask the doctor? Relyo's AI helps you prepare questions, understand symptoms, and know what documents or information to bring.",
    },
    {
      icon: MessageCircle,
      title: "Ask Health-Related Questions Anytime",
      description: "Use the built-in AI chat to clarify confusing medical terms, draft messages for nurses, get help summarizing concerns, and form clear, confident questions for specialists.",
    },
    {
      icon: FolderOpen,
      title: "Keep Documents & Notes in One Place",
      description: "Upload lab results, visit summaries, forms, and discharge notes. Relyo organizes it all by person and date so you never lose track again.",
    },
    {
      icon: Share2,
      title: "Share Updates With Family Members",
      description: "Easily keep loved ones informed by exporting notes or sharing summaries — without oversharing private details.",
    },
    {
      icon: Heart,
      title: "Reduce Stress & Mental Load",
      description: "Relyo takes care of the tracking, organizing, and remembering — so you can focus more on caregiving and less on chaos.",
    },
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Built for Caregivers Who Support Many
          </h2>
          <p className="text-lg text-[#8E8E8E] max-w-2xl mx-auto">
            Because you shouldn't have to manage it all alone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-[#E5E5E5]" />
      </div>
    </section>
  );
}

function UseCaseCard({ useCase }: { useCase: { icon: any; title: string; description: string } }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover:shadow-lg transition-all duration-300 border-gray-200 cursor-pointer p-6"
      style={{
        backgroundColor: isHovered ? '#000' : '#fff',
      }}
    >
      <CardHeader className="p-0">
        <div className="mb-4">
          <useCase.icon
            className="w-8 h-8 transition-colors duration-300"
            strokeWidth={1.5}
            style={{ color: isHovered ? '#fff' : '#000' }}
          />
        </div>
        <CardTitle
          className="text-lg font-semibold transition-colors duration-300 mb-3"
          style={{ color: isHovered ? '#fff' : '#000' }}
        >
          {useCase.title}
        </CardTitle>
        <CardDescription
          className="text-sm transition-colors duration-300 leading-relaxed"
          style={{ color: isHovered ? '#fff' : '#8E8E8E' }}
        >
          {useCase.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
