import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="elaqe" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="rounded-xl border p-10 md:p-14 bg-gradient-to-r from-[hsl(var(--brand)/0.08)] to-[hsl(var(--brand-2)/0.08)]">
          <h3 className="font-display text-2xl md:text-3xl font-semibold">Layihənizi birlikdə inşa edək</h3>
          <p className="mt-3 text-muted-foreground max-w-2xl">Fikrinizi sürətlə prototipə, prototipi isə istehsala çeviririk. Texnologiyanı biznes nəticələrinə yönəldirik.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <a href="mailto:info@midiya.az?subject=Midiya%20Sor%C4%9Fu">Email göndər</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#xidmetler">Xidmətlərə qayıt</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
