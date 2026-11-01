import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Sparkles, Calendar, ArrowRight, Check } from "lucide-react";
import { cn } from "@/utils";

interface ServiceItem {
  id: string;
  category: "Hair" | "Makeup" | "Skin & Facial" | "Nails" | "Bridal";
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "h1",
    category: "Hair",
    name: "Signature Haircut & Blowout",
    description: "Customized cut, relaxing wash, scalp massage, and professional blowout styling.",
    duration: "60 mins",
    price: "$85+",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "h2",
    category: "Hair",
    name: "Balayage & Dimensional Color",
    description: "Hand-painted highlights for a natural, sun-kissed gradient with gloss toner and finish.",
    duration: "180 mins",
    price: "$220+",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "h3",
    category: "Hair",
    name: "Keratin Smoothing Treatment",
    description: "Professional restorative treatment eliminating frizz and imparting mirror-like shine.",
    duration: "120 mins",
    price: "$250+",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "m1",
    category: "Makeup",
    name: "Luxury Evening Makeup",
    description: "Glamorous full-face application including custom lashes and long-wear setting.",
    duration: "75 mins",
    price: "$120",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "m2",
    category: "Makeup",
    name: "Soft Glam & Event Look",
    description: "Refined, natural enhancement focusing on glowing skin and subtle eye definition.",
    duration: "60 mins",
    price: "$95",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s1",
    category: "Skin & Facial",
    name: "Aqsa's Signature Gold Facial",
    description: "Deep cleansing, botanical exfoliation, LED light therapy, and firming massage.",
    duration: "90 mins",
    price: "$150",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s2",
    category: "Skin & Facial",
    name: "Hydra-Infusion Glow Treatment",
    description: "Advanced hydration serum infusion to plump, smooth, and revitalize dry skin.",
    duration: "60 mins",
    price: "$130",
    image: "https://images.unsplash.com/photo-1512290900722-9a70f8027d78?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "n1",
    category: "Nails",
    name: "Luxury Gel Manicure & Pedicure",
    description: "Pristine cuticle care, gentle exfoliation, long-lasting gel polish, and hydrating massage.",
    duration: "90 mins",
    price: "$110",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "b1",
    category: "Bridal",
    name: "Royal Bridal Package",
    description: "Complete bridal hair styling, HD makeup, trial session, and veil placement assistance.",
    duration: "240 mins",
    price: "$450+",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = ["All", "Hair", "Makeup", "Skin & Facial", "Nails", "Bridal"] as const;

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredServices =
    activeCategory === "All"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#29231F] pt-32 pb-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#A77B55] uppercase block mb-3">
            Menu of Treatments
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#29231F] mb-6">
            SERVICES &amp; PRICING
          </h1>
          <p className="text-base sm:text-lg text-[#29231F]/70 font-light leading-relaxed">
            Explore our curated menu of luxury beauty treatments. Sample pricing is provided for demonstration purposes.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300",
                activeCategory === cat
                  ? "bg-[#29231F] text-[#F8F5F0] shadow-md"
                  : "bg-[#EAE2D8]/60 text-[#29231F] hover:bg-[#EAE2D8]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden border border-[#EAE2D8] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE2D8]">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-[#29231F] text-[#F8F5F0] px-3.5 py-1 rounded-full text-xs font-semibold font-mono tracking-wider shadow-md">
                      {service.price}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between text-xs font-mono text-[#A77B55] uppercase tracking-wider mb-2">
                      <span>{service.category}</span>
                      <span>{service.duration}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#29231F] mb-3">
                      {service.name}
                    </h3>
                    <p className="text-sm text-[#29231F]/70 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0">
                  <Link
                    to={`/booking?service=${encodeURIComponent(service.name)}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#EAE2D8]/60 hover:bg-[#29231F] text-[#29231F] hover:text-[#F8F5F0] text-xs font-semibold tracking-wider uppercase transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
