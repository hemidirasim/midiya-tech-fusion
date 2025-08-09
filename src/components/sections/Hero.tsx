import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/midiya-logo-white.png";
import { useI18n } from "@/i18n/i18n";
const Hero = () => {
  const {
    t
  } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({
    x: 50,
    y: 30
  });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 100;
      const y = (e.clientY - rect.top) / rect.height * 100;
      setPos({
        x,
        y
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
  const pillars = t("hero.pillars") as string[];
  return <section ref={ref} className="relative overflow-hidden h-screen">
      <div aria-hidden className="absolute inset-0 -z-10" style={{
      background: `linear-gradient(135deg, #8b5cf6, #06b6d4)`
    }} />
      <div className="container mx-auto flex flex-col items-center justify-center text-center h-full">
        <div className="flex justify-center mb-6">

        </div>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight animate-enter bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-2))] bg-clip-text text-transparent">
          {t("hero.title")}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
          {t("hero.desc")}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          
          <Button variant="outline" size="lg" asChild>
            <a href="#xidmetler">{t("hero.ctaSecondary")}</a>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
          {pillars.map(p => <div key={p} className="hover-scale">{p}</div>)}
        </div>
      </div>
    </section>;
};
export default Hero;