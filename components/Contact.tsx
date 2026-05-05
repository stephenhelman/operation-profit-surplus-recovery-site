"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "", honeypot: "" });
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 text-white font-body text-base px-4 py-3 placeholder-gray-600 focus:outline-none focus:border-gold transition-colors duration-200";

  return (
    <section id="contact" className="bg-[#0D0D0D] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-body text-gold text-sm tracking-[0.3em] uppercase font-semibold">
            Get Started
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-3">
            Free Consultation
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 mb-6" />
          <p className="font-body text-gray-400 text-lg font-light">
            Tell us about your situation. We&apos;ll research your case and reach
            out — no obligation, no upfront cost.
          </p>
        </div>

        {status === "success" ? (
          <div className="border border-gold/40 bg-gold/5 p-10 text-center">
            <div className="font-heading text-gold text-2xl mb-3">
              Message Received
            </div>
            <p className="font-body text-gray-300 text-lg font-light">
              Thank you for reaching out. A member of our team will review your
              information and contact you shortly.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Honeypot — visually hidden, not a form field */}
            <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }}>
              <input
                tabIndex={-1}
                autoComplete="off"
                value={form.honeypot}
                onChange={update("honeypot")}
                placeholder="Leave this blank"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-gray-400 text-sm tracking-wide uppercase block mb-2">
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={update("name")}
                  maxLength={100}
                />
              </div>
              <div>
                <label className="font-body text-gray-400 text-sm tracking-wide uppercase block mb-2">
                  Email Address <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={update("email")}
                  maxLength={200}
                />
              </div>
            </div>

            <div>
              <label className="font-body text-gray-400 text-sm tracking-wide uppercase block mb-2">
                Phone Number{" "}
                <span className="text-gray-600 normal-case">(optional)</span>
              </label>
              <input
                type="tel"
                className={inputClass}
                placeholder="(915) 555-0100"
                value={form.phone}
                onChange={update("phone")}
                maxLength={30}
              />
            </div>

            <div>
              <label className="font-body text-gray-400 text-sm tracking-wide uppercase block mb-2">
                Brief Description of Your Situation{" "}
                <span className="text-gold">*</span>
              </label>
              <textarea
                className={`${inputClass} resize-none`}
                rows={5}
                placeholder="e.g. My home was foreclosed on in 2022 in Harris County, TX. I believe there may have been surplus funds from the sale."
                value={form.message}
                onChange={update("message")}
                maxLength={2000}
              />
              <div className="text-right mt-1">
                <span className="font-body text-gray-600 text-xs">
                  {form.message.length}/2000
                </span>
              </div>
            </div>

            {errorMsg && (
              <p className="font-body text-red-400 text-sm">{errorMsg}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full font-heading text-black bg-gold hover:bg-gold-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 py-4 text-lg tracking-wider uppercase"
            >
              {status === "loading" ? "Sending..." : "Submit — It's Free"}
            </button>

            <p className="font-body text-gray-600 text-xs text-center tracking-wide">
              Your information is kept strictly confidential. We do not sell or
              share your data.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
