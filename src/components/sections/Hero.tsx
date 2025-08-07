import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/midiya-logo-white.png";
import { useI18n } from "@/i18n/i18n";

const Hero = () => {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPos({ x, y });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const pillars = t("hero.pillars") as string[];

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(600px circle at ${pos.x}% ${pos.y}%, hsl(var(--brand-2)/0.22), transparent 60%),
            conic-gradient(from 200deg at 50% 15%, hsl(var(--brand)/0.10), transparent 25%),
            linear-gradient(to bottom, hsl(var(--brand)/0.08), transparent)
          `,
        }}
      />
      <div className="container mx-auto pt-16 md:pt-24 pb-16 md:pb-24 text-center">
        <div className="flex justify-center mb-6">
          <img src={logo} alt={t("hero.logoAlt")} className="h-10 w-auto" />
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight animate-enter">
          {t("hero.title")}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
          {t("hero.desc")}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="hero" size="lg">{t("hero.ctaPrimary")}</Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#xidmetler">{t("hero.ctaSecondary")}</a>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
          {pillars.map((p) => (
            <div key={p} className="hover-scale">{p}</div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[hsl(var(--brand)/0.08)] via-transparent to-transparent" />
    </section>
  );
};

export default Hero;
