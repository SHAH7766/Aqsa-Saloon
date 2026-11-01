import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Calendar, Scissors, ShieldCheck, Heart } from "lucide-react";

export default function Home() {
  const featuredServices = [
    {
      title: "Haircuts & Styling",
      description: "Precision cuts and bespoke styling tailored to enhance your unique facial structure and personal aesthetic.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Hair Coloring",
      description: "Custom dimensional color, balayage, and rich gloss treatments using premium nourishing formulations.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bridal Makeup",
      description: "Exquisite bridal transformations designed for timeless elegance and high-definition photography perfection.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Facial Treatments",
      description: "Rejuvenating clinical and botanical facials engineered to restore radiance, hydration, and youthful glow.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Hair Treatments",
      description: "Deep conditioning, keratin smoothing, and restorative scalp therapies for ultimate hair vitality.",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Manicure & Pedicure",
      description: "Meticulous nail care, gentle exfoliation, and pristine polish application in a serene setting.",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const testimonials = [
    {
      quote: "An absolute sanctuary of elegance. The attention to detail and personalized care at Aqsa's Salon is unmatched anywhere else.",
      author: "Sophia R.",
      role: "Regular Client",
    },
    {
      quote: "My bridal makeup was everything I dreamed of and more. It stayed flawless throughout the entire day and evening celebration.",
      author: "Ayesha M.",
      role: "Bride",
    },
    {
      quote: "The hair coloring and styling results exceeded my expectations. The stylists truly understand modern luxury and hair health.",
      author: "Elena K.",
      role: "Art Director",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#29231F]">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 sm:px-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EAE2D8]/50 hidden lg:block -z-10 rounded-bl-[120px]" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D8] text-[#A77B55] text-xs font-semibold tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exquisite Beauty Studio</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#29231F] leading-[1.05] mb-6">
              BEAUTY, <br />
              <span className="italic font-normal text-[#A77B55]">ELEVATED.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#29231F]/80 font-light max-w-xl leading-relaxed mb-10">
              Discover a refined beauty experience where expert care meets timeless elegance. Tailored styling and rejuvenating treatments designed exclusively for you.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#29231F] text-[#F8F5F0] text-xs font-semibold tracking-widest uppercase hover:bg-[#A77B55] transition-all shadow-lg"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-[#29231F]/30 text-[#29231F] text-xs font-semibold tracking-widest uppercase hover:border-[#29231F] transition-all"
              >
                <span>Book an Appointment</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Aqsa's Salon Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29231F]/40 via-transparent to-transparent" />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#F8F5F0] border border-[#EAE2D8] p-6 rounded-3xl shadow-xl max-w-[240px] hidden sm:block">
              <div className="flex items-center gap-1 text-[#A77B55] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="font-serif font-bold text-sm text-[#29231F]">
                5-Star Luxury Experience
              </p>
              <p className="text-[11px] text-[#29231F]/70 mt-0.5">
                Rated highest by discerning clients in premium beauty care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED SERVICES SECTION */}
      <section className="py-28 px-6 sm:px-10 bg-[#EAE2D8]/30 border-y border-[#EAE2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#A77B55] uppercase block mb-3">
                Signature Offerings
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#29231F]">
                CURATED BEAUTY SERVICES
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#29231F] hover:text-[#A77B55] transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-[#F8F5F0] rounded-3xl overflow-hidden border border-[#EAE2D8] hover:border-[#A77B55]/50 transition-all shadow-sm hover:shadow-xl flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE2D8]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#29231F] mb-3 group-hover:text-[#A77B55] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#29231F]/70 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#A77B55]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-28 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                alt="Salon Ambience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-10">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#A77B55] uppercase block mb-3">
              Our Philosophy
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#29231F] mb-6 leading-tight">
              WHERE ARTISTRY MEETS REFINED LUXURY.
            </h2>
            <p className="text-base text-[#29231F]/80 font-light leading-relaxed mb-6">
              At Aqsa&apos;s Salon, we believe beauty is an intimate art form. Every visit is tailored to provide a serene sanctuary where you can unwind while our master stylists and technicians elevate your natural radiance.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-[#29231F]/80">
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#A77B55]" />
                <span>Premium organic and clinical-grade product formulations</span>
              </li>
              <li className="flex items-center gap-3">
                <Heart className="w-4 h-4 text-[#A77B55]" />
                <span>Personalized consultations for every individual client</span>
              </li>
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#29231F] text-[#F8F5F0] text-xs font-semibold tracking-widest uppercase hover:bg-[#A77B55] transition-all"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-28 px-6 sm:px-10 bg-[#29231F] text-[#F8F5F0]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D8BFA5] uppercase block mb-3">
            Client Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">
            WORDS FROM OUR GUESTS
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#3A322C] p-8 sm:p-10 rounded-3xl border border-[#A77B55]/30 flex flex-col justify-between"
            >
              <div className="flex items-center gap-1 text-[#D8BFA5] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-serif italic text-base sm:text-lg text-[#F8F5F0]/90 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <h4 className="font-serif font-bold text-base text-[#F8F5F0]">{t.author}</h4>
                <p className="text-xs text-[#D8BFA5] font-mono mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA SECTION */}
      <section className="py-28 px-6 sm:px-10 bg-[#EAE2D8]/40 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#A77B55] uppercase block mb-3">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#29231F] mb-6">
            YOUR NEXT BEAUTY MOMENT STARTS HERE.
          </h2>
          <p className="text-base sm:text-lg text-[#29231F]/70 font-light max-w-xl mx-auto mb-10">
            Reserve your preferred date and time with our expert stylists today.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#29231F] text-[#F8F5F0] text-xs font-semibold tracking-widest uppercase hover:bg-[#A77B55] transition-all shadow-xl hover:scale-105"
          >
            <span>BOOK YOUR APPOINTMENT</span>
            <Calendar className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
