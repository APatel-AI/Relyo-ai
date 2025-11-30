import { Calendar, Users, MessageSquare } from "lucide-react";

export function PreviewSection() {
  return (
    <section className="px-6 py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-black mb-4">
            How Relyo Works
          </h2>
          <p className="text-[#8E8E8E]">
            Everything you need to keep your family organized
          </p>
        </div>

        {/* Stacked Feature Previews */}
        <div className="space-y-16">
          {/* Feature 1: Calendar Dashboard */}
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-10 md:p-14 shadow-sm">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-black" strokeWidth={1.5} />
                <h3 className="text-2xl text-black">Calendar Dashboard</h3>
              </div>
              <p className="text-[#8E8E8E] leading-relaxed max-w-3xl">
                A clean calendar that shows every responsibility at a glance, with color-coded family events, medical occurrences, and important reminders.
              </p>
            </div>

            {/* Calendar Mockup */}
            <div className="flex flex-col xl:flex-row gap-8">
              {/* Left Sidebar - Filters */}
              <div className="xl:w-30space-y-8">
                <div>
                  <div className="text-xs text-[#8E8E8E] mb-4">Family Members</div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <span className="w-3 h-3 rounded-full bg-[#4CAF50]"></span>
                      <span className="text-sm text-[#2C2C2C]">Sarah</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <span className="w-3 h-3 rounded-full bg-[#2196F3]"></span>
                      <span className="text-sm text-[#2C2C2C]">John</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <span className="w-3 h-3 rounded-full bg-[#FF9800]"></span>
                      <span className="text-sm text-[#2C2C2C]">Emma</span>
                    </label>
                  </div>
                </div>

                <div className="border-t border-[#E5E5E5] pt-8">
                  <div className="text-xs text-[#8E8E8E] mb-4">Event Types</div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <span className="text-sm text-[#2C2C2C]">Health</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <span className="text-sm text-[#2C2C2C]">Appointments</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <span className="text-sm text-[#2C2C2C]">School</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <span className="text-sm text-[#2C2C2C]">Bills</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="flex-1 border border-[#E5E5E5] rounded-lg p-8 bg-white">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-xl text-black">December 2025</h4>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 text-sm text-[#8E8E8E] hover:text-black hover:bg-[#F6F6F6] rounded transition-colors">←</button>
                    <button className="px-4 py-2 text-sm text-[#8E8E8E] hover:text-black hover:bg-[#F6F6F6] rounded transition-colors">→</button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {/* Day Headers */}
                  {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, i) => (
                    <div key={i} className="text-xs text-[#8E8E8E] text-center py-3">
                      {day}
                    </div>
                  ))}
                  
                  {/* Calendar Days */}
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 1;
                    const isValidDay = day >= 0 && day < 31;
                    const dayNum = day + 1;
                    
                    return (
                      <div
                        key={i}
                        className={`min-h-32 p-3 border border-[#E5E5E5] rounded-md ${
                          !isValidDay ? "bg-[#FAFAFA]" : "bg-white hover:bg-[#F6F6F6] cursor-pointer transition-colors"
                        }`}
                      >
                        {isValidDay && (
                          <>
                            <div className="text-sm text-[#2C2C2C] mb-2">{dayNum}</div>
                            <div className="space-y-1.5">
                              {dayNum === 8 && (
                                <>
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#F44336] flex-shrink-0"></span>
                                    <span className="text-xs text-[#2C2C2C] leading-tight truncate">Seizure event</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#4CAF50] flex-shrink-0"></span>
                                    <span className="text-xs text-[#2C2C2C] leading-tight truncate">Follow-up call</span>
                                  </div>
                                </>
                              )}
                              {dayNum === 15 && (
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-[#4CAF50] flex-shrink-0"></span>
                                  <span className="text-xs text-[#2C2C2C] leading-tight truncate">Dentist – Sarah</span>
                                </div>
                              )}
                              {dayNum === 20 && (
                                <>
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#2196F3] flex-shrink-0"></span>
                                    <span className="text-xs text-[#2C2C2C] leading-tight truncate">Rx pickup</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#9C27B0] flex-shrink-0"></span>
                                    <span className="text-xs text-[#2C2C2C] leading-tight truncate">Bill payment</span>
                                  </div>
                                </>
                              )}
                              {dayNum === 24 && (
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-[#FF9800] flex-shrink-0"></span>
                                  <span className="text-xs text-[#2C2C2C] leading-tight truncate">School event</span>
                                </div>
                              )}
                              {dayNum === 12 && (
                                <>
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#2196F3] flex-shrink-0"></span>
                                    <span className="text-xs text-[#2C2C2C] leading-tight truncate">Team meeting</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#FF9800] flex-shrink-0"></span>
                                    <span className="text-xs text-[#2C2C2C] leading-tight truncate">Parent-teacher</span>
                                  </div>
                                  <div className="text-xs text-[#8E8E8E] leading-tight">+ 1 more</div>
                                </>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Sidebar - Upcoming Events */}
              <div className="xl:w-50 space-y-4">
                <div className="text-xs text-[#8E8E8E] mb-4">Upcoming Events</div>
                <div className="space-y-3">
                  <div className="border border-[#E5E5E5] rounded-lg p-4 bg-white hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                    <div className="text-xs text-[#8E8E8E] mb-2">Dec 15 • 2:30 PM</div>
                    <div className="text-sm text-[#2C2C2C] mb-2">Dentist – Sarah</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#4CAF50]"></span>
                      <span className="px-2 py-0.5 bg-[#E8F5E9] text-[#2E7D32] text-xs rounded">Health</span>
                    </div>
                  </div>
                  <div className="border border-[#E5E5E5] rounded-lg p-4 bg-white hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                    <div className="text-xs text-[#8E8E8E] mb-2">Dec 20 • 10:00 AM</div>
                    <div className="text-sm text-[#2C2C2C] mb-2">Rx pickup</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#2196F3]"></span>
                      <span className="px-2 py-0.5 bg-[#E3F2FD] text-[#1565C0] text-xs rounded">Appointment</span>
                    </div>
                  </div>
                  <div className="border border-[#E5E5E5] rounded-lg p-4 bg-white hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                    <div className="text-xs text-[#8E8E8E] mb-2">Dec 24 • 6:00 PM</div>
                    <div className="text-sm text-[#2C2C2C] mb-2">School event</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF9800]"></span>
                      <span className="px-2 py-0.5 bg-[#FFF3E0] text-[#E65100] text-xs rounded">School</span>
                    </div>
                  </div>
                  <div className="border border-[#E5E5E5] rounded-lg p-4 bg-white hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                    <div className="text-xs text-[#8E8E8E] mb-2">Dec 20 • 5:00 PM</div>
                    <div className="text-sm text-[#2C2C2C] mb-2">Utility bill due</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#9C27B0]"></span>
                      <span className="px-2 py-0.5 bg-[#F3E5F5] text-[#6A1B9A] text-xs rounded">Bills</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Family Profiles */}
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-8 md:p-12 shadow-sm">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-black" strokeWidth={1.5} />
                <h3 className="text-2xl text-black">Family Profiles</h3>
              </div>
              <p className="text-[#8E8E8E] leading-relaxed max-w-3xl">
                Create detailed profiles for every family member, complete with roles, notes, tags, and shared visibility.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Profile Form */}
              <div className="flex-1 border border-[#E5E5E5] rounded-lg p-6 bg-white">
                <div className="text-sm text-black mb-6">Create New Profile</div>
                <div className="space-y-5">
                  <div>
                    <label className="text-xs text-[#8E8E8E] mb-2 block">Name</label>
                    <input
                      type="text"
                      placeholder="Sarah Johnson"
                      className="w-full px-3 py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:border-[#8E8E8E] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8E8E8E] mb-2 block">Relationship</label>
                    <select className="w-full px-3 py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:border-[#8E8E8E] transition-colors text-sm text-[#2C2C2C]">
                      <option>Parent</option>
                      <option>Child</option>
                      <option>Partner</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-[#8E8E8E] mb-2 block">Contact Info</label>
                    <input
                      type="text"
                      placeholder="sarah@email.com"
                      className="w-full px-3 py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:border-[#8E8E8E] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8E8E8E] mb-2 block">Notes</label>
                    <textarea
                      placeholder="Allergies, medical conditions, important reminders..."
                      rows={3}
                      className="w-full px-3 py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:border-[#8E8E8E] transition-colors text-sm resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8E8E8E] mb-2 block">Color Tag</label>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-[#4CAF50] border-2 border-black"></button>
                      <button className="w-8 h-8 rounded-full bg-[#2196F3] border-2 border-transparent hover:border-[#E5E5E5]"></button>
                      <button className="w-8 h-8 rounded-full bg-[#FF9800] border-2 border-transparent hover:border-[#E5E5E5]"></button>
                      <button className="w-8 h-8 rounded-full bg-[#9C27B0] border-2 border-transparent hover:border-[#E5E5E5]"></button>
                      <button className="w-8 h-8 rounded-full bg-[#F44336] border-2 border-transparent hover:border-[#E5E5E5]"></button>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-[#2C2C2C] transition-colors">
                    Create Profile
                  </button>
                </div>
              </div>

              {/* Existing Family Members */}
              <div className="flex-1">
                <div className="text-sm text-black mb-4">Family Members</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-[#E5E5E5] rounded-lg p-4 bg-white hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center text-white">
                        S
                      </div>
                      <div>
                        <div className="text-sm text-black">Sarah Johnson</div>
                        <div className="text-xs text-[#8E8E8E]">Parent</div>
                      </div>
                    </div>
                    <div className="text-xs text-[#8E8E8E] mt-2">Epilepsy, gluten allergy</div>
                  </div>

                  <div className="border border-[#E5E5E5] rounded-lg p-4 bg-white hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#2196F3] flex items-center justify-center text-white">
                        J
                      </div>
                      <div>
                        <div className="text-sm text-black">John Smith</div>
                        <div className="text-xs text-[#8E8E8E]">Partner</div>
                      </div>
                    </div>
                    <div className="text-xs text-[#8E8E8E] mt-2">No known allergies</div>
                  </div>

                  <div className="border border-[#E5E5E5] rounded-lg p-4 bg-white hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#FF9800] flex items-center justify-center text-white">
                        E
                      </div>
                      <div>
                        <div className="text-sm text-black">Emma Smith</div>
                        <div className="text-xs text-[#8E8E8E]">Child</div>
                      </div>
                    </div>
                    <div className="text-xs text-[#8E8E8E] mt-2">Age 7, peanut allergy</div>
                  </div>

                  <div className="border border-[#E5E5E5] rounded-lg p-4 bg-[#FAFAFA] hover:bg-[#F6F6F6] transition-colors cursor-pointer flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl text-[#8E8E8E] mb-1">+</div>
                      <div className="text-xs text-[#8E8E8E]">Add Member</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: AI Chat Interface */}
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-8 md:p-12 shadow-sm">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-8 h-8 text-black" strokeWidth={1.5} />
                <h3 className="text-2xl text-black">AI Chat Interface</h3>
              </div>
              <p className="text-[#8E8E8E] leading-relaxed max-w-3xl">
                Ask questions and get instant answers about your family's schedule, medical history, and upcoming responsibilities.
              </p>
            </div>

            {/* Chat Window */}
            <div className="border border-[#E5E5E5] rounded-lg overflow-hidden bg-white max-w-3xl mx-auto">
              {/* Chat Messages */}
              <div className="p-6 space-y-4 min-h-96">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-md bg-[#F6F6F6] rounded-lg px-4 py-3">
                    <div className="text-sm text-[#2C2C2C]">
                      When was Sarah's last seizure?
                    </div>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="max-w-md border border-[#E5E5E5] rounded-lg px-4 py-3 bg-white">
                    <div className="text-xs text-[#8E8E8E] mb-2">Relyo AI</div>
                    <div className="text-sm text-[#2C2C2C] leading-relaxed">
                      A seizure event was logged on December 8th at 11:42 AM. Would you like me to add a follow-up reminder?
                    </div>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-md bg-[#F6F6F6] rounded-lg px-4 py-3">
                    <div className="text-sm text-[#2C2C2C]">
                      Yes, remind me to call the doctor tomorrow morning
                    </div>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="max-w-md border border-[#E5E5E5] rounded-lg px-4 py-3 bg-white">
                    <div className="text-xs text-[#8E8E8E] mb-2">Relyo AI</div>
                    <div className="text-sm text-[#2C2C2C] leading-relaxed">
                      I've added a reminder for tomorrow, December 1st at 9:00 AM: "Call doctor about Sarah's seizure." I'll send you a notification.
                    </div>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-md bg-[#F6F6F6] rounded-lg px-4 py-3">
                    <div className="text-sm text-[#2C2C2C]">
                      What's on the calendar for this week?
                    </div>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="max-w-md border border-[#E5E5E5] rounded-lg px-4 py-3 bg-white">
                    <div className="text-xs text-[#8E8E8E] mb-2">Relyo AI</div>
                    <div className="text-sm text-[#2C2C2C] leading-relaxed">
                      Here's what's coming up this week:
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Dec 1: Doctor follow-up call (9:00 AM)</li>
                        <li>• Dec 3: Emma's school project due</li>
                        <li>• Dec 5: Grocery shopping</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-md bg-[#F6F6F6] rounded-lg px-4 py-3">
                    <div className="text-sm text-[#2C2C2C]">
                      Suggest questions for Sarah's doctor appointment
                    </div>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="max-w-md border border-[#E5E5E5] rounded-lg px-4 py-3 bg-white">
                    <div className="text-xs text-[#8E8E8E] mb-2">Relyo AI</div>
                    <div className="text-sm text-[#2C2C2C] leading-relaxed">
                      Based on Sarah's recent seizure on Dec 8th and her epilepsy history, here are some questions to ask:
                      <ul className="mt-2 space-y-1.5 text-sm">
                        <li>• Should we adjust her current medication dosage?</li>
                        <li>• Are there any new triggers we should watch for?</li>
                        <li>• Do we need to schedule an EEG or other tests?</li>
                        <li>• What warning signs should we monitor?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Field */}
              <div className="border-t border-[#E5E5E5] p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask Relyo anything…"
                    className="flex-1 px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#8E8E8E] transition-colors text-sm"
                  />
                  <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-[#2C2C2C] transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}