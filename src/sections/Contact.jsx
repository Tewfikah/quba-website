import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import patternBg from "../assets/image.png";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: d },
  }),
};

export default function Contact() {
  const { t } = useTranslation();

  const phoneDisplay = "+251 946 324 040";
  const waLink = "https://wa.me/251946324040";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#eef6f5] py-24 sm:py-28"
    >
      {/* ✅ Pattern Layer (VISIBLE) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `url("${patternBg}")`,
            backgroundRepeat: "repeat",
            backgroundSize: "520px",
            backgroundPosition: "center",
          }}
        />
        {/* lighter overlay so pattern can be seen */}
        <div className="absolute inset-0 bg-[#eef6f5]/40" />
      </div>

      {/* soft center glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#083b35]/[0.06] blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          custom={0}
          className="text-[30px] leading-tight sm:text-[40px] font-semibold tracking-tight text-[#083b35]"
        >
          {t("contactSection.title")}
        </motion.h2>

        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          custom={0.08}
          className="mt-4 text-[13px] sm:text-[14px] leading-relaxed text-[#083b35]/65"
        >
          {t("contactSection.subtitle")}
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          custom={0.16}
          className="mt-9 flex flex-col items-center gap-3"
        >
          <motion.a
            href="#apply"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="inline-flex items-center justify-center rounded-full border border-[#083b35]/35 bg-white/85 px-8 py-3 text-[12px] sm:text-[13px] font-semibold text-[#083b35] shadow-[0_18px_40px_rgba(2,20,18,0.12)] backdrop-blur hover:bg-white transition"
          >
            {t("contactSection.button")}
          </motion.a>

          <div className="text-[11px] text-[#083b35]/60">
            {t("contactSection.or")}{" "}
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#083b35] underline underline-offset-4 hover:text-[#0b3a35]"
            >
              {t("contactSection.whatsapp")}{" "}
              <span dir="ltr">{phoneDisplay}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}