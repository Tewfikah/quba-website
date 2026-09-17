import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ClipboardCheck,
  BriefcaseBusiness,
  FileText,
  Plane,
  HandHeart,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-[28px] sm:text-[32px] font-semibold tracking-tight text-[#083b35]">
        {value}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.26em] text-[#083b35]/65">
        {label}
      </div>
    </div>
  );
}

function Step({ n, icon: Icon, title, desc }) {
  return (
    <div className="relative flex flex-col items-center text-center px-3">
      {/* number circle */}
      <div className="h-9 w-9 rounded-full bg-[#083b35] text-white text-xs font-semibold grid place-items-center shadow-sm">
        {n}
      </div>

      {/* icon */}
      <div className="mt-4 text-[#083b35]">
        <Icon className="h-5 w-5" />
      </div>

      <div className="mt-3 text-[12px] font-semibold text-[#083b35] leading-snug">
        {title}
      </div>
      <p className="mt-2 text-[11px] leading-relaxed text-[#083b35]/65 max-w-[200px]">
        {desc}
      </p>
    </div>
  );
}

export default function Process() {
  const { t } = useTranslation();

  const steps = [
    {
      n: 1,
      icon: ClipboardCheck,
      title: t("process.steps.s1.title"),
      desc: t("process.steps.s1.desc"),
    },
    {
      n: 2,
      icon: BriefcaseBusiness,
      title: t("process.steps.s2.title"),
      desc: t("process.steps.s2.desc"),
    },
    {
      n: 3,
      icon: FileText,
      title: t("process.steps.s3.title"),
      desc: t("process.steps.s3.desc"),
    },
    {
      n: 4,
      icon: Plane,
      title: t("process.steps.s4.title"),
      desc: t("process.steps.s4.desc"),
    },
    {
      n: 5,
      icon: HandHeart,
      title: t("process.steps.s5.title"),
      desc: t("process.steps.s5.desc"),
    },
  ];

  return (
    <section id="process" className="relative bg-[#eef6f5]">
      {/* subtle pattern overlay (light, like screenshot) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(8,59,53,0.75) 1px, transparent 0)",
          backgroundSize: "46px 46px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* STATS BAR (overlaps the hero a bit like the design) */}
        <div className="-translate-y-10 sm:-translate-y-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-[#083b35]/10 bg-white/80 backdrop-blur-md shadow-[0_18px_40px_rgba(4,34,30,0.18)]"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-7 px-6 sm:px-10">
              <Stat value="500+" label={t("stats.workers")} />
              <Stat value="12+" label={t("stats.countries")} />
              <Stat value="6" label={t("stats.services")} />
              <Stat value="100%" label={t("stats.legal")} />
            </div>
          </motion.div>
        </div>

        {/* PROCESS HEADER */}
        <div className="pb-16 -mt-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <div className="text-[10px] uppercase tracking-[0.38em] text-[#083b35]/70">
              {t("process.kicker")}
            </div>

            <h2 className="mt-4 text-[26px] sm:text-[30px] font-semibold tracking-tight text-[#083b35] leading-tight">
              {t("process.title")}
            </h2>
          </motion.div>

          {/* STEPS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="relative mt-10"
          >
            {/* dashed connector line (desktop) */}
            <div className="hidden lg:block absolute left-10 right-10 top-[18px] border-t border-dashed border-[#083b35]/20" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-3">
              {steps.map((s) => (
                <Step
                  key={s.n}
                  n={s.n}
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}