import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About",
          services: "Services",
          destinations: "Destinations",
          apply: "Apply Now",
          contact: "Contact",
          book: "Book a Consultation",
          heroTitle1: "Your Verified Path to",
          heroTitle2: "Global Employment",
          heroSubtitle:
            "QUBA connects Ethiopian talent with verified international employers fully documented, legally processed, and culturally supported at every step.",
        },
      },
      am: {
        translation: {
          home: "መነሻ",
          about: "ስለ እኛ",
          services: "አገልግሎቶች",
          destinations: "መዳረሻዎች",
          apply: "አሁን ያመልክቱ",
          contact: "አግኙን",
          book: "ምክክር ያዝ",
          heroTitle1: "የተረጋገጠ መንገድዎ",
          heroTitle2: "ወደ ዓለም አቀፍ ሥራ",
          heroSubtitle:
            "QUBA የኢትዮጵያ ባለሞያዎችን ከተረጋገጡ ዓለም አቀፍ አቅጣጫዎች ጋር ያገናኛል።",
        },
      },
      ar: {
        translation: {
          home: "الرئيسية",
          about: "من نحن",
          services: "الخدمات",
          destinations: "الوجهات",
          apply: "قدم الآن",
          contact: "اتصل بنا",
          book: "احجز استشارة",
          heroTitle1: "طريقك الموثوق إلى",
          heroTitle2: "العمل العالمي",
          heroSubtitle:
            "تربط QUBA المواهب الإثيوبية بأصحاب العمل الدوليين الموثوقين بشكل قانوني ومدعوم ثقافياً.",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;