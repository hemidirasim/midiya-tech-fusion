import { useI18n } from "@/i18n/i18n";

const Clients = () => {
  const { t } = useI18n();
  const raw = t("clients.items");
  const items = Array.isArray(raw) ? (raw as { name: string; logo?: string }[]) : [];

  return (
    <section id="clients" className="py-16 md:py-24">
      <div className="container mx-auto">
        <header className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">{t("clients.header")}</h2>
          <p className="mt-3 text-muted-foreground">{t("clients.sub")}</p>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {items.map((c) => (
            <article key={c.name} className="rounded-lg border bg-card/50 p-4 flex flex-col items-center justify-center text-center">
              <img
                src={c.logo || "/placeholder.svg"}
                alt={`${c.name} logo`}
                loading="lazy"
                className="h-10 w-auto opacity-80"
              />
              <span className="mt-3 text-sm text-muted-foreground">{c.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
