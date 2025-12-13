import { useState, FormEvent } from "react";

export function SecondaryCTA() {
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
    <section className="px-6 py-20 bg-[#FAFAFA]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-black mb-4">
          Be the first to try Relyo-ai
        </h2>
        <p className="text-[#8E8E8E] mb-10 leading-relaxed">
          Join the early waitlist and help shape the experience
        </p>

        {/* Email Input */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="w-full sm:w-80 px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#8E8E8E] transition-colors bg-white disabled:opacity-50"
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
          <div className={`text-center mt-4 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
            {message}
          </div>
        )}

        {/* Footer Text */}
        <p className="mt-16 text-xs text-[#8E8E8E]">
          © 2025 Relyo-ai. All rights reserved.
        </p>
      </div>
    </section>
  );
}
