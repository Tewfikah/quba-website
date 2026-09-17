import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

import saFlag from "../assets/flags/sa.jpg";
import uaeFlag from "../assets/flags/uae.jpg";
import qaFlag from "../assets/flags/qa.jpg";
import kwFlag from "../assets/flags/kw.jpg";
import bhFlag from "../assets/flags/bh.jpg";
import omFlag from "../assets/flags/om.jpg";
import joFlag from "../assets/flags/jo.jpg";
import lbFlag from "../assets/flags/lb.jpg";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function DestinationCard({ code, name, flagSrc }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-[#083b35] border border-white/10 shadow-[0_22px_55px_rgba(2,20,18,0.18)]"
    >
      {/* Big flag image */}
      <div className="relative h-24 w-full overflow-hidden">
        <img
          src={flagSrc}
          alt={`${name} flag`}
          loading="lazy"
          className="h-full w-full object-cover scale-[1.02] group-hover:scale-[1.08] transition-transform duration-500 ease-out"
        />

        {/* flag overlay for premium look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-[#083b35]/70" />

        {/* code pill */}
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 border border-white/15">
          <span className="text-xs font-semibold tracking-wider text-white">
            {code}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-[15px] font-semibold text-white leading-tight">
          {name}
        </h3>

        <div className="mt-4 inline-flex items-center rounded-full bg-emerald-300/10 text-emerald-200 border border-emerald-200/15 px-3 py-1">
          <span className="text-[10px] uppercase tracking-[0.24em]">
            ACTIVE PLACEMENTS
          </span>
        </div>

        {/* subtle bottom glow on hover */}
        <div className="pointer-events-none absolute -bottom-10 left-1/2 h-20 w-56 -translate-x-1/2 rounded-full bg-teal-300/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.article>
  );
}

export default function Destinations() {
  const { t } = useTranslation();

  const countries = [
    { code: "SA", key: "countries.sa", flag: saFlag },
    { code: "UAE", key: "countries.uae", flag: uaeFlag },
    { code: "QA", key: "countries.qa", flag: qaFlag },
    { code: "KW", key: "countries.kw", flag: kwFlag },
    { code: "BH", key: "countries.bh", flag: bhFlag },
    { code: "OM", key: "countries.om", flag: omFlag },
    { code: "JO", key: "countries.jo", flag: joFlag },
    { code: "LB", key: "countries.lb", flag: lbFlag },
  ];

  return (
    <section id="destinations" className="relative bg-[#eef6f5] py-20 sm:py-24">
      {/* background texture */}
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#083b35] leading-tight">
            {t("destinationsSection.title")}
          </h2>
          <p className="mt-2 text-[13px] text-[#083b35]/65">
            {t("destinationsSection.subtitle")}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {countries.map((c) => (
            <DestinationCard
              key={c.code}
              code={c.code}
              name={t(c.key)}
              flagSrc={c.flag}
            />
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-[#083b35]/25 bg-white/70 backdrop-blur px-5 py-3 text-[12px] font-semibold text-[#083b35] hover:bg-white transition"
          >
            {t("destinationsSection.button")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}