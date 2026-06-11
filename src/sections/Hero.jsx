import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-[#0b3a35]/88"></div>

      {/* ✅ Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">

        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-[0.35em] text-[11px] text-teal-300 mb-5"
        >
          Licensed Ethiopian Employment Agency
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-[48px] font-semibold leading-tight"
        >
          Your Verified Path to
          <span className="block italic font-light text-teal-300 mt-2">
            Global Employment
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-[15px] text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          QUBA connects Ethiopian talent with{" "}
          <span className="font-semibold text-white">
            verified international employers
          </span>{" "}
          fully documented, legally processed, and culturally supported at every step.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#apply"
            className="px-6 py-2.5 bg-teal-400 text-[#0b3a35] text-sm font-semibold rounded-full hover:bg-teal-300 transition"
          >
            Start my application →
          </a>

          <a
            href="#about"
            className="px-6 py-2.5 border border-white text-sm rounded-full hover:bg-white hover:text-[#0b3a35] transition"
          >
            See how it works
          </a>
        </motion.div>

        {/* Feature Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-gray-200"
        >
          <span>✓ Government Licensed</span>
          <span>✓ Multi language Speaking Team</span>
          <span>✓ Legal Contracts for Every Placement</span>
          <span>✓ Zero Hidden Fees</span>
        </motion.div>

      </div>
    </section>
  );
}