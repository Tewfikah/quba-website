import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // NAVBAR
      home: "Home",
      about: "About",
      services: "Services",
      destinations: "Destinations",
      apply: "Apply Now",
      contact: "Contact",
      book: "Book a Consultation",

      // COMMON
      common: {
        learnMore: "Learn more",
      },

      // HERO
      heroTitle1: "Your Verified Path to",
      heroTitle2: "Global Employment",
      heroSubtitle:
        "QUBA connects Ethiopian talent with verified international employers fully documented, legally processed, and culturally supported at every step.",

      // STATS (Process section top bar)
      stats: {
        workers: "WORKERS PLACED",
        countries: "DESTINATION COUNTRIES",
        services: "CORE SERVICES",
        legal: "LEGAL PROCESS",
      },

      // PROCESS
      process: {
        kicker: "THE PROCESS",
        title: "From Application to Placement in 5 Clear Steps",
        steps: {
          s1: {
            title: "Consultation & Profile Review",
            desc: "We assess your skills, goals, and eligibility for international placement.",
          },
          s2: {
            title: "Job Matching & Employer Coordination",
            desc: "We match you with verified employers across our partner network.",
          },
          s3: {
            title: "Documentation & Legal Processing",
            desc: "Full handling of visas, contracts, and government paperwork.",
          },
          s4: {
            title: "Pre-Departure Preparation",
            desc: "Orientation, cultural training, and travel coordination.",
          },
          s5: {
            title: "Placement & Ongoing Support",
            desc: "Continued support throughout the duration of your contract.",
          },
        },
      },

      // (Optional) your old servicesSection object (can stay)
      servicesSection: {
        kicker: "WHAT WE DO",
        title: "Everything You Need for a Successful International Move",
        cards: {
          overseas: {
            title: "Overseas Employment Placement",
            desc: "End-to-end placement with verified international employers across multiple sectors.",
          },
          guidance: {
            title: "Candidate Guidance & Consultation",
            desc: "Personalized advice from our team at every stage of your journey.",
          },
          employer: {
            title: "Employer Coordination",
            desc: "Direct coordination with vetted employers and recruitment partners.",
          },
          legal: {
            title: "Documentation & Legal Processing",
            desc: "Visas, contracts, medicals, attestations—fully handled and legally compliant.",
          },
          prep: {
            title: "Pre-Departure Preparation",
            desc: "Orientation, cultural briefings, and travel logistics before you fly.",
          },
          support: {
            title: "Post-Placement Support",
            desc: "Continued assistance throughout your contract and renewals when needed.",
          },
        },
      },

      // ✅ IMPORTANT FIX:
      // Your Navbar already uses `services: "Services"` (string),
      // so we add these flat dot-keys so `t("services.title")` works.
      "services.kicker": "WHAT WE DO",
      "services.title": "Everything You Need for a Successful International Move",

      "services.cards.overseas.title": "Overseas Employment Placement",
      "services.cards.overseas.desc":
        "End-to-end placement with verified international employers across multiple sectors.",

      "services.cards.guidance.title": "Candidate Guidance & Consultation",
      "services.cards.guidance.desc":
        "Personalized advice from our team at every stage of your journey.",

      "services.cards.employer.title": "Employer Coordination",
      "services.cards.employer.desc":
        "Direct coordination with vetted employers and recruitment partners.",

      "services.cards.legal.title": "Documentation & Legal Processing",
      "services.cards.legal.desc":
        "Visas, contracts, medicals, attestations—fully handled and legally compliant.",

      "services.cards.prep.title": "Pre-Departure Preparation",
      "services.cards.prep.desc":
        "Orientation, cultural briefings, and travel logistics before you fly.",

      "services.cards.support.title": "Post-Placement Support",
      "services.cards.support.desc":
        "Continued assistance throughout your contract and renewals when needed.",

      // ✅ DESTINATIONS SECTION (no conflict with navbar key "destinations")
      destinationsSection: {
        title: "Where We Place Ethiopian Talent",
        subtitle:
          "Active employer partnerships in 12+ countries across the Gulf and beyond",
        button: "View all destinations",
      },

      // Country names used by Destination cards
      countries: {
        sa: "Saudi Arabia",
        uae: "UAE",
        qa: "Qatar",
        kw: "Kuwait",
        bh: "Bahrain",
        om: "Oman",
        jo: "Jordan",
        lb: "Lebanon",
      },
    },
  },

  am: {
    translation: {
      // NAVBAR
      home: "መነሻ",
      about: "ስለ እኛ",
      services: "አገልግሎቶች",
      destinations: "መዳረሻዎች",
      apply: "አሁን ያመልክቱ",
      contact: "አግኙን",
      book: "ምክክር ያዝ",

      // COMMON
      common: {
        learnMore: "ተጨማሪ ይወቁ",
      },

      // HERO
      heroTitle1: "የተረጋገጠ መንገድዎ",
      heroTitle2: "ወደ ዓለም አቀፍ ሥራ",
      heroSubtitle:
        "QUBA የኢትዮጵያ ባለሞያዎችን ከተረጋገጡ ዓለም አቀፍ አሰሪዎች ጋር በሰነድ የተሟላ፣ በህጋዊ ሂደት እና በባህላዊ ድጋፍ በእያንዳንዱ ደረጃ ያገናኛል።",

      // STATS
      stats: {
        workers: "የተቀጠሩ ሰራተኞች",
        countries: "መዳረሻ ሀገራት",
        services: "ዋና አገልግሎቶች",
        legal: "ህጋዊ ሂደት",
      },

      // PROCESS
      process: {
        kicker: "ሂደቱ",
        title: "ከማመልከቻ እስከ መቀጠር በ5 ግልጽ ደረጃዎች",
        steps: {
          s1: {
            title: "ምክክር እና ፕሮፋይል ግምገማ",
            desc: "ችሎታዎን፣ ግቦችዎን እና ለዓለም አቀፍ ስራ ብቁነትዎን እንገምግማለን።",
          },
          s2: {
            title: "የስራ ማጣመር እና ከአሰሪ ጋር መ协调",
            desc: "ከተረጋገጡ አሰሪዎች ጋር እንጣመራለን እና ሂደቱን እንቀናጅባለን።",
          },
          s3: {
            title: "ሰነዶች እና ህጋዊ ሂደት",
            desc: "ቪዛ፣ ውል እና የመንግስት ወረቀቶችን ሙሉ በሙሉ እንከታተላለን።",
          },
          s4: {
            title: "የመነሻ አዘገጃጀት",
            desc: "ኦሪየንቴሽን፣ ባህላዊ ስልጠና እና የጉዞ ማስተናገድ።",
          },
          s5: {
            title: "መቀጠር እና ቀጣይ ድጋፍ",
            desc: "በውልዎ ጊዜ ሙሉ ድጋፍ እንሰጣለን።",
          },
        },
      },

      // Keep your original object
      servicesSection: {
        kicker: "የምንሰራው",
        title: "ለተሳካ ዓለም አቀፍ መንቀሳቀስ የሚያስፈልግዎ ሁሉ",
        cards: {
          overseas: {
            title: "የውጭ ሀገር ስራ መመደብ",
            desc: "ከተረጋገጡ ዓለም አቀፍ አሰሪዎች ጋር ከመጀመሪያ እስከ መጨረሻ ድረስ ሙሉ እርዳታ።",
          },
          guidance: {
            title: "ለተመራጮች መመሪያ እና ምክር",
            desc: "በእያንዳንዱ ደረጃ የግል መመሪያ እና ድጋፍ።",
          },
          employer: {
            title: "ከአሰሪ ጋር መ协调",
            desc: "ከተመረጡ አሰሪዎች እና አጋር ድርጅቶች ጋር ቀጥታ መ协调።",
          },
          legal: {
            title: "ሰነዶች እና ህጋዊ ሂደት",
            desc: "ቪዛ፣ ውል፣ ህክምና እና ማረጋገጫ ሰነዶች በህጋዊ መንገድ ሙሉ ማስተናገድ።",
          },
          prep: {
            title: "የመነሻ አዘገጃጀት",
            desc: "ኦሪየንቴሽን፣ ባህላዊ መመሪያ እና የጉዞ ዝግጅት።",
          },
          support: {
            title: "ከመቀጠር በኋላ ድጋፍ",
            desc: "በውልዎ ጊዜ ቀጣይ ድጋፍ እና በፈለጉ ጊዜ እድሳት እርዳታ።",
          },
        },
      },

      // ✅ FIX: dotted keys for Services section
      "services.kicker": "የምንሰራው",
      "services.title": "ለተሳካ ዓለም አቀፍ መንቀሳቀስ የሚያስፈልግዎ ሁሉ",

      "services.cards.overseas.title": "የውጭ ሀገር ስራ መመደብ",
      "services.cards.overseas.desc":
        "ከተረጋገጡ ዓለም አቀፍ አሰሪዎች ጋር ከመጀመሪያ እስከ መጨረሻ ድረስ ሙሉ እርዳታ።",

      "services.cards.guidance.title": "ለተመራጮች መመሪያ እና ምክር",
      "services.cards.guidance.desc":
        "በእያንዳንዱ ደረጃ የግል መመሪያ እና ድጋፍ።",

      "services.cards.employer.title": "ከአሰሪ ጋር መ协调",
      "services.cards.employer.desc":
        "ከተመረጡ አሰሪዎች እና አጋር ድርጅቶች ጋር ቀጥታ መ协调።",

      "services.cards.legal.title": "ሰነዶች እና ህጋዊ ሂደት",
      "services.cards.legal.desc":
        "ቪዛ፣ ውል፣ ህክምና እና ማረጋገጫ ሰነዶች በህጋዊ መንገድ ሙሉ ማስተናገድ።",

      "services.cards.prep.title": "የመነሻ አዘገጃጀት",
      "services.cards.prep.desc":
        "ኦሪየንቴሽን፣ ባህላዊ መመሪያ እና የጉዞ ዝግጅት።",

      "services.cards.support.title": "ከመቀጠር በኋላ ድጋፍ",
      "services.cards.support.desc":
        "በውልዎ ጊዜ ቀጣይ ድጋፍ እና በፈለጉ ጊዜ እድሳት እርዳታ።",

      // ✅ DESTINATIONS SECTION
      destinationsSection: {
        title: "የኢትዮጵያውያንን ብቃት የምንመድብባቸው አገራት",
        subtitle: "በግልፍ እና ከዚያ በላይ በ12+ ሀገራት የሚገኙ አጋር አሰሪዎች",
        button: "ሁሉንም መዳረሻዎች ይመልከቱ",
      },

      countries: {
        sa: "ሳውዲ አረቢያ",
        uae: "ዩኤኢ",
        qa: "ኳታር",
        kw: "ኩዌት",
        bh: "ባህሬን",
        om: "ኦማን",
        jo: "ጆርዳን",
        lb: "ሊባኖስ",
      },
    },
  },

  ar: {
    translation: {
      // NAVBAR
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      destinations: "الوجهات",
      apply: "قدم الآن",
      contact: "اتصل بنا",
      book: "احجز استشارة",

      // COMMON
      common: {
        learnMore: "اعرف المزيد",
      },

      // HERO
      heroTitle1: "طريقك الموثوق إلى",
      heroTitle2: "العمل العالمي",
      heroSubtitle:
        "تربط QUBA المواهب الإثيوبية بأصحاب العمل الدوليين الموثوقين مع إجراءات قانونية ودعم ثقافي في كل خطوة.",

      // STATS
      stats: {
        workers: "تم توظيفهم",
        countries: "دول الوجهات",
        services: "الخدمات الأساسية",
        legal: "إجراءات قانونية",
      },

      // PROCESS
      process: {
        kicker: "العملية",
        title: "من التقديم إلى التوظيف بخمس خطوات واضحة",
        steps: {
          s1: {
            title: "استشارة ومراجعة الملف",
            desc: "نقيّم مهاراتك وأهدافك ومدى أهليتك للتوظيف الدولي.",
          },
          s2: {
            title: "مطابقة الوظيفة والتنسيق مع صاحب العمل",
            desc: "نطابقك مع أصحاب عمل موثوقين ضمن شبكة شركائنا.",
          },
          s3: {
            title: "الوثائق والإجراءات القانونية",
            desc: "إدارة التأشيرات والعقود والإجراءات الحكومية بالكامل.",
          },
          s4: {
            title: "التحضير قبل السفر",
            desc: "توجيه وتدريب ثقافي وتنسيق ترتيبات السفر.",
          },
          s5: {
            title: "التوظيف والدعم المستمر",
            desc: "دعم مستمر طوال مدة العقد.",
          },
        },
      },

      // Keep your original object
      servicesSection: {
        kicker: "ماذا نقدم",
        title: "كل ما تحتاجه للانتقال الدولي بنجاح",
        cards: {
          overseas: {
            title: "التوظيف في الخارج",
            desc: "خدمة شاملة للتوظيف مع أصحاب عمل دوليين موثوقين عبر عدة قطاعات.",
          },
          guidance: {
            title: "إرشاد واستشارات للمرشحين",
            desc: "نصائح مخصصة ودعم في كل مرحلة من رحلتك.",
          },
          employer: {
            title: "التنسيق مع أصحاب العمل",
            desc: "تنسيق مباشر مع أصحاب العمل والشركاء المعتمدين.",
          },
          legal: {
            title: "الوثائق والإجراءات القانونية",
            desc: "التأشيرات والعقود والفحوصات والتصديقات—بشكل قانوني ومتكامل.",
          },
          prep: {
            title: "التحضير قبل السفر",
            desc: "توجيه وتدريب ثقافي وترتيبات السفر قبل المغادرة.",
          },
          support: {
            title: "الدعم بعد التوظيف",
            desc: "دعم مستمر طوال مدة العقد وتجديداته عند الحاجة.",
          },
        },
      },

      // ✅ FIX: dotted keys for Services section
      "services.kicker": "ماذا نقدم",
      "services.title": "كل ما تحتاجه للانتقال الدولي بنجاح",

      "services.cards.overseas.title": "التوظيف في الخارج",
      "services.cards.overseas.desc":
        "خدمة شاملة للتوظيف مع أصحاب عمل دوليين موثوقين عبر عدة قطاعات.",

      "services.cards.guidance.title": "إرشاد واستشارات للمرشحين",
      "services.cards.guidance.desc": "نصائح مخصصة ودعم في كل مرحلة من رحلتك.",

      "services.cards.employer.title": "التنسيق مع أصحاب العمل",
      "services.cards.employer.desc":
        "تنسيق مباشر مع أصحاب العمل والشركاء المعتمدين.",

      "services.cards.legal.title": "الوثائق والإجراءات القانونية",
      "services.cards.legal.desc":
        "التأشيرات والعقود والفحوصات والتصديقات—بشكل قانوني ومتكامل.",

      "services.cards.prep.title": "التحضير قبل السفر",
      "services.cards.prep.desc":
        "توجيه وتدريب ثقافي وترتيبات السفر قبل المغادرة.",

      "services.cards.support.title": "الدعم بعد التوظيف",
      "services.cards.support.desc":
        "دعم مستمر طوال مدة العقد وتجديداته عند الحاجة.",

      // ✅ DESTINATIONS SECTION
      destinationsSection: {
        title: "أين نوظّف الكفاءات الإثيوبية",
        subtitle: "شراكات فعّالة مع أصحاب عمل في أكثر من 12 دولة في الخليج وما بعده",
        button: "عرض كل الوجهات",
      },

      countries: {
        sa: "السعودية",
        uae: "الإمارات",
        qa: "قطر",
        kw: "الكويت",
        bh: "البحرين",
        om: "عُمان",
        jo: "الأردن",
        lb: "لبنان",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "am", "ar"],
  interpolation: { escapeValue: false },
});

export default i18n;