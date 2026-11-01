import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Heart, Award } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Aqsa Malik",
      role: "Founder & Master Stylist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      bio: "With over 12 years of experience in luxury hair artistry and bridal styling, Aqsa founded the salon to create a sanctuary of refined beauty.",
    },
    {
      name: "Zainab Khan",
      role: "Senior Color Specialist",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      bio: "An expert in dimensional balayage and corrective color, Zainab ensures every client leaves with luminous, healthy hair.",
    },
    {
      name: "Huma Qureshi",
      role: "Lead Aesthetician & Makeup Artist",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      bio: "Specializing in clinical facials and high-definition bridal makeup, Huma enhances natural features with meticulous precision.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#29231F] pt-32 pb-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#A77B55] uppercase block mb-3">
            Our Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#29231F] mb-6">
            ABOUT AQSA&apos;S SALON
          </h1>
          <p className="text-base sm:text-lg text-[#29231F]/70 font-light leading-relaxed">
            A refined sanctuary dedicated to the art of beauty, personal well-being, and timeless elegance.
          </p>
        </div>

        {/* STORY SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Aqsa's Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#A77B55] uppercase block mb-3">
              Established Luxury
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#29231F] mb-6 leading-tight">
              CRAFTING ELEGANCE WITH PASSION AND PRECISION.
            </h2>
            <p className="text-base text-[#29231F]/80 font-light leading-relaxed mb-6">
              Aqsa&apos;s Salon was born out of a profound passion for high-end beauty and individualized care. We envisioned a space where modern luxury intersects with warm, attentive hospitality.
            </p>
            <p className="text-base text-[#29231F]/80 font-light leading-relaxed mb-8">
              Every detail of our studio—from the soothing warm ivory ambiance to our hand-selected botanical products—has been curated to offer an unmatched salon experience.
            </p>
            <div className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-[#EAE2D8]">
              <div>
                <span className="font-serif text-3xl font-bold text-[#A77B55] block mb-1">12+</span>
                <span className="text-xs text-[#29231F]/70 font-mono uppercase tracking-wider">Years of Artistry</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-[#A77B55] block mb-1">5,000+</span>
                <span className="text-xs text-[#29231F]/70 font-mono uppercase tracking-wider">Delighted Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* MISSION & PHILOSOPHY */}
        <div className="bg-[#EAE2D8]/30 border border-[#EAE2D8] rounded-[40px] p-10 sm:p-16 mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#A77B55] uppercase block mb-3">
              Core Values
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#29231F]">
              OUR PHILOSOPHY
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8F5F0] p-8 rounded-3xl border border-[#EAE2D8]">
              <div className="w-12 h-12 rounded-2xl bg-[#A77B55]/10 text-[#A77B55] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#29231F] mb-3">Uncompromising Quality</h3>
              <p className="text-sm text-[#29231F]/70 font-light leading-relaxed">
                We use only elite, nourishing product formulations that protect hair and skin integrity while delivering stunning results.
              </p>
            </div>
            <div className="bg-[#F8F5F0] p-8 rounded-3xl border border-[#EAE2D8]">
              <div className="w-12 h-12 rounded-2xl bg-[#A77B55]/10 text-[#A77B55] flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#29231F] mb-3">Tailored Care</h3>
              <p className="text-sm text-[#29231F]/70 font-light leading-relaxed">
                No two clients are identical. We provide dedicated consultations to understand your lifestyle, features, and personal aesthetic.
              </p>
            </div>
            <div className="bg-[#F8F5F0] p-8 rounded-3xl border border-[#EAE2D8]">
              <div className="w-12 h-12 rounded-2xl bg-[#A77B55]/10 text-[#A77B55] flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#29231F] mb-3">Continuous Mastery</h3>
              <p className="text-sm text-[#29231F]/70 font-light leading-relaxed">
                Our team regularly trains with international beauty educators to remain at the absolute forefront of modern trends and techniques.
              </p>
            </div>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#A77B55] uppercase block mb-3">
              Expert Artisans
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#29231F] mb-4">
              MEET OUR TEAM
            </h2>
            <p className="text-sm text-[#29231F]/70 font-light">
              Demonstration profiles showcasing our dedicated beauty professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAE2D8] shadow-sm flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#EAE2D8]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-[#29231F] mb-1">{member.name}</h3>
                  <p className="text-xs font-mono text-[#A77B55] uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-sm text-[#29231F]/70 font-light leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#29231F] text-[#F8F5F0] text-xs font-semibold tracking-widest uppercase hover:bg-[#A77B55] transition-all shadow-lg"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
