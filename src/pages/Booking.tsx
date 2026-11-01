import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, AlertCircle, Sparkles } from "lucide-react";

export default function Booking() {
  const [searchParams] = useSearchParams();
  const prefilledService = searchParams.get("service") || "Signature Haircut & Blowout";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: prefilledService,
    date: "",
    time: "10:00 AM",
    message: "",
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      setError("Please fill in your name, phone number, and preferred date.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#29231F] pt-32 pb-24 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#A77B55] uppercase block mb-3">
            Reservation Request
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#29231F] mb-4">
            BOOK YOUR APPOINTMENT
          </h1>
          <p className="text-sm sm:text-base text-[#29231F]/70 font-light leading-relaxed">
            Submit your appointment request below. Our salon concierge will contact you shortly to confirm your booking details.
          </p>
        </div>

        {/* BOOKING CARD */}
        <div className="bg-white rounded-[32px] p-8 sm:p-14 border border-[#EAE2D8] shadow-xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#A77B55]/10 text-[#A77B55] flex items-center justify-center shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#29231F]">
                  Request Submitted Successfully
                </h3>
                <p className="text-sm text-[#29231F]/70 max-w-md font-light leading-relaxed">
                  Thank you, <strong className="text-[#29231F]">{formData.name}</strong>. Your reservation request for <strong className="text-[#29231F]">{formData.service}</strong> on <strong className="text-[#29231F]">{formData.date}</strong> at <strong className="text-[#29231F]">{formData.time}</strong> has been logged.
                </p>
                <div className="p-4 rounded-2xl bg-[#F8F5F0] border border-[#EAE2D8] text-xs text-[#29231F]/60 max-w-md mt-2">
                  * Note: This is a frontend demonstration form. An actual confirmation call or message will be made by the salon staff.
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      service: "Signature Haircut & Blowout",
                      date: "",
                      time: "10:00 AM",
                      message: "",
                    });
                  }}
                  className="mt-6 px-8 py-3 rounded-full bg-[#29231F] text-[#F8F5F0] text-xs font-semibold uppercase tracking-widest hover:bg-[#A77B55] transition-colors"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#29231F]/80">
                      Your Full Name <span className="text-[#A77B55]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Charlotte Hayes"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F5F0] border border-[#EAE2D8] text-sm focus:outline-none focus:border-[#A77B55] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#29231F]/80">
                      Phone Number <span className="text-[#A77B55]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 019-2834"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F5F0] border border-[#EAE2D8] text-sm focus:outline-none focus:border-[#A77B55] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#29231F]/80">
                    Selected Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F8F5F0] border border-[#EAE2D8] text-sm focus:outline-none focus:border-[#A77B55] transition-colors font-medium"
                  >
                    <option value="Signature Haircut & Blowout">Signature Haircut &amp; Blowout ($85+)</option>
                    <option value="Balayage & Dimensional Color">Balayage &amp; Dimensional Color ($220+)</option>
                    <option value="Keratin Smoothing Treatment">Keratin Smoothing Treatment ($250+)</option>
                    <option value="Luxury Evening Makeup">Luxury Evening Makeup ($120)</option>
                    <option value="Soft Glam & Event Look">Soft Glam &amp; Event Look ($95)</option>
                    <option value="Aqsa's Signature Gold Facial">Aqsa&apos;s Signature Gold Facial ($150)</option>
                    <option value="Hydra-Infusion Glow Treatment">Hydra-Infusion Glow Treatment ($130)</option>
                    <option value="Luxury Gel Manicure & Pedicure">Luxury Gel Manicure &amp; Pedicure ($110)</option>
                    <option value="Royal Bridal Package">Royal Bridal Package ($450+)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#29231F]/80">
                      Preferred Date <span className="text-[#A77B55]">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F5F0] border border-[#EAE2D8] text-sm focus:outline-none focus:border-[#A77B55] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#29231F]/80">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F5F0] border border-[#EAE2D8] text-sm focus:outline-none focus:border-[#A77B55] transition-colors font-medium"
                    >
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="02:30 PM">02:30 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:30 PM">05:30 PM</option>
                      <option value="07:00 PM">07:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#29231F]/80">
                    Additional Requests or Notes (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any specific stylist preferences, hair length notes, or special requests..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F8F5F0] border border-[#EAE2D8] text-sm focus:outline-none focus:border-[#A77B55] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#29231F] text-[#F8F5F0] font-semibold text-xs uppercase tracking-widest hover:bg-[#A77B55] transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Appointment Request</span>
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
