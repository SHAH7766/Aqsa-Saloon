import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scissors, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F8F5F0]/90 backdrop-blur-md py-4 shadow-sm border-b border-[#EAE2D8]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* LOGO WORDMARK */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#29231F] text-[#F8F5F0] flex items-center justify-center font-serif font-bold text-lg group-hover:bg-[#A77B55] transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#29231F]">
              AQSA&apos;S SALON
            </span>
            <span className="text-[9px] font-sans tracking-[0.25em] uppercase text-[#A77B55] font-semibold">
              Luxury Beauty &amp; Care
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide uppercase transition-colors py-1 ${
                  isActive ? "text-[#A77B55]" : "text-[#29231F] hover:text-[#A77B55]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A77B55]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* BOOK APPOINTMENT CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#29231F] text-[#F8F5F0] text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#A77B55] shadow-md hover:shadow-lg"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-[#EAE2D8] flex items-center justify-center text-[#29231F]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#F8F5F0] border-b border-[#EAE2D8] shadow-xl md:hidden px-6 py-8 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-2xl tracking-wide py-2 border-b border-[#EAE2D8]/60 ${
                    location.pathname === link.path ? "text-[#A77B55] font-bold" : "text-[#29231F]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#29231F] text-[#F8F5F0] font-semibold text-xs uppercase tracking-widest shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
