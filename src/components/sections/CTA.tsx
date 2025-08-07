import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/i18n";

const CTA = () => {
  const { t } = useI18n();
  return (
    <section id="elaqe" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="rounded-xl border p-10 md:p-14 bg-gradient-to-r from-[hsl(var(--brand)/0.08)] to-[hsl(var(--brand-2)/0.08)]">
          <h3 className="font-display text-2xl md:text-3xl font-semibold">{t("cta.title")}</h3>
          <p className="mt-3 text-muted-foreground max-w-2xl">{t("cta.desc")}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <a href="mailto:info@midiya.az?subject=Midiya%20Inquiry">{t("cta.primary")}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#xidmetler">{t("cta.secondary")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
