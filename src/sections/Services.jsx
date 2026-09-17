import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Globe,
  MessageCircle,
  Handshake,
  FileText,
  PlaneTakeoff,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";

function ServiceCard({ icon: Icon, title, desc, cta }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="rounded-2xl bg-[#083b35] text-white shadow-[0_18px_40px_rgba(2,20,18,0.22)] border border-white/10"
    >
      <div className="p-6 sm:p-7">
        <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
          <Icon className="h-[18px] w-[18px] text-teal-200" />
        </div>

        <h3 className="mt-4 text-[13px] font-semibold leading-snug text-white">
          {title}
        </h3>

        <p className="mt-2 text-[11px] leading-relaxed text-white/70">
          {desc}
        </p>

        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium text-teal-200 hover:text-teal-100 transition"
        >
          {cta} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const { t } = useTranslation();

  const items = [
    {
      icon: Globe,
      title: t("services.cards.overseas.title"),
      desc: t("services.cards.overseas.desc"),
    },
    {
      icon: MessageCircle,
      title: t("services.cards.guidance.title"),
      desc: t("services.cards.guidance.desc"),
    },
    {
      icon: Handshake,
      title: t("services.cards.employer.title"),
      desc: t("services.cards.employer.desc"),
    },
    {
      icon: FileText,
      title: t("services.cards.legal.title"),
      desc: t("services.cards.legal.desc"),
    },
    {
      icon: PlaneTakeoff,
      title: t("services.cards.prep.title"),
      desc: t("services.cards.prep.desc"),
    },
    {
      icon: LifeBuoy,
      title: t("services.cards.support.title"),
      desc: t("services.cards.support.desc"),
    },
  ];

  return (
    <section id="services" className="relative bg-[#eef6f5] py-20 sm:py-24">
      {/* subtle patterned background overlay */}
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.38em] text-[#083b35]/70">
            {t("services.kicker")}
          </p>

          <h2 className="mt-3 text-[26px] sm:text-[32px] font-semibold tracking-tight text-[#083b35] leading-tight">
            {t("services.title")}
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <ServiceCard
                icon={it.icon}
                title={it.title}
                desc={it.desc}
                cta={t("common.learnMore")}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}