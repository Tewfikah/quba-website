import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#0b3a35]/88"></div>

      <div className="relative z-10 max-w-3xl text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-[48px] font-semibold leading-tight"
        >
          {t("heroTitle1")}
          <span className="block italic font-light text-teal-300 mt-2">
            {t("heroTitle2")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-[15px] text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          {t("heroSubtitle")}
        </motion.p>
      </div>
    </section>
  );
}