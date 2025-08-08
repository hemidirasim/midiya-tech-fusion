import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import SEOHead from "@/components/SEOHead";
import { Shield, Wrench, Users2, Zap } from "lucide-react";
import { useI18n } from "@/i18n/i18n";

const Why = () => {
  const { t } = useI18n();
  const items = t("why.items") as { title: string; desc: string }[];
  const icons = [Zap, Wrench, Shield, Users2];
  return (
    <section id="why" className="py-16 md:py-24">
      <div className="container mx-auto">
        <header className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">{t("why.header")}</h2>
          <p className="mt-3 text-muted-foreground">{t("why.sub")}</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc }, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article key={title} className="rounded-lg border p-6 bg-card/50">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--brand-muted))] text-[hsl(var(--brand))]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const StructuredData = () => {
  const { t, lang } = useI18n();
  const serviceTitles = (t("services.items") as { title: string }[]).map((s) => s.title);
  
  // Enhanced organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Midiya",
    url: "https://midiya.az",
    logo: "https://midiya.az/midiya-logo-white.png",
    description: lang === "en" 
      ? "Professional IT services company in Azerbaijan specializing in website development, mobile applications, ERP systems, and AI solutions."
      : "Azərbaycanda sayt sifarişi, mobil tətbiq hazırlanması, ERP proqramları və AI həlləri ilə məşğul olan peşəkar IT şirkəti.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AZ",
      addressLocality: "Baku"
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@midiya.az",
      contactType: "customer service"
    },
    sameAs: [
      "https://midiya.az"
    ]
  };

  // Enhanced service schema with specific IT services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://midiya.az",
    name: "Midiya",
    url: "https://midiya.az",
    description: lang === "en" 
      ? "Leading IT services provider in Azerbaijan offering website development, mobile app creation, ERP software, warehouse management systems, and AI solutions."
      : "Azərbaycanda aparıcı IT xidməti təminatçısı - sayt sifarişi, saytların yazılması, mobil tətbiq hazırlanması, ERP proqramı, anbar proqramı və AI həlləri.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AZ",
      addressLocality: "Baku"
    },
    telephone: "+994",
    email: "info@midiya.az",
    priceRange: "$$$",
    serviceArea: {
      "@type": "Country",
      name: "Azerbaijan"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "en" ? "IT Services" : "IT Xidmətləri",
      itemListElement: serviceTitles.map((title, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: title,
          description: title
        }
      }))
    }
  };

  // Software development specific schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: lang === "en" ? "Custom Software Development Services" : "Xüsusi Proqram Təminatı Xidmətləri",
    description: lang === "en"
      ? "We develop custom websites, mobile applications, ERP systems, warehouse management software, and AI-powered solutions."
      : "Biz xüsusi saytlar, mobil tətbiqlər, ERP sistemləri, anbar idarəetmə proqramları və AI əsaslı həllər hazırlayırıq.",
    applicationCategory: "BusinessApplication",
    operatingSystem: ["Web", "iOS", "Android", "Windows", "macOS"],
    offers: {
      "@type": "Offer",
      price: "Contact for quote",
      priceCurrency: "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (t("faq.items") as { q: string; a: string }[]).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "en" ? "Home" : "Ana səhifə",
        item: "https://midiya.az"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: lang === "en" ? "Services" : "Xidmətlər",
        item: "https://midiya.az#xidmetler"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Why />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <StructuredData />
    </div>
  );
};

export default Index;
