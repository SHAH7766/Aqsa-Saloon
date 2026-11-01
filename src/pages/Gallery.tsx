import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Sparkles } from "lucide-react";
import { cn } from "@/utils";

interface GalleryImage {
  id: number;
  title: string;
  category: "Hair" | "Makeup" | "Bridal" | "Salon Ambience";
  url: string;
  span?: string;
}

const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 1,
    title: "Bridal Elegance",
    category: "Bridal",
    url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Balayage Masterclass",
    category: "Hair",
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Luxury Interior Sanctuary",
    category: "Salon Ambience",
    url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Soft Glam Makeup",
    category: "Makeup",
    url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Precision Hair Styling",
    category: "Hair",
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Royal Bridal Styling",
    category: "Bridal",
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: 7,
    title: "Relaxing Facial Treatment",
    category: "Salon Ambience",
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
  },
];

const CATEGORIES = ["All", "Hair", "Makeup", "Bridal", "Salon Ambience"] as const;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#29231F] pt-32 pb-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#A77B55] uppercase block mb-3">
            Visual Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#29231F] mb-6">
            EDITORIAL GALLERY
          </h1>
          <p className="text-base sm:text-lg text-[#29231F]/70 font-light leading-relaxed">
            A showcase of our master craftsmanship, bridal transformations, and luxurious salon ambience.
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

        {/* MASONRY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedImage(item)}
                className={cn(
                  "group relative rounded-3xl overflow-hidden bg-[#EAE2D8] cursor-pointer shadow-sm hover:shadow-xl transition-all",
                  item.span || "col-span-1"
                )}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29231F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-xs font-mono text-[#D8BFA5] uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#F8F5F0]">
                      {item.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-[#F8F5F0]/20 backdrop-blur-md flex items-center justify-center text-[#F8F5F0]">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#29231F]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden bg-[#1B1715] shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-[#29231F]/80 border border-[#A77B55]/40 flex items-center justify-center text-[#F8F5F0] hover:bg-[#A77B55] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative aspect-[16/10] w-full bg-black">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 bg-[#29231F] flex items-center justify-between text-[#F8F5F0]">
                <div>
                  <span className="text-xs font-mono text-[#A77B55] uppercase tracking-wider block">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold">{selectedImage.title}</h3>
                </div>
                <span className="text-xs font-mono text-[#D8BFA5]/60">Aqsa&apos;s Salon Archive</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
