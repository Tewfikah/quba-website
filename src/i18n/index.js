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

      // (Optional) old servicesSection object (can stay)
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

      // ✅ dotted keys for Services section (because `services` is NAV string)
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

      // ✅ DESTINATIONS SECTION
      destinationsSection: {
        title: "Where We Place Ethiopian Talent",
        subtitle:
          "Active employer partnerships in 12+ countries across the Gulf and beyond",
        button: "View all destinations",
      },

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

      // ✅ ABOUT SECTION
      aboutSection: {
        kicker: "WHY QUBA",
        title: "Why Thousands of Ethiopians Trust QUBA",
        quote:
          "We don’t just find you a job. We build your pathway step by step, document by document, until you land safely.",
        team: {
          name: "QUBA Team",
          role: "Foreign Employment Specialists",
        },
        bullets: {
          b1: "Fully Licensed & Government Registered",
          b2: "No Upfront Hidden Fees Ever",
          b3: "Amharic-Speaking Advisors",
          b4: "Legal Contract Signed for Every Placement",
          b5: "Dedicated Support Team After Placement",
        },
      },

      // ✅ TESTIMONIALS SECTION
      testimonialsSection: {
        title: "Workers Who Found Their Path With QUBA",
        t1: {
          quote:
            "QUBA handled everything — my paperwork, contract, even orientation. I arrived in Riyadh feeling confident and prepared.",
          name: "Selamawit Tadesse",
          meta: "Placed in Saudi Arabia · Domestic Professional",
        },
        t2: {
          quote:
            "The team explained every step in Amharic. There were no surprises, no hidden fees. I trust them completely.",
          name: "Yonas Bekele",
          meta: "Placed in UAE · Hospitality",
        },
        t3: {
          quote:
            "Even after I started working in Doha, QUBA stayed in contact. When I had a contract question, they were there.",
          name: "Hanan Mohammed",
          meta: "Placed in Qatar · Healthcare Support",
        },
        t4: {
          quote:
            "Everything was legal and organized. The process was clear and the support team responded quickly.",
          name: "Selamawit Tadesse",
          meta: "Placed in Saudi Arabia · Domestic Professional",
        },
        t5: {
          quote:
            "Very professional communication and real employer verification. I recommend QUBA to anyone applying abroad.",
          name: "Yonas Bekele",
          meta: "Placed in UAE · Hospitality",
        },
      },

      // ✅ CONTACT CTA (center CTA section)
      contactSection: {
        title: "Ready to Start Your International Career?",
        subtitle:
          "Your verified opportunity is one application away. Our team will guide you from first consultation to successful placement.",
        button: "Begin Application Now",
        or: "Or WhatsApp us directly:",
        whatsapp: "WhatsApp",
      },

      // ✅ FAQ
      faqSection: {
        titleLine1: "Frequently Asked",
        titleLine2: "Questions",
        items: {
          q1: {
            q: "Is QUBA a licensed foreign employment agency in Ethiopia?",
            a: "Yes. QUBA is a licensed and government-registered foreign employment agency. We follow legal and documented procedures for every placement.",
          },
          q2: {
            q: "What documents do I need to apply?",
            a: "Typically: a valid ID/passport (if available), CV, photos, and any relevant certificates. Requirements may vary by destination and job type.",
          },
          q3: {
            q: "How long does the full process take?",
            a: "Timelines vary by country and employer, but we keep you updated at every stage from screening to visa processing and deployment.",
          },
          q4: {
            q: "Are there any fees I pay upfront?",
            a: "We clearly explain any costs before you proceed. We do not support hidden charges and we prioritize transparency.",
          },
          q5: {
            q: "Which countries can I work in through QUBA?",
            a: "We place workers across the Gulf and beyond depending on demand and verified employer partnerships.",
          },
          q6: {
            q: "What happens after I'm placed abroad?",
            a: "Our support continues after placement. We help with communication, renewals (where applicable), and guidance during your contract.",
          },
          q7: {
            q: "Can I apply if I have no prior international work experience?",
            a: "Yes. Many roles do not require prior overseas experience. We assess your profile and match you with suitable opportunities.",
          },
          q8: {
            q: "How do I verify a job offer is legitimate?",
            a: "Only accept offers processed through QUBA’s official channels. We provide verified employer details and legal documentation for every placement.",
          },
        },
      },

      // ✅ APPLY FORM + GET IN TOUCH
      applySection: {
        formTitle: "Start Your Application",
        formSubtitle:
          "Fill out the form and our team will reach out within 24 hours.",
        fields: {
          fullName: "Full Name *",
          phone: "Phone Number *",
          email: "Email",
          whatsapp: "WhatsApp Number",
          destination: "Desired Destination",
          category: "Job Category",
          message: "Message / Additional Info",
        },
        placeholders: {
          fullName: "Your full name",
          phone: "e.g. +251 9xx xxx xxx",
          email: "you@example.com",
          whatsapp: "e.g. +251 9xx xxx xxx",
          destination: "Select a country",
          category: "Select a category",
          message: "Tell us about your experience and preferred role...",
        },
        categories: {
          domestic: "Domestic Work",
          hospitality: "Hospitality",
          healthcare: "Healthcare Support",
          construction: "Construction / Labor",
          other: "Other",
        },
        submit: "Submit Application →",
        note: "Tip: When you submit, we’ll open WhatsApp with your details to send directly.",
        touchTitle: "Get in Touch",
        touchSubtitle:
          "Prefer to talk? Reach us directly through any of these channels.",
        touch: {
          address: "Address",
          phone: "Phone",
          email: "Email",
          whatsappCta: "Message us on WhatsApp →",
        },
      },

      // ✅ FOOTER (FIXED: at root level, NOT inside applySection)
      footerSection: {
        tagline: "Trusted Ethiopian Gateway to Global Employment.",
        quickLinks: "QUICK LINKS",
        ourServices: "OUR SERVICES",
        contact: "CONTACT",
        applyNow: "Apply Now",
        faq: "FAQ",
        credit: "Made by SHURUQ Enterprise",
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

      common: { learnMore: "ተጨማሪ ይወቁ" },

      heroTitle1: "የተረጋገጠ መንገድዎ",
      heroTitle2: "ወደ ዓለም አቀፍ ሥራ",
      heroSubtitle:
        "QUBA የኢትዮጵያ ባለሞያዎችን ከተረጋገጡ ዓለም አቀፍ አሰሪዎች ጋር በሰነድ የተሟላ፣ በህጋዊ ሂደት እና በባህላዊ ድጋፍ በእያንዳንዱ ደረጃ ያገናኛል።",

      stats: {
        workers: "የተቀጠሩ ሰራተኞች",
        countries: "መዳረሻ ሀገራት",
        services: "ዋና አገልግሎቶች",
        legal: "ህጋዊ ሂደት",
      },

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

      servicesSection: {
        kicker: "የምንሰራው",
        title: "ለተሳካ ዓለም አቀፍ መንቀሳቀስ የሚያስፈልግዎ ሁሉ",
        cards: {},
      },

      "services.kicker": "የምንሰራው",
      "services.title": "ለተሳካ ዓለም አቀፍ መንቀሳቀስ የሚያስፈልግዎ ሁሉ",

      "services.cards.overseas.title": "የውጭ ሀገር ስራ መመደብ",
      "services.cards.overseas.desc":
        "ከተረጋገጡ ዓለም አቀፍ አሰሪዎች ጋር ሙሉ ሂደት እርዳታ።",

      "services.cards.guidance.title": "ለተመራጮች መመሪያ እና ምክር",
      "services.cards.guidance.desc":
        "በእያንዳንዱ ደረጃ የግል መመሪያ እና ድጋፍ።",

      "services.cards.employer.title": "ከአሰሪ ጋር መ协调",
      "services.cards.employer.desc":
        "ከተመረጡ አሰሪዎች እና አጋር ድርጅቶች ጋር ቀጥታ መ协调።",

      "services.cards.legal.title": "ሰነዶች እና ህጋዊ ሂደት",
      "services.cards.legal.desc":
        "ቪዛ፣ ውል፣ ህክምና እና ማረጋገጫ ሰነዶችን ሙሉ በሙሉ ማስተናገድ።",

      "services.cards.prep.title": "የመነሻ አዘገጃጀት",
      "services.cards.prep.desc":
        "ኦሪየንቴሽን፣ ባህላዊ መመሪያ እና የጉዞ ዝግጅት።",

      "services.cards.support.title": "ከመቀጠር በኋላ ድጋፍ",
      "services.cards.support.desc":
        "በውልዎ ጊዜ ቀጣይ ድጋፍ እና እድሳት እርዳታ።",

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

      aboutSection: {
        kicker: "ለምን QUBA",
        title: "ሺዎች የኢትዮጵያውያን ለምን QUBAን ይተማመናሉ",
        quote:
          "ስራ ብቻ አንፈልግልዎትም፤ መንገድዎን ደረጃ በደረጃ፣ ሰነድ በሰነድ እስክትደርሱ ድረስ እንገንባለን።",
        team: { name: "የQUBA ቡድን", role: "የውጭ ስራ ባለሙያዎች" },
        bullets: {
          b1: "ሙሉ ፈቃድ ያለው እና በመንግስት የተመዘገበ",
          b2: "ምንም የተሰወረ ክፍያ በቅድሚያ የለም",
          b3: "አማርኛ የሚናገሩ አማካሪዎች",
          b4: "ለእያንዳንዱ መመደብ ህጋዊ ውል ይፈርማል",
          b5: "ከመቀጠር በኋላ የቀጣይ ድጋፍ ቡድን",
        },
      },

      testimonialsSection: {
        title: "ከQUBA ጋር መንገዳቸውን ያገኙ ሰራተኞች",
        t1: {
          quote:
            "QUBA ሁሉንም ነገር አዘጋጅቶልኝ — ሰነዶቼን፣ ውሌን እና ኦሪየንቴሽንን። ሪያድ በመድረሴ ራሴን ተዘጋጅቼ ሰማሁ።",
          name: "Selamawit Tadesse",
          meta: "በሳውዲ አረቢያ ተቀጥሯል · የቤት ስራ",
        },
        t2: {
          quote:
            "ቡድኑ እያንዳንዱን ደረጃ በአማርኛ በግልጽ አስረዳልኝ። ምንም ድንገተኛ ክፍያ አልነበረም።",
          name: "Yonas Bekele",
          meta: "በዩኤኢ ተቀጥሯል · ሆስፒታሊቲ",
        },
        t3: {
          quote:
            "ዶሃ ስራ ከጀመርኩ በኋላም QUBA ግንኙነት አልቋል። የውል ጥያቄ ሲኖረኝ ፈጣን መልስ ሰጡኝ።",
          name: "Hanan Mohammed",
          meta: "በኳታር ተቀጥሯል · የጤና ድጋፍ",
        },
        t4: {
          quote: "ሂደቱ ህጋዊ እና በስርዓት ነበር። ቡድኑ ፈጣን ምላሽ ይሰጣል።",
          name: "Selamawit Tadesse",
          meta: "በሳውዲ አረቢያ ተቀጥሯል · የቤት ስራ",
        },
        t5: {
          quote:
            "በጣም ሙያዊ ግንኙነት እና እውነተኛ የአሰሪ ማረጋገጫ አለ። ለውጭ ስራ ለሚያመለክቱ ሁሉ እመክራለሁ።",
          name: "Yonas Bekele",
          meta: "በዩኤኢ ተቀጥሯል · ሆስፒታሊቲ",
        },
      },

      contactSection: {
        title: "ዓለም አቀፍ ሙያዎን ለመጀመር ዝግጁ ነዎት?",
        subtitle:
          "የተረጋገጠ እድልዎ ከአንድ ማመልከቻ ብቻ ይለያል። ቡድናችን ከመጀመሪያ ምክክር እስከ ስኬታማ መቀጠር ድረስ ይመራዎታል።",
        button: "አሁን መመልከቻ ጀምር",
        or: "ወይም በዋትስአፕ ቀጥታ ያናግሩን:",
        whatsapp: "WhatsApp",
      },

      faqSection: {
        titleLine1: "ተደጋጋሚ የሚጠየቁ",
        titleLine2: "ጥያቄዎች",
        items: {
          q1: {
            q: "QUBA በኢትዮጵያ የተፈቀደ የውጭ ስራ ኤጀንሲ ነው?",
            a: "አዎ። QUBA ፈቃድ ያለው እና በመንግስት የተመዘገበ የውጭ ስራ ኤጀንሲ ነው። ሁሉም መመደብ በህጋዊ እና በሰነድ የተደገፈ ሂደት ይከናወናል።",
          },
          q2: {
            q: "ለመመልከት ምን ሰነዶች ያስፈልጋሉ?",
            a: "በአጠቃላይ፡ መታወቂያ/ፓስፖርት (ካለ)፣ CV፣ ፎቶ፣ እና ተዛማጅ ማረጋገጫ ሰነዶች።",
          },
          q3: {
            q: "ሙሉ ሂደቱ ምን ያህል ጊዜ ይወስዳል?",
            a: "ጊዜው በመዳረሻ ሀገር እና በአሰሪ ሂደት ይለያያል።",
          },
          q4: {
            q: "በቅድሚያ መክፈል ያለብኝ ክፍያ አለ?",
            a: "ማንኛውንም ወጪ ከመጀመርዎ በፊት በግልጽ እናብራራለን።",
          },
          q5: {
            q: "በQUBA በኩል ወደ የት ሀገራት መሄድ እችላለሁ?",
            a: "በግልፍ እና ከዚያ በላይ በተረጋገጡ አሰሪዎች መሰረት መመደብ እናደርጋለን።",
          },
          q6: {
            q: "ውጭ ከተቀጠርኩ በኋላ ምን ይሆናል?",
            a: "ድጋፋችን ከመቀጠር በኋላም ይቀጥላል።",
          },
          q7: {
            q: "የውጭ ልምድ ካልነበረኝ መመልከት እችላለሁ?",
            a: "አዎ። ብዙ ስራዎች የቀድሞ የውጭ ልምድ አይጠይቁም።",
          },
          q8: {
            q: "የስራ እድል እውነተኛ መሆኑን እንዴት እረጋግጣለሁ?",
            a: "በQUBA የተፈቀዱ መንገዶች ብቻ ይጠቀሙ።",
          },
        },
      },

      applySection: {
        formTitle: "መመልከቻዎን ጀምሩ",
        formSubtitle: "ቅጹን ይሙሉ እና ቡድናችን በ24 ሰዓት ውስጥ ይገናኝዎታል።",
        fields: {
          fullName: "ሙሉ ስም *",
          phone: "ስልክ ቁጥር *",
          email: "ኢሜይል",
          whatsapp: "WhatsApp ቁጥር",
          destination: "የሚፈልጉት መዳረሻ",
          category: "የስራ ዘርፍ",
          message: "መልዕክት / ተጨማሪ መረጃ",
        },
        placeholders: {
          fullName: "ሙሉ ስምዎ",
          phone: "ለምሳሌ፡ +251 9xx xxx xxx",
          email: "you@example.com",
          whatsapp: "ለምሳሌ፡ +251 9xx xxx xxx",
          destination: "ሀገር ይምረጡ",
          category: "ዘርፍ ይምረጡ",
          message: "ልምድዎን እና የሚፈልጉትን ስራ ይጻፉ...",
        },
        categories: {
          domestic: "የቤት ስራ",
          hospitality: "ሆስፒታሊቲ",
          healthcare: "የጤና ድጋፍ",
          construction: "ግንባታ / የእጅ ስራ",
          other: "ሌላ",
        },
        submit: "መመልከቻ ላክ →",
        note: "ማስታወሻ፡ ሲላኩ ዝርዝሮትን ይዞ WhatsApp ይከፈታል።",
        touchTitle: "አግኙን",
        touchSubtitle: "መነጋገር ትመርጣላችሁ? በእነዚህ መንገዶች ያግኙን።",
        touch: {
          address: "አድራሻ",
          phone: "ስልክ",
          email: "ኢሜይል",
          whatsappCta: "በWhatsApp መልዕክት ይላኩ →",
        },
      },

      // ✅ FOOTER (AM)
      footerSection: {
        tagline: "የኢትዮጵያውያንን ወደ ዓለም አቀፍ ስራ የሚያገናኝ የታመነ መንገድ።",
        quickLinks: "ፈጣን አገናኞች",
        ourServices: "አገልግሎቶች",
        contact: "አግኙን",
        applyNow: "መመልከቻ ይጀምሩ",
        faq: "FAQ",
        credit: "በSHURUQ Enterprise ተሰራ",
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

      common: { learnMore: "اعرف المزيد" },

      heroTitle1: "طريقك الموثوق إلى",
      heroTitle2: "العمل العالمي",
      heroSubtitle:
        "تربط QUBA المواهب الإثيوبية بأصحاب العمل الدوليين الموثوقين مع إجراءات قانونية ودعم ثقافي في كل خطوة.",

      stats: {
        workers: "تم توظيفهم",
        countries: "دول الوجهات",
        services: "الخدمات الأساسية",
        legal: "إجراءات قانونية",
      },

      process: {
        kicker: "العملية",
        title: "من التقديم إلى التوظيف بخمس خطوات واضحة",
        steps: {
          s1: { title: "استشارة ومراجعة الملف", desc: "نقيّم مهاراتك وأهدافك ومدى أهليتك للتوظيف الدولي." },
          s2: { title: "مطابقة الوظيفة والتنسيق مع صاحب العمل", desc: "نطابقك مع أصحاب عمل موثوقين ضمن شبكة شركائنا." },
          s3: { title: "الوثائق والإجراءات القانونية", desc: "إدارة التأشيرات والعقود والإجراءات الحكومية بالكامل." },
          s4: { title: "التحضير قبل السفر", desc: "توجيه وتدريب ثقافي وترتيبات السفر قبل المغادرة." },
          s5: { title: "التوظيف والدعم المستمر", desc: "دعم مستمر طوال مدة العقد." },
        },
      },

      "services.kicker": "ماذا نقدم",
      "services.title": "كل ما تحتاجه للانتقال الدولي بنجاح",

      "services.cards.overseas.title": "التوظيف في الخارج",
      "services.cards.overseas.desc":
        "خدمة شاملة للتوظيف مع أصحاب عمل دوليين موثوقين عبر عدة قطاعات.",

      "services.cards.guidance.title": "إرشاد واستشارات للمرشحين",
      "services.cards.guidance.desc":
        "نصائح مخصصة ودعم في كل مرحلة من رحلتك.",

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

      aboutSection: {
        kicker: "لماذا QUBA",
        title: "لماذا يثق آلاف الإثيوبيين بـ QUBA",
        quote:
          "نحن لا نجد لك عملاً فقط. نبني مسارك خطوة بخطوة، ووثيقة بوثيقة، حتى تصل بأمان.",
        team: { name: "فريق QUBA", role: "متخصصو التوظيف الخارجي" },
        bullets: {
          b1: "مرخّص بالكامل ومسجّل حكومياً",
          b2: "لا توجد رسوم مخفية مسبقاً",
          b3: "مستشارون يتحدثون الأمهرية",
          b4: "عقد قانوني لكل عملية توظيف",
          b5: "فريق دعم مخصص بعد التوظيف",
        },
      },

      testimonialsSection: {
        title: "عمّال وجدوا طريقهم مع QUBA",
        t1: { quote: "تكفلت QUBA بكل شيء — الأوراق والعقد وحتى التوجيه. وصلت إلى الرياض وأنا واثق ومستعد.", name: "Selamawit Tadesse", meta: "تم التوظيف في السعودية · عمل منزلي" },
        t2: { quote: "شرح الفريق كل خطوة بوضوح. لم تكن هناك مفاجآت أو رسوم مخفية. أثق بهم تماماً.", name: "Yonas Bekele", meta: "تم التوظيف في الإمارات · الضيافة" },
        t3: { quote: "حتى بعد أن بدأت العمل في الدوحة، بقيت QUBA على تواصل. عندما كان لدي سؤال حول العقد، كانوا موجودين.", name: "Hanan Mohammed", meta: "تم التوظيف في قطر · دعم صحي" },
        t4: { quote: "كل شيء كان قانونياً ومنظماً. العملية كانت واضحة وفريق الدعم يرد بسرعة.", name: "Selamawit Tadesse", meta: "تم التوظيف في السعودية · عمل منزلي" },
        t5: { quote: "تواصل احترافي وتحقق حقيقي من أصحاب العمل. أنصح بـ QUBA لكل من يتقدم للعمل خارجاً.", name: "Yonas Bekele", meta: "تم التوظيف في الإمارات · الضيافة" },
      },

      contactSection: {
        title: "هل أنت مستعد لبدء مسيرتك المهنية الدولية؟",
        subtitle:
          "فرصتك الموثوقة على بُعد طلب واحد. سيرشدك فريقنا من أول استشارة حتى التوظيف الناجح.",
        button: "ابدأ التقديم الآن",
        or: "أو تواصل معنا عبر واتساب مباشرة:",
        whatsapp: "WhatsApp",
      },

      faqSection: {
        titleLine1: "الأسئلة",
        titleLine2: "الشائعة",
        items: {
          q1: { q: "هل QUBA وكالة توظيف خارجي مرخصة في إثيوبيا؟", a: "نعم. QUBA وكالة مرخّصة ومسجّلة حكومياً، ونتبع إجراءات قانونية موثّقة لكل عملية توظيف." },
          q2: { q: "ما هي المستندات المطلوبة للتقديم؟", a: "عادةً: هوية/جواز (إن وُجد)، سيرة ذاتية، صور، وأي شهادات ذات صلة." },
          q3: { q: "كم تستغرق العملية كاملة؟", a: "تختلف المدة حسب الدولة وصاحب العمل، ونقوم بإطلاعك على كل خطوة." },
          q4: { q: "هل توجد رسوم أدفعها مسبقاً؟", a: "نوضح أي تكاليف قبل البدء. لا ندعم الرسوم المخفية ونلتزم بالشفافية." },
          q5: { q: "ما الدول المتاحة للعمل عبر QUBA؟", a: "نوفّر فرصاً في دول الخليج وما بعدها حسب الطلب وشراكات أصحاب العمل الموثوقة." },
          q6: { q: "ماذا يحدث بعد توظيفي في الخارج؟", a: "يستمر دعمنا بعد التوظيف، بما في ذلك التواصل والإرشاد." },
          q7: { q: "هل يمكنني التقديم بدون خبرة عمل دولية سابقة؟", a: "نعم. العديد من الوظائف لا تتطلب خبرة خارجية." },
          q8: { q: "كيف أتأكد أن عرض العمل حقيقي؟", a: "لا تقبل إلا العروض عبر قنوات QUBA الرسمية." },
        },
      },

      applySection: {
        formTitle: "ابدأ طلبك",
        formSubtitle: "املأ النموذج وسيتواصل فريقنا معك خلال 24 ساعة.",
        fields: {
          fullName: "الاسم الكامل *",
          phone: "رقم الهاتف *",
          email: "البريد الإلكتروني",
          whatsapp: "رقم واتساب",
          destination: "الوجهة المطلوبة",
          category: "فئة الوظيفة",
          message: "رسالة / معلومات إضافية",
        },
        placeholders: {
          fullName: "اسمك الكامل",
          phone: "مثال: +251 9xx xxx xxx",
          email: "you@example.com",
          whatsapp: "مثال: +251 9xx xxx xxx",
          destination: "اختر دولة",
          category: "اختر فئة",
          message: "أخبرنا عن خبرتك والوظيفة التي تفضلها...",
        },
        categories: {
          domestic: "عمل منزلي",
          hospitality: "الضيافة",
          healthcare: "دعم صحي",
          construction: "إنشاءات / أعمال يدوية",
          other: "أخرى",
        },
        submit: "إرسال الطلب →",
        note: "ملاحظة: عند الإرسال سنفتح واتساب مع بياناتك لإرسالها مباشرة.",
        touchTitle: "تواصل معنا",
        touchSubtitle: "تفضل المكالمة؟ تواصل معنا عبر أي قناة من هذه القنوات.",
        touch: {
          address: "العنوان",
          phone: "الهاتف",
          email: "البريد الإلكتروني",
          whatsappCta: "راسلنا على واتساب →",
        },
      },

      // ✅ FOOTER (AR)
      footerSection: {
        tagline: "بوابتك الإثيوبية الموثوقة نحو العمل العالمي.",
        quickLinks: "روابط سريعة",
        ourServices: "خدماتنا",
        contact: "تواصل",
        applyNow: "قدّم الآن",
        faq: "الأسئلة الشائعة",
        credit: "صنع بواسطة SHURUQ Enterprise",
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

  // important for dotted keys + mixed structures
  ignoreJSONStructure: true,
});

export default i18n;