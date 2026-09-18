import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FAQItem from "../components/FAQItem";
import patternBg from "../assets/image.png";

export default function FAQ() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [openIndex, setOpenIndex] = useState(0);

  const items = useMemo(
    () => [
      "q1",
      "q2",
      "q3",
      "q4",
      "q5",
      "q6",
      "q7",
      "q8",
    ],
    []
  );

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#eef6f5] py-24 sm:py-28 scroll-mt-24"
    >
      {/* Pattern background (same as your screenshot style) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url("${patternBg}")`,
            backgroundRepeat: "repeat",
            backgroundSize: "520px",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#eef6f5]/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-[30px] sm:text-[36px] font-semibold tracking-tight text-[#083b35] leading-tight">
            {t("faqSection.titleLine1")}
            <br />
            {t("faqSection.titleLine2")}
          </h2>
        </motion.div>

        {/* Accordion box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="mt-10 mx-auto max-w-xl"
        >
          <div className="space-y-3">
            {items.map((key, idx) => (
              <FAQItem
                key={key}
                id={`faq-${key}`}
                isRTL={isRTL}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
                question={t(`faqSection.items.${key}.q`)}
                answer={t(`faqSection.items.${key}.a`)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}