import { useI18n } from "@/i18n/i18n";
import React, { useState, useEffect } from "react";
import FadeCarousel from "@/components/ui/fade-carousel";

const Clients = () => {
  const { t } = useI18n();
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    // Dynamically import all logos from the public/logos directory
    const importLogos = async () => {
      const logoModules = import.meta.glob("/public/logos/*.{png,jpg,jpeg,svg,gif}");
      const logoPaths = Object.keys(logoModules).map((path) => path.replace("/public", ""));
      setLogos(logoPaths);
    };

    importLogos();
  }, []);

  const renderLogo = (logoPath: string) => (
    <div className="flex items-center justify-center p-8">
      <img
        src={logoPath}
        alt="Client logo"
        className="max-h-16 max-w-full object-contain opacity-80"
      />
    </div>
  );

  return (
    <section id="clients" className="py-16 md:py-24">
      <div className="container mx-auto">
        <header className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">{t("clients.header")}</h2>
          <p className="mt-3 text-muted-foreground">{t("clients.sub")}</p>
        </header>
        <div className="max-w-3xl mx-auto">
          {logos.length > 0 ? (
            <FadeCarousel 
              items={logos} 
              renderItem={renderLogo}
              className="h-32 flex items-center justify-center"
            />
          ) : (
            <div className="h-32 flex items-center justify-center">
              <div className="text-muted-foreground">Loading logos...</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
