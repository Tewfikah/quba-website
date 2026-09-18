import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import logoIcon from "../assets/logo-icon.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const waNumber = "251946324040";
  const waLink = `https://wa.me/${waNumber}`;

  const navLinks = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "destinations", href: "#destinations" },
    { key: "apply", href: "#apply" },
    { key: "contact", href: "#contact" },
  ];

  // ✅ RTL support
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenLang(false);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0b3a35] text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between relative">
        {/* ✅ Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logoIcon} alt="QUBA Logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <h1 className="text-xl font-semibold tracking-wide">QUBA</h1>
            <p className="text-[9px] tracking-[0.25em] text-gray-300">
              FOREIGN EMPLOYMENT <br />
              AGENT PLC
            </p>
          </div>
        </a>

        {/* ✅ Center Navigation */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="hover:text-teal-300 transition duration-300"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        {/* ✅ Right Side */}
        <div className="hidden lg:flex items-center gap-4 relative">
          {/* ✅ Language Toggle */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpenLang(!openLang)}
              className="px-4 py-2 border border-white/70 rounded-full text-sm font-medium hover:bg-white hover:text-[#0b3a35] transition duration-300"
            >
              {i18n.language.toUpperCase()}
            </button>

            <AnimatePresence>
              {openLang && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-36 bg-[#0b3a35] border border-white/20 rounded-xl shadow-xl overflow-hidden"
                >
                  {["en", "am", "ar"].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => {
                        i18n.changeLanguage(lng);
                        setOpenLang(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition duration-200 ${
                        i18n.language === lng
                          ? "bg-teal-400 text-[#0b3a35]"
                          : "text-white hover:bg-teal-400 hover:text-[#0b3a35]"
                      }`}
                    >
                      {lng === "en" && "English"}
                      {lng === "am" && "Amharic"}
                      {lng === "ar" && "Arabic"}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ✅ WhatsApp Icon Button */}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="h-10 w-10 rounded-full border border-white/70 grid place-items-center
                       text-white hover:bg-white hover:text-[#0b3a35] transition duration-300"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>

          {/* ✅ CTA Button */}
          <a
            href="#contact"
            className="px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-[#0b3a35] transition duration-300"
          >
            {t("book")}
          </a>
        </div>

        {/* ✅ Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0b3a35] px-6 pb-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm"
              >
                {t(link.key)}
              </a>
            ))}

            {/* ✅ Mobile Language Buttons */}
            <div className="flex gap-3 mt-3 flex-wrap">
              {["en", "am", "ar"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  className={`px-3 py-1 rounded-full text-xs border ${
                    i18n.language === lng
                      ? "bg-teal-400 text-[#0b3a35]"
                      : "border-white text-white"
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>

            {/* ✅ Mobile WhatsApp Button */}
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 border border-white rounded-full text-sm text-center w-full"
            >
              <FaWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-6 py-2 border border-white rounded-full text-sm text-center"
            >
              {t("book")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}