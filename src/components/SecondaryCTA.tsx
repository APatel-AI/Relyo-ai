export function SecondaryCTA() {
  return (
    <section className="px-6 py-20 bg-[#FAFAFA]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-black mb-4">
          Be the first to try Relyo-ai
        </h2>
        <p className="text-[#8E8E8E] mb-10 leading-relaxed">
          Join the early waitlist and help shape the experience
        </p>

        {/* Email Input */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#8E8E8E] transition-colors bg-white"
          />
          <button className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-[#2C2C2C] transition-colors">
            Join the Waitlist
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-16 text-xs text-[#8E8E8E]">
          © 2025 Relyo-ai. All rights reserved.
        </p>
      </div>
    </section>
  );
}
