import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "az";

type Dict = Record<string, any>;

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => any;
};

const translations: Record<Lang, Dict> = {
  en: {
    brandName: "Midiya",
    nav: {
      services: "Services",
      advantages: "Why Us",
      faq: "FAQ",
      explore: "Explore",
      quote: "Get a Quote",
      homeAria: "Midiya homepage",
    },
    hero: {
      title: "Midiya — Software, Hardware & AI Technology Solutions",
      desc:
        "From design to production: web and mobile apps, ERP/CRM, industrial & IoT, cloud, cybersecurity, and AI‑powered intelligent systems.",
      ctaPrimary: "Get a quote",
      ctaSecondary: "View services",
      pillars: [
        "SaaS • E‑commerce",
        "ERP/CRM • Automation",
        "Cloud • DevOps",
        "AI • Analytics",
      ],
      logoAlt: "Midiya logo — technology solutions",
    },
    services: {
      header: "Comprehensive technology services",
      sub:
        "From software to hardware, from industrial solutions to AI — one team for all your needs.",
      items: [
        {
          title: "Web & Mobile Solutions",
          bullets: [
            "Corporate and e‑commerce websites",
            "Admin panels & management systems",
            "Android/iOS applications",
            "Desktop apps (Windows/macOS)",
            "UI/UX design & prototyping",
          ],
        },
        {
          title: "Digital Marketing",
          bullets: [
            "SMM strategy & content",
            "SEO audit & optimization",
            "Google Ads, YouTube, SEM",
            "A/B tests & conversion optimization",
            "Email marketing & automation",
          ],
        },
        {
          title: "ERP, CRM & Automation",
          bullets: [
            "Sales, inventory, HR modules",
            "Custom dashboards",
            "Process automation",
            "API & payment integrations",
          ],
        },
        {
          title: "IT Infrastructure",
          bullets: [
            "Servers & networks (CCTV)",
            "Security systems",
            "Outsource & 24/7 support",
          ],
        },
        {
          title: "Cloud & Hosting",
          bullets: [
            "AWS, GCP, Azure",
            "VPS, domain, email",
            "Backup & disaster recovery",
          ],
        },
        {
          title: "Cybersecurity",
          bullets: [
            "Firewall, antivirus, VPN",
            "Access management",
            "Security audits",
          ],
        },
        {
          title: "Hardware Design & Production",
          bullets: [
            "PCB design & manufacturing",
            "Controller/SoC programming",
            "Enclosure & mold design",
            "Assembly & testing",
          ],
        },
        {
          title: "IoT Solutions",
          bullets: [
            "Smart device connectivity",
            "Sensor/actuator integration",
            "Web & mobile control",
          ],
        },
        {
          title: "Live Streaming",
          bullets: [
            "Custom platforms",
            "Archiving & technical support",
            "Events and concerts",
          ],
        },
        {
          title: "Artificial Intelligence & ML",
          bullets: [
            "Chatbots & auto‑reply",
            "Search/recommendation systems",
            "NLP & speech‑to‑text",
            "AI API integrations",
          ],
        },
      ],
    },
    why: {
      header: "Why choose us?",
      sub: "Personalized approach, high quality, and long‑term collaboration.",
      items: [
        {
          title: "End‑to‑end",
          desc: "Design, development, production, and support — from a single team.",
        },
        {
          title: "Full spectrum",
          desc: "Software and hardware together — integrated solutions.",
        },
        {
          title: "High quality",
          desc: "Modern standards, security, and performance.",
        },
        {
          title: "Collaboration",
          desc: "Transparent process and long‑term partnership.",
        },
      ],
    },
    cta: {
      title: "Let's build your project together",
      desc:
        "We turn ideas into prototypes fast, and prototypes into production. We align technology with business outcomes.",
      primary: "Send email",
      secondary: "Back to services",
    },
    faq: {
      header: "Frequently asked questions",
      sub: "If your question is not listed, write to us: info@midiya.az",
      items: [
        { q: "Why Midiya?", a: "End‑to‑end services: design, development, production, and support. Software and hardware together." },
        { q: "How long does delivery take?", a: "Depends on scope. MVP in 2‑6 weeks; phased planning for complex systems." },
        { q: "How do you integrate AI solutions?", a: "Model selection for your infrastructure, API/edge integration, and protection of private data." },
        { q: "Do you provide support and maintenance?", a: "Yes. We offer flexible SLAs, monitoring, and 24/7 support options." },
        { q: "Do you sign NDA and DPA?", a: "Absolutely. We can sign NDA/DPA and follow your compliance requirements." },
        { q: "Which industries do you work with?", a: "Finance, retail, manufacturing, agriculture, media, education, and public sector." },
        { q: "What technologies do you use?", a: "We use modern stacks: React, Node.js, Python, Go, Rust, PostgreSQL, cloud (AWS/GCP/Azure), and embedded platforms for hardware." },
        { q: "Can you work with existing systems?", a: "Yes. We integrate with ERPs/CRMs, payment gateways, legacy services, and build APIs for interoperability." },
        { q: "How do you ensure security and compliance?", a: "Security by design, code reviews, vulnerability scans, encryption, RBAC, and compliance with local regulations." },
        { q: "How do you price projects?", a: "Fixed‑price for well‑defined scope; time & materials for evolving needs. We can start with a discovery workshop." },
      ],
    },
    clients: {
      header: "Our clients",
      sub: "Trusted by teams and brands.",
      items: [
        { name: "Azinvest", logo: "/placeholder.svg" },
        { name: "TechnoLab", logo: "/placeholder.svg" },
        { name: "AgroSystems", logo: "/placeholder.svg" },
        { name: "NovaBank", logo: "/placeholder.svg" },
        { name: "City Logistics", logo: "/placeholder.svg" },
        { name: "Green Energy", logo: "/placeholder.svg" },
      ],
    },
    quoteForm: {
      subject: "New quote request",
      title: "Request a quote",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      services: "Interested services",
      budget: "Estimated budget",
      budgetPlaceholder: "Select a budget",
      message: "Tell us about your project",
      submit: "Send request",
      successTitle: "Request prepared",
      successDesc: "Your email app will open. If not, copy the generated email.",
      errorTitle: "Submission failed",
      errorDesc: "Please check the fields and try again.",
      budgets: ["< $1,000", "$1,000–$5,000", "$5,000–$15,000", "$15,000–$50,000", "$50,000+"],
    },
    footer: {
      rights: "All rights reserved.",
      links: { services: "Services", faq: "FAQ", contact: "Contact" },
    },
  },
  az: {
    brandName: "Midiya",
    nav: {
      services: "Xidmətlər",
      advantages: "Üstünlüklər",
      faq: "FAQ",
      explore: "Kəşf et",
      quote: "Təklif al",
      homeAria: "Midiya ana səhifə",
    },
    hero: {
      title: "Midiya — Software, Hardware və AI Texnoloji Həllər",
      desc:
        "Layihələndirmədən istehsala qədər: veb və mobil tətbiqlər, ERP/CRM, sənaye və IoT, bulud, kibertəhlükəsizlik və AI əsaslı ağıllı sistemlər.",
      ctaPrimary: "Təklif al",
      ctaSecondary: "Xidmətlərə bax",
      pillars: [
        "SaaS • E‑ticarət",
        "ERP/CRM • Avtomatlaşdırma",
        "Bulud • DevOps",
        "AI • Analitika",
      ],
      logoAlt: "Midiya loqosu — texnoloji həllər",
    },
    services: {
      header: "Geniş spektrli texnoloji xidmətlər",
      sub:
        "Software‑dən hardware‑ə, sənaye həlllərindən AI‑a qədər bütün ehtiyaclar üçün vahid komanda.",
      items: [
        {
          title: "Veb və Mobil Həlllər",
          bullets: [
            "Korporativ və e‑ticarət saytları",
            "Admin panel və idarəetmə",
            "Android/iOS tətbiqləri",
            "Masaüstü proqramlar",
            "UI/UX dizayn, prototip",
          ],
        },
        {
          title: "Rəqəmsal Marketinq",
          bullets: [
            "SMM strategiya və kontent",
            "SEO audit və optimizasiya",
            "Google Ads, YouTube, SEM",
            "A/B test və dönüşüm",
            "Email marketinq, avtomatizasiya",
          ],
        },
        {
          title: "ERP, CRM və Avtomatlaşdırma",
          bullets: [
            "Satış, anbar, HR modulları",
            "Xüsusi dashboardlar",
            "Proses avtomatlaşdırması",
            "API və ödəniş inteqrasiyası",
          ],
        },
        {
          title: "IT İnfrastruktur",
          bullets: [
            "Server və şəbəkə (CCTV)",
            "Təhlükəsizlik sistemləri",
            "Outsource və 24/7 dəstək",
          ],
        },
        {
          title: "Bulud və Hosting",
          bullets: [
            "AWS, GCP, Azure",
            "VPS, domen, e‑poçt",
            "Backup və DR həlləri",
          ],
        },
        {
          title: "Kibertəhlükəsizlik",
          bullets: [
            "Firewall, antivirus, VPN",
            "İstifadəçi hüquqlarının idarəsi",
            "Təhlükəsizlik auditi",
          ],
        },
        {
          title: "Hardware Dizayn və İstehsal",
          bullets: [
            "PCB dizaynı və istehsal",
            "Kontroller/SoC proqramlaşdırma",
            "Korpus və qəlib dizaynı",
            "Yığım və test",
          ],
        },
        {
          title: "IoT Həllləri",
          bullets: [
            "Ağıllı cihazların qoşulması",
            "Sensor/aktuator inteqrasiyası",
            "Veb və mobil idarəetmə",
          ],
        },
        {
          title: "Canlı Yayım və Streaming",
          bullets: [
            "Özəl platformalar",
            "Arxiv və texniki dəstək",
            "Tədbir və konsert yayımı",
          ],
        },
        {
          title: "Süni İntellekt və ML",
          bullets: [
            "Chatbot və avtomat cavab",
            "Axtarış/təklif sistemləri",
            "NLP, səs‑mətn tanıma",
            "AI API inteqrasiyası",
          ],
        },
      ],
    },
    why: {
      header: "Niyə bizi seçməlisiniz?",
      sub: "Fərdiləşdirilmiş yanaşma, yüksək keyfiyyət və uzunmüddətli əməkdaşlıq.",
      items: [
        {
          title: "A‑dan Z‑yə",
          desc: "Dizayn, inkişaf, istehsal və dəstək — hamısı eyni komandadan.",
        },
        {
          title: "Tam spektr",
          desc: "Software və hardware birlikdə — inteqrasiya olunmuş həlllər.",
        },
        {
          title: "Yüksək keyfiyyət",
          desc: "Müasir standartlar, təhlükəsizlik və performans.",
        },
        {
          title: "Əməkdaşlıq",
          desc: "Şəffaf proses və davamlı tərəfdaşlıq.",
        },
      ],
    },
    cta: {
      title: "Layihənizi birlikdə inşa edək",
      desc:
        "Fikrinizi sürətlə prototipə, prototipi isə istehsala çeviririk. Texnologiyanı biznes nəticələrinə yönəldirik.",
      primary: "Email göndər",
      secondary: "Xidmətlərə qayıt",
    },
    faq: {
      header: "Tez‑tez verilən suallar",
      sub: "Əgər sualınız siyahıda yoxdursa, bizə yazın: info@midiya.az",
      items: [
        { q: "Niyə Midiya?", a: "A‑dan Z‑yə tam spektr: dizayn, inkişaf, istehsal və dəstək. Software və hardware birlikdə, yüksək texniki keyfiyyətlə." },
        { q: "İcra müddəti nə qədərdir?", a: "Layihənin ölçüsündən asılıdır. MVP üçün 2‑6 həftə, kompleks sistemlər üçün mərhələli planlama tətbiq edirik." },
        { q: "AI həllləri necə inteqrasiya olunur?", a: "Mövcud infrastrukturunuza uyğun model seçimi, API/edge inteqrasiyası və etik/özəl məlumatların qorunması ilə." },
        { q: "Dəstək və texniki xidmət göstərirsiniz?", a: "Bəli. Elastik SLA-lar, monitorinq və 24/7 dəstək seçimləri təklif edirik." },
        { q: "NDA və DPA imzalayırsınız?", a: "Əlbəttə. NDA/DPA imzalaya və uyğunluq tələblərinizə əməl edə bilərik." },
        { q: "Hansı sahələrlə işləyirsiniz?", a: "Maliyyə, retail, istehsalat, kənd təsərrüfatı, media, təhsil və dövlət sektoru." },
        { q: "Hansı texnologiyalardan istifadə edirsiniz?", a: "Müasir stack-lar: React, Node.js, Python, Go, Rust, PostgreSQL, bulud (AWS/GCP/Azure) və hardware üçün gömülü platformalar." },
        { q: "Mövcud sistemlərlə işləyə bilərsiniz?", a: "Bəli. ERP/CRM-lər, ödəniş şlüzləri, legacy servislər ilə inteqrasiya edir, uyğunlaşma üçün API-lər hazırlayırıq." },
        { q: "Təhlükəsizlik və uyğunluğu necə təmin edirsiniz?", a: "Dizayndan təhlükəsizlik, kod yoxlamaları, zəiflik skanları, şifrələmə, RBAC və lokal qanunvericiliyə uyğunluq." },
        { q: "Layihələri necə qiymətləndirirsiniz?", a: "Dəqiq tərifli sahə üçün sabit qiymət; dəyişən ehtiyaclar üçün time & materials. Başlanğıc üçün discovery workshop təklif edirik." },
      ],
    },
    clients: {
      header: "Müştərilərimiz",
      sub: "Komandalar və brendlərin etibarı.",
      items: [
        { name: "Azinvest", logo: "/placeholder.svg" },
        { name: "TechnoLab", logo: "/placeholder.svg" },
        { name: "AgroSystems", logo: "/placeholder.svg" },
        { name: "NovaBank", logo: "/placeholder.svg" },
        { name: "City Logistics", logo: "/placeholder.svg" },
        { name: "Green Energy", logo: "/placeholder.svg" },
      ],
    },
    quoteForm: {
      subject: "Yeni təklif sorğusu",
      title: "Təklif al",
      name: "Ad və soyad",
      email: "E‑poçt",
      phone: "Telefon",
      services: "Maraqlı olduğunuz xidmətlər",
      budget: "Təxmini büdcə",
      budgetPlaceholder: "Büdcəni seçin",
      message: "Layihənizdən bəhs edin",
      submit: "Sorğunu göndər",
      successTitle: "Sorğu hazırlandı",
      successDesc: "E‑poçt tətbiqiniz açılacaq. Açılmasa, generasiya olunan e‑poçtu kopyalayın.",
      errorTitle: "Göndərmə alınmadı",
      errorDesc: "Zəhmət olmasa xanaları yoxlayıb yenidən cəhd edin.",
      budgets: ["< 1,000 ₼", "1,000–5,000 ₼", "5,000–15,000 ₼", "15,000–50,000 ₼", "50,000+ ₼"],
    },
    footer: {
      rights: "Bütün hüquqlar qorunur.",
      links: { services: "Xidmətlər", faq: "FAQ", contact: "Əlaqə" },
    },
  },
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    return saved ?? "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => {
    const dict = translations[lang];
    return (path: string) => {
      const parts = path.split(".");
      let cur: any = dict;
      for (const p of parts) {
        if (cur && typeof cur === "object" && p in cur) {
          cur = cur[p];
        } else {
          return undefined;
        }
      }
      return cur;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
