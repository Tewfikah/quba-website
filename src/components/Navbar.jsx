import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "../assets/logo-icon.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Destinations", href: "#destinations" },
  { name: "Apply Now", href: "#apply" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0b3a35] text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between relative">

        {/* ✅ LEFT — Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logoIcon}
            alt="QUBA Logo"
            className="h-12 w-auto object-contain"
          />
          <div className="leading-tight">
            <h1 className="text-2xl font-bold tracking-wide">
              QUBA
            </h1>
            <p className="text-[10px] tracking-[0.25em] text-gray-300">
              FOREIGN EMPLOYMENT <br />
              AGENT PLC
            </p>
          </div>
        </a>

        {/* ✅ CENTER — Navigation Links */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-teal-300 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ✅ RIGHT — CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-7 py-2.5 border border-white rounded-full hover:bg-white hover:text-[#0b3a35] transition duration-300 font-medium"
          >
            Book a Consultation
          </a>
        </div>

        {/* ✅ Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0b3a35] px-6 pb-6 space-y-5 text-white"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm hover:text-teal-300 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-block mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-[#0b3a35] transition"
            >
              Book a Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}