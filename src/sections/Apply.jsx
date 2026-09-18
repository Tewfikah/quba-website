import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import patternBg from "../assets/image.png";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: d },
  }),
};

function Label({ children }) {
  return (
    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
      {children}
    </span>
  );
}

function Field({ children }) {
  return <div className="space-y-2">{children}</div>;
}

function baseInputClass(isRTL) {
  return [
    "w-full rounded-lg border border-white/10",
    "bg-[#d7ece8] text-[#083b35]",
    "px-3 py-2 text-[12px] outline-none",
    "placeholder:text-[#083b35]/45",
    "focus:ring-2 focus:ring-teal-300/50 focus:border-teal-300/40",
    isRTL ? "text-right" : "text-left",
  ].join(" ");
}

export default function Apply() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const waNumber = "251946324040";
  const phoneDisplay = "+251 946 324 040";
  const email = "qubaforeignemployment@gmail.com";
  const address = "Addis Ababa, Ethiopia";

  const destinationOptions = useMemo(
    () => [
      { key: "sa", label: t("countries.sa") },
      { key: "uae", label: t("countries.uae") },
      { key: "qa", label: t("countries.qa") },
      { key: "kw", label: t("countries.kw") },
      { key: "bh", label: t("countries.bh") },
      { key: "om", label: t("countries.om") },
      { key: "jo", label: t("countries.jo") },
      { key: "lb", label: t("countries.lb") },
    ],
    [t]
  );

  const jobCategoryOptions = useMemo(
    () => [
      { key: "domestic", label: t("applySection.categories.domestic") },
      { key: "hospitality", label: t("applySection.categories.hospitality") },
      { key: "healthcare", label: t("applySection.categories.healthcare") },
      { key: "construction", label: t("applySection.categories.construction") },
      { key: "other", label: t("applySection.categories.other") },
    ],
    [t]
  );

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    whatsapp: "",
    destination: "",
    category: "",
    message: "",
    website: "", // honeypot (anti-spam)
  });

  const onChange = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();

    // simple anti-spam
    if (form.website) return;

    const text = [
      `New Application - QUBA`,
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `WhatsApp: ${form.whatsapp}`,
      `Email: ${form.email}`,
      `Destination: ${form.destination}`,
      `Category: ${form.category}`,
      `Message: ${form.message}`,
    ].join("\n");

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-[#eef6f5] py-24 sm:py-28 scroll-mt-24"
    >
      {/* Pattern background */}
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

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Application form card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            className="lg:col-span-7 rounded-2xl bg-[#083b35] border border-white/10 shadow-[0_28px_70px_rgba(2,20,18,0.22)]"
          >
            <div className="p-7 sm:p-8">
              <h2 className="text-[20px] sm:text-[22px] font-semibold text-white tracking-tight">
                {t("applySection.formTitle")}
              </h2>
              <p className="mt-1 text-[12px] text-white/70">
                {t("applySection.formSubtitle")}
              </p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                {/* Honeypot */}
                <input
                  value={form.website}
                  onChange={onChange("website")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field>
                    <Label>{t("applySection.fields.fullName")}</Label>
                    <input
                      required
                      value={form.fullName}
                      onChange={onChange("fullName")}
                      className={baseInputClass(isRTL)}
                      placeholder={t("applySection.placeholders.fullName")}
                    />
                  </Field>

                  <Field>
                    <Label>{t("applySection.fields.phone")}</Label>
                    <input
                      required
                      value={form.phone}
                      onChange={onChange("phone")}
                      className={baseInputClass(isRTL)}
                      placeholder={t("applySection.placeholders.phone")}
                      inputMode="tel"
                    />
                  </Field>

                  <Field>
                    <Label>{t("applySection.fields.email")}</Label>
                    <input
                      value={form.email}
                      onChange={onChange("email")}
                      className={baseInputClass(isRTL)}
                      placeholder={t("applySection.placeholders.email")}
                      type="email"
                    />
                  </Field>

                  <Field>
                    <Label>{t("applySection.fields.whatsapp")}</Label>
                    <input
                      value={form.whatsapp}
                      onChange={onChange("whatsapp")}
                      className={baseInputClass(isRTL)}
                      placeholder={t("applySection.placeholders.whatsapp")}
                      inputMode="tel"
                    />
                  </Field>

                  <Field>
                    <Label>{t("applySection.fields.destination")}</Label>
                    <select
                      required
                      value={form.destination}
                      onChange={onChange("destination")}
                      className={baseInputClass(isRTL)}
                    >
                      <option value="">
                        {t("applySection.placeholders.destination")}
                      </option>
                      {destinationOptions.map((o) => (
                        <option key={o.key} value={o.label}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field>
                    <Label>{t("applySection.fields.category")}</Label>
                    <select
                      required
                      value={form.category}
                      onChange={onChange("category")}
                      className={baseInputClass(isRTL)}
                    >
                      <option value="">
                        {t("applySection.placeholders.category")}
                      </option>
                      {jobCategoryOptions.map((o) => (
                        <option key={o.key} value={o.label}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field>
                  <Label>{t("applySection.fields.message")}</Label>
                  <textarea
                    value={form.message}
                    onChange={onChange("message")}
                    className={[baseInputClass(isRTL), "min-h-[110px] resize-none"].join(" ")}
                    placeholder={t("applySection.placeholders.message")}
                  />
                </Field>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full mt-2 rounded-lg bg-teal-600 hover:bg-teal-500 transition text-white text-[12px] font-semibold py-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                >
                  {t("applySection.submit")}
                </motion.button>

                <p className="text-[10px] text-white/50 text-center">
                  {t("applySection.note")}
                </p>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: Get in touch */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.08}
            className="lg:col-span-5"
          >
            <h3 className="text-[16px] font-semibold text-[#083b35]">
              {t("applySection.touchTitle")}
            </h3>
            <p className="mt-1 text-[12px] text-[#083b35]/60 max-w-sm">
              {t("applySection.touchSubtitle")}
            </p>

            <div className="mt-5 space-y-3">
              <div
                className={[
                  "flex items-start gap-3",
                  isRTL ? "flex-row-reverse text-right" : "",
                ].join(" ")}
              >
                <MapPin className="h-4 w-4 text-[#083b35] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] font-semibold text-[#083b35]">
                    {t("applySection.touch.address")}
                  </div>
                  <div className="text-[11px] text-[#083b35]/60">{address}</div>
                </div>
              </div>

              <div
                className={[
                  "flex items-start gap-3",
                  isRTL ? "flex-row-reverse text-right" : "",
                ].join(" ")}
              >
                <Phone className="h-4 w-4 text-[#083b35] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] font-semibold text-[#083b35]">
                    {t("applySection.touch.phone")}
                  </div>
                  <div className="text-[11px] text-[#083b35]/60" dir="ltr">
                    {phoneDisplay}
                  </div>
                </div>
              </div>

              <div
                className={[
                  "flex items-start gap-3",
                  isRTL ? "flex-row-reverse text-right" : "",
                ].join(" ")}
              >
                <Mail className="h-4 w-4 text-[#083b35] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] font-semibold text-[#083b35]">
                    {t("applySection.touch.email")}
                  </div>
                  <div className="text-[11px] text-[#083b35]/60">{email}</div>
                </div>
              </div>
            </div>

            <motion.a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#083b35] text-white py-3 text-[12px] font-semibold shadow-[0_22px_55px_rgba(2,20,18,0.18)] hover:bg-[#062b27] transition"
            >
              <MessageCircle className="h-4 w-4" />
              {t("applySection.touch.whatsappCta")}
            </motion.a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}