import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#29231F] text-[#F8F5F0] pt-20 pb-12 px-6 sm:px-10 border-t border-[#A77B55]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F8F5F0]/10">
        {/* Brand & Intro */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#A77B55] text-[#F8F5F0] flex items-center justify-center font-serif font-bold text-lg">
              A
            </div>
            <span className="font-serif text-2xl font-bold tracking-wider">
              AQSA&apos;S SALON
            </span>
          </div>
          <p className="text-sm text-[#D8BFA5] leading-relaxed max-w-sm">
            A refined beauty experience in Manhattan, New York City, where expert care meets timeless elegance. Dedicated to elevating your natural beauty with precision and luxury.
          </p>
          <div className="inline-block px-3 py-1 rounded-full bg-[#A77B55]/20 text-[#D8BFA5] text-[10px] font-mono tracking-widest uppercase border border-[#A77B55]/30">
            Portfolio Demonstration Concept
          </div>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#F8F5F0]/10 hover:bg-[#A77B55] flex items-center justify-center transition-colors text-[#F8F5F0]"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-[#F8F5F0]/10 hover:bg-[#A77B55] flex items-center justify-center transition-colors text-[#F8F5F0]"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="font-serif text-lg font-semibold text-[#D8BFA5]">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm text-[#D8BFA5]/80">
            <li>
              <Link to="/" className="hover:text-[#F8F5F0] transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#F8F5F0] transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#F8F5F0] transition-colors">Services &amp; Pricing</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#F8F5F0] transition-colors">Editorial Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F8F5F0] transition-colors">Contact</Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-[#F8F5F0] transition-colors">Book Appointment</Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-serif text-lg font-semibold text-[#D8BFA5]">
            Signature Services
          </h4>
          <ul className="space-y-3 text-sm text-[#D8BFA5]/80">
            <li>Haircuts &amp; Styling</li>
            <li>Advanced Hair Coloring</li>
            <li>Luxury Bridal Makeup</li>
            <li>Rejuvenating Facials</li>
            <li>Keratin &amp; Hair Treatments</li>
            <li>Manicure &amp; Pedicure</li>
          </ul>
        </div>

        {/* Hours & Contact */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-serif text-lg font-semibold text-[#D8BFA5]">
            Manhattan Studio &amp; Hours
          </h4>
          <ul className="space-y-3 text-xs text-[#D8BFA5]/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#A77B55] shrink-0 mt-0.5" />
              <span>123 Example Avenue, Suite 201, New York, NY 10021</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#A77B55] shrink-0" />
              <span>+1 (212) 555-0148</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#A77B55] shrink-0" />
              <span>hello@aqsasalon.example</span>
            </li>
            <li className="pt-2 border-t border-[#F8F5F0]/10 space-y-1">
              <div className="flex justify-between"><span>Mon:</span><span>10 AM – 6 PM</span></div>
              <div className="flex justify-between"><span>Tue – Wed:</span><span>10 AM – 7 PM</span></div>
              <div className="flex justify-between"><span>Thu – Fri:</span><span>10 AM – 8 PM</span></div>
              <div className="flex justify-between"><span>Sat:</span><span>9 AM – 6 PM</span></div>
              <div className="flex justify-between"><span>Sun:</span><span>11 AM – 5 PM</span></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8BFA5]/60">
        <p>&copy; {new Date().getFullYear()} Aqsa&apos;s Salon (Demo Concept). All rights reserved.</p>
        <p>Manhattan, New York City &bull; Portfolio Concept</p>
      </div>
    </footer>
  );
}
