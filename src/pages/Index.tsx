import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import { Shield, Wrench, Users2, Zap } from "lucide-react";

const Why = () => (
  <section id="why" className="py-16 md:py-24">
    <div className="container mx-auto">
      <header className="max-w-2xl mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">Niyə bizi seçməlisiniz?</h2>
        <p className="mt-3 text-muted-foreground">Fərdiləşdirilmiş yanaşma, yüksək keyfiyyət və uzunmüddətli əməkdaşlıq.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[{
          icon: Zap, title: "A‑dan Z‑yə", desc: "Dizayn, inkişaf, istehsal və dəstək — hamısı eyni komandadan."
        },{
          icon: Wrench, title: "Tam spektr", desc: "Software və hardware birlikdə — inteqrasiya olunmuş həlllər."
        },{
          icon: Shield, title: "Yüksək keyfiyyət", desc: "Müasir standartlar, təhlükəsizlik və performans."
        },{
          icon: Users2, title: "Əməkdaşlıq", desc: "Şəffaf proses və davamlı tərəfdaşlıq."
        }].map(({icon: Icon, title, desc}) => (
          <article key={title} className="rounded-lg border p-6 bg-card/50">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--brand-muted))] text-[hsl(var(--brand))]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Midiya Texnoloji Həllər",
    provider: {
      "@type": "Organization",
      name: "Midiya",
      url: "https://midiya.az"
    },
    areaServed: "AZ",
    serviceType: [
      "Veb və Mobil Həlllər",
      "Rəqəmsal Marketinq",
      "ERP/CRM və Avtomatlaşdırma",
      "IT İnfrastruktur",
      "Bulud və Hosting",
      "Kibertəhlükəsizlik",
      "Hardware və IoT",
      "Streaming",
      "AI və Machine Learning"
    ]
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Niyə Midiya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A‑dan Z‑yə tam spektr: dizayn, inkişaf, istehsal və dəstək. Software və hardware birlikdə."
        }
      },
      {
        "@type": "Question",
        name: "İcra müddəti nə qədərdir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MVP üçün 2‑6 həftə; kompleks sistemlər üçün mərhələli planlama."
        }
      }
    ]
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
