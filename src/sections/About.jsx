import { motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import logoIcon from "../assets/logo-icon.png";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // If you haven't added i18n keys yet, i18next will show keys.
  // Make sure your index.js includes aboutSection/testimonialsSection keys.

  const bulletKeys = ["b1", "b2", "b3", "b4", "b5"];
  const bullets = bulletKeys.map((k) => t(`aboutSection.bullets.${k}`));

  const testimonialKeys = ["t1", "t2", "t3", "t4", "t5"];
  const testimonials = testimonialKeys.map((k) => ({
    rating: 5,
    quote: t(`testimonialsSection.${k}.quote`),
    name: t(`testimonialsSection.${k}.name`),
    meta: t(`testimonialsSection.${k}.meta`),
  }));

  return (
    <section
      id="about"
      className="relative bg-[#eef6f5] py-20 sm:py-24 overflow-hidden"
    >
      {/* subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(8,59,53,0.9) 1px, transparent 0)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Top 2 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 rounded-2xl bg-[#083b35] text-white border border-white/10 shadow-[0_22px_55px_rgba(2,20,18,0.18)]"
          >
            <div className="p-7 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.34em] text-white/70">
                {t("aboutSection.kicker")}
              </p>

              <h2 className="mt-3 text-[24px] sm:text-[28px] font-semibold leading-tight">
                {t("aboutSection.title")}
              </h2>

              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className={[
                      "flex items-start gap-3",
                      isRTL ? "flex-row-reverse text-right" : "",
                    ].join(" ")}
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-200 shrink-0" />
                    <span className="text-[12px] text-white/85 leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="lg:col-span-7 rounded-2xl bg-[#cfe6e3] border border-[#083b35]/10 shadow-[0_22px_55px_rgba(2,20,18,0.10)]"
          >
            <div className={["p-7 sm:p-10", isRTL ? "text-right" : ""].join(" ")}>
              <div className="text-[#083b35]/90 inline-block">
                <Quote className="h-10 w-10" />
              </div>

              <p className="mt-5 text-[14px] sm:text-[15px] leading-relaxed text-[#083b35]/85 font-medium">
                “{t("aboutSection.quote")}”
              </p>

              <div
                className={[
                  "mt-7 inline-flex items-center gap-3 rounded-full border border-[#083b35]/20 bg-white/45 px-4 py-2 backdrop-blur",
                  isRTL ? "flex-row-reverse" : "",
                ].join(" ")}
              >
                <div className="h-9 w-9 rounded-full bg-[#083b35] grid place-items-center shrink-0">
                  <img src={logoIcon} alt="QUBA" className="h-5 w-5 object-contain" />
                </div>
                <div className="leading-tight">
                  <div className="text-[12px] font-semibold text-[#083b35]">
                    {t("aboutSection.team.name")}
                  </div>
                  <div className="text-[10px] text-[#083b35]/65">
                    {t("aboutSection.team.role")}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials title */}
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-14 text-center text-[22px] sm:text-[26px] font-semibold text-[#083b35]"
        >
          {t("testimonialsSection.title")}
        </motion.h3>

        {/* Testimonials slider with arrows */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <TestimonialsCarousel items={testimonials} isRTL={isRTL} />
        </motion.div>
      </div>
    </section>
  );
}