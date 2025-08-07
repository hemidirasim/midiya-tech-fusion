import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: lang === "en" ? "Midiya Technology Solutions" : "Midiya Texnoloji Həllər",
    provider: {
      "@type": "Organization",
      name: "Midiya",
      url: "https://midiya.az",
    },
    areaServed: "AZ",
    serviceType: serviceTitles,
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (t("faq.items") as { q: string; a: string }[]).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
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
