import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-6">
          <h1 className="text-5xl md:text-6xl tracking-tight text-black mb-5">
            Your life. Organized. Together.
          </h1>
          <p className="text-lg text-[#8E8E8E] max-w-2xl mx-auto leading-relaxed">
            Relyo helps you track responsibilities, remember important dates, and manage your family's tasks—all in one place.
          </p>
        </div>

        {/* Email Input */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20 mt-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#8E8E8E] transition-colors"
          />
          <button className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-[#2C2C2C] transition-colors">
            Join the Waitlist
          </button>
        </div>

        {/* Hero Mockup */}
        <div className="mt-16 rounded-xl border border-[#E5E5E5] overflow-hidden shadow-sm">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80"
            alt="Relyo Dashboard"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
