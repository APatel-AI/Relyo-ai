import { Calendar, Users, MessageSquare } from "lucide-react";

export function PreviewSection() {
  return (
    <section className="px-6 py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Stacked Feature Previews */}
        <div className="space-y-16">
          {/* Feature 1: Calendar Dashboard */}
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-10 md:p-14 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-black" strokeWidth={1.5} />
              <h3 className="text-2xl text-black">Calendar Dashboard</h3>
            </div>
            <p className="text-[#8E8E8E] leading-relaxed max-w-3xl">
              A clean calendar that shows every responsibility at a glance, with color-coded family events, medical occurrences, and important reminders.
            </p>
          </div>

          {/* Feature 2: Family Profiles */}
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-10 md:p-14 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-black" strokeWidth={1.5} />
              <h3 className="text-2xl text-black">Family Profiles</h3>
            </div>
            <p className="text-[#8E8E8E] leading-relaxed max-w-3xl">
              Create detailed profiles for every family member, complete with roles, notes, tags, and shared visibility.
            </p>
          </div>

          {/* Feature 3: AI Chat Interface */}
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-10 md:p-14 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-black" strokeWidth={1.5} />
              <h3 className="text-2xl text-black">AI Chat Interface</h3>
            </div>
            <p className="text-[#8E8E8E] leading-relaxed max-w-3xl">
              Ask questions and get instant answers about your family's schedule, medical history, and upcoming responsibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}