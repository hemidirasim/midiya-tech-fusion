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
            radial-gradient(700px circle at ${pos.x}% ${pos.y}%, hsl(var(--brand-2)/0.28), transparent 60%),
            conic-gradient(from 180deg at 50% 10%, hsl(var(--brand)/0.12), transparent 30%),
            linear-gradient(to bottom, hsl(var(--brand)/0.10), transparent)
          `,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--foreground)/0.15) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, hsl(var(--brand)/0.6), transparent)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, hsl(var(--brand-2)/0.6), transparent)",
          }}
        />
      </div>
      <div className="container mx-auto pt-16 md:pt-24 pb-16 md:pb-24 text-center">
        <div className="flex justify-center mb-6">
          <img src={logo} alt={t("hero.logoAlt")} className="h-10 w-auto" />
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight animate-enter bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-2))] bg-clip-text text-transparent">
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
