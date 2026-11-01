import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#29231F] pt-32 pb-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE2D8] text-[#A77B55] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Manhattan, New York City &bull; Portfolio Concept</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#29231F] mb-6">
            CONTACT US
          </h1>
          <p className="text-base sm:text-lg text-[#29231F]/70 font-light leading-relaxed">
            We invite you to reach out with any inquiries regarding our treatments, bridal bookings, or private events at our Manhattan studio concept.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* INFO COLUMN */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE2D8] shadow-sm space-y-8">
            <div>
              <span className="text-[10px] font-mono text-[#A77B55] uppercase tracking-widest block mb-1">
                Demonstration Identity
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#29231F]">
                Manhattan Studio
              </h3>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#A77B55]/10 text-[#A77B55] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#29231F]">Demo Address</h4>
                  <p className="text-[#29231F]/70 font-light mt-0.5">
                    123 Example Avenue, Suite 201<br />
                    New York, NY 10021
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#A77B55]/10 text-[#A77B55] flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#29231F]">Demo Telephone</h4>
                  <p className="text-[#29231F]/70 font-light mt-0.5">
                    +1 (212) 555-0148
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#A77B55]/10 text-[#A77B55] flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#29231F]">Demo Email</h4>
                  <p className="text-[#29231F]/70 font-light mt-0.5">
                    hello@aqsasalon.example
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#A77B55]/10 text-[#A77B55] flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#29231F]">Opening Hours</h4>
                  <div className="text-xs text-[#29231F]/70 font-mono mt-1 space-y-1">
                    <div className="flex justify-between gap-4"><span>Monday:</span><span>10 AM – 6 PM</span></div>
                    <div className="flex justify-between gap-4"><span>Tuesday:</span><span>10 AM – 7 PM</span></div>
                    <div className="flex justify-between gap-4"><span>Wednesday:</span><span>10 AM – 7 PM</span></div>
                    <div className="flex justify-between gap-4"><span>Thursday:</span><span>10 AM – 8 PM</span></div>
                    <div className="flex justify-between gap-4"><span>Friday:</span><span>10 AM – 8 PM</span></div>
                    <div className="flex justify-between gap-4"><span>Saturday:</span><span>9 AM – 6 PM</span></div>
                    <div className="flex justify-between gap-4"><span>Sunday:</span><span>11 AM – 5 PM</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F5F0] border border-[#EAE2D8] text-[11px] text-[#29231F]/70 leading-relaxed">
              * Note: Aqsa&apos;s Salon is a fictional portfolio concept located in Manhattan, NYC. Please do not send actual mail, calls, or real booking requests to these demo coordinates.
            </div>
          </div>

          {/* FORM COLUMN */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE2D8] shadow-sm">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#A77B55]/10 text-[#A77B55] flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#29231F]">Inquiry Received (Demo)</h3>
                  <p className="text-sm text-[#29231F]/70 max-w-md font-light">
                    Thank you for testing the contact form. This is a portfolio demonstration concept and messages are not routed to a real business.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full border border-[#29231F]/30 text-xs font-semibold uppercase tracking-wider hover:bg-[#29231F] hover:text-[#F8F5F0] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-[#29231F] mb-6">
                    Send an Inquiry
                  </h3>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#29231F]/80">
                        Full Name <span className="text-[#A77B55]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Olivia Vance"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F8F5F0] border border-[#EAE2D8] text-sm focus:outline-none focus:border-[#A77B55] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#29231F]/80">
                        Email Address <span className="text-[#A77B55]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. olivia@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F8F5F0] border border-[#EAE2D8] text-sm focus:outline-none focus:border-[#A77B55] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#29231F]/80">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (212) 555-0148"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F5F0] border border-[#EAE2D8] text-sm focus:outline-none focus:border-[#A77B55] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#29231F]/80">
                      Message <span className="text-[#A77B55]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist you with your beauty care inquiry?"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F5F0] border border-[#EAE2D8] text-sm focus:outline-none focus:border-[#A77B55] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#29231F] text-[#F8F5F0] font-semibold text-xs uppercase tracking-widest hover:bg-[#A77B55] transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message (Demo)</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
