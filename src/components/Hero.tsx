import { useState, FormEvent } from "react";
import elephantLogo from "./assets/elephant_logo.png";
import relyoPrototypeVideo from "./assets/relyo_protype.mov";

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

        {/* Section Header */}
        <div className="text-center mt-24 mb-12">
          <h2 className="text-3xl md:text-4xl text-black mb-4">
            How Relyo Works
          </h2>
          <p className="text-[#8E8E8E]">
            Everything you need to keep your family organized
          </p>
        </div>

        {/* Prototype Video */}
        <div className="rounded-xl overflow-hidden shadow-sm relative">
          <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-md z-10">
            Prototype Version
          </div>
          <video
            src={relyoPrototypeVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
