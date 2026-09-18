import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logoIcon from "../assets/logo-icon.png";
import patternBg from "../assets/image.png";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-[11px] text-white/70 hover:text-teal-200 transition"
    >
      {children}
    </a>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="h-8 w-8 rounded-full border border-white/15 bg-white/5 grid place-items-center text-white/80 hover:text-white hover:bg-white/10 hover:border-white/25 transition"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  const address = "Addis Ababa, Ethiopia";
  const phone = "+251 946 324 040";
  const email = "qubaforeignemployment@gmail.com";

  return (
    <footer className="relative overflow-hidden">
      {/* Background pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url("${patternBg}")`,
            backgroundRepeat: "repeat",
            backgroundSize: "520px",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#083b35]/85" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10"
        >
          {/* Column 1 */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logoIcon} alt="QUBA" className="h-10 w-auto" />
              <div className="leading-tight">
                <div className="text-white text-xl font-semibold tracking-wide">
                  QUBA
                </div>
                <div className="text-[9px] tracking-[0.25em] text-white/60">
                  FOREIGN EMPLOYMENT <br />
                  AGENT PLC
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-teal-200/80 max-w-sm">
              {t("footerSection.tagline")}
            </p>

            <div className="mt-5 flex items-center gap-2">
              <SocialIcon href="#" label="Facebook">
                <FaFacebookF size={14} />
              </SocialIcon>
              <SocialIcon href="#" label="X">
                <FaXTwitter size={14} />
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <FaInstagram size={14} />
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <FaLinkedinIn size={14} />
              </SocialIcon>
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
              {t("footerSection.quickLinks")}
            </h4>

            <div className="mt-4 flex flex-col gap-2">
              <FooterLink href="#home">{t("nav.home")}</FooterLink>
              <FooterLink href="#about">{t("nav.about")}</FooterLink>
              <FooterLink href="#services">{t("nav.services")}</FooterLink>
              <FooterLink href="#destinations">{t("nav.destinations")}</FooterLink>
              <FooterLink href="#apply">{t("nav.apply")}</FooterLink>
              <FooterLink href="#contact">{t("nav.contact")}</FooterLink>
              <FooterLink href="#faq">{t("nav.faq")}</FooterLink>
            </div>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
              {t("footerSection.ourServices")}
            </h4>

            <div className="mt-4 flex flex-col gap-2">
              <span className="text-[11px] text-teal-200/80">
                {t("services.cards.overseas.title")}
              </span>
              <span className="text-[11px] text-teal-200/80">
                {t("services.cards.guidance.title")}
              </span>
              <span className="text-[11px] text-teal-200/80">
                {t("services.cards.employer.title")}
              </span>
              <span className="text-[11px] text-teal-200/80">
                {t("services.cards.legal.title")}
              </span>
              <span className="text-[11px] text-teal-200/80">
                {t("services.cards.prep.title")}
              </span>
              <span className="text-[11px] text-teal-200/80">
                {t("services.cards.support.title")}
              </span>
            </div>
          </div>

          {/* Column 4 */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
              {t("footerSection.contact")}
            </h4>

            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2 text-[11px] text-teal-200/80">
                <MapPin className="h-4 w-4 mt-0.5 text-teal-200" />
                <span>{address}</span>
              </div>

              <div className="flex items-start gap-2 text-[11px] text-teal-200/80">
                <Phone className="h-4 w-4 mt-0.5 text-teal-200" />
                <span dir="ltr">{phone}</span>
              </div>

              <div className="flex items-start gap-2 text-[11px] text-teal-200/80">
                <Mail className="h-4 w-4 mt-0.5 text-teal-200" />
                <span className="break-all">{email}</span>
              </div>
            </div>

            <a
              href="#apply"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-white text-[#083b35] px-5 py-2 text-[11px] font-semibold shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:bg-teal-100 transition"
            >
              {t("footerSection.applyNow")}
            </a>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-white/15" />

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-white/55">
            © {new Date().getFullYear()} QUBA Foreign Employment Agency PLC.
          </p>
          <p className="text-[10px] text-white/45">
            {t("footerSection.credit")}
          </p>
        </div>
      </div>
    </footer>
  );
}