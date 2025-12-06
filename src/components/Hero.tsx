import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, FormEvent } from "react";
import openPeepsImage from "./assets/open_peeps.png";
import elephantLogo from "./assets/elephant_logo.png";

export function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks for joining! We'll be in touch soon.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to submit. Please try again later.");
    }
  };

  return (
    <section className="px-6 py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-10">
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed mb-12">
            <span className="inline-block bg-black text-white rounded-full px-4 py-1 text-base font-normal mr-2">Relyo-AI</span>
            — a reliable way to manage your family's care
            <img src={elephantLogo} alt="Relyo Elephant Logo" className="inline-block h-16 w-auto ml-2" />
          </p>
          <h1 className="text-5xl md:text-6xl tracking-tight text-black mb-8">
            Peace of mind for every caregiver.
          </h1>
          <p className="text-xl text-[#8E8E8E] max-w-3xl mx-auto leading-relaxed mb-12">
            Relyo keeps health updates, appointments, and essential family details organized—so you always know what's happening and what to say when it matters.
          </p>
        </div>

        {/* Email Input */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="w-full sm:w-80 px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#8E8E8E] transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-[#2C2C2C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Joining..." : "Join the Waitlist"}
          </button>
        </form>

        {/* Status Message */}
        {message && (
          <div className={`text-center mb-16 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
            {message}
          </div>
        )}

        {/* Use Cases - Auto-scrolling Pills */}
        <div className="mt-20 mb-20">
          {/* Row 1 - Scrolls Left */}
          <div className="overflow-hidden mb-4 relative">
            <div
              className="flex"
              style={{
                gap: '0.75rem',
                animation: 'scroll-left 30s linear infinite'
              }}
            >
              {Array(2).fill([
                "Track health events",
                "Manage appointments easily",
                "Keep symptoms organized",
                "Store important family details"
              ]).flat().map((tag, i) => (
                <div
                  key={`row1-${i}`}
                  className="bg-black text-white rounded-full px-8 py-3 text-sm whitespace-nowrap flex-shrink-0"
                >
                  {tag}
                </div>
              ))}
            </div>
            {/* Fade overlays */}
            <div className="absolute top-0 left-0 bottom-0 w-32 pointer-events-none" style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)'
            }} />
            <div className="absolute top-0 right-0 bottom-0 w-32 pointer-events-none" style={{
              background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)'
            }} />
          </div>

          {/* Row 2 - Scrolls Right */}
          <div className="overflow-hidden mb-4 relative">
            <div
              className="flex"
              style={{
                gap: '0.75rem',
                animation: 'scroll-right 30s linear infinite'
              }}
            >
              {Array(2).fill([
                "Log updates in seconds",
                "Have info ready for any appointment",
                "Know what to say to office staff"
              ]).flat().map((tag, i) => (
                <div
                  key={`row2-${i}`}
                  className="bg-black text-white rounded-full px-8 py-3 text-sm whitespace-nowrap flex-shrink-0"
                >
                  {tag}
                </div>
              ))}
            </div>
            {/* Fade overlays */}
            <div className="absolute top-0 left-0 bottom-0 w-32 pointer-events-none" style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)'
            }} />
            <div className="absolute top-0 right-0 bottom-0 w-32 pointer-events-none" style={{
              background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)'
            }} />
          </div>

          {/* Row 3 - Scrolls Left */}
          <div className="overflow-hidden relative">
            <div
              className="flex"
              style={{
                gap: '0.75rem',
                animation: 'scroll-left 30s linear infinite'
              }}
            >
              {Array(2).fill([
                "Never forget key details again",
                "Keep everyone on the same page",
                "Share summaries when needed"
              ]).flat().map((tag, i) => (
                <div
                  key={`row3-${i}`}
                  className="bg-black text-white rounded-full px-8 py-3 text-sm whitespace-nowrap flex-shrink-0"
                >
                  {tag}
                </div>
              ))}
            </div>
            {/* Fade overlays */}
            <div className="absolute top-0 left-0 bottom-0 w-10 pointer-events-none" style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 90%)'
            }} />
            <div className="absolute top-0 right-0 bottom-0 w-10 pointer-events-none" style={{
              background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 90%)'
            }} />
          </div>
        </div>

        {/* Hero Mockup
        <div className="mt-24 rounded-xl overflow-hidden shadow-sm">
          <ImageWithFallback src={openPeepsImage} alt="Relyo App Mockup" width={1200} height={800} />
        </div> */}
      </div>
    </section>
  );
}
