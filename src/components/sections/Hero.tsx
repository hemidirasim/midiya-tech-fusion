import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/midiya-logo-white.png";

const Hero = () => {
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

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, hsl(var(--brand-2)/0.20), transparent 60%)`,
        }}
      />
      <div className="container mx-auto pt-16 md:pt-24 pb-16 md:pb-24 text-center">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Midiya logo" className="h-10 w-auto" />
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight animate-enter">
          Midiya — Software, Hardware və AI Texnoloji Həllər
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
          Layihələndirmədən istehsala qədər: veb və mobil tətbiqlər, ERP/CRM, sənaye və IoT,
          bulud, kibertəhlükəsizlik və AI əsaslı ağıllı sistemlər.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="hero" size="lg">Təklif al</Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#xidmetler">Xidmətlərə bax</a>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
          <div className="hover-scale">SaaS • E‑ticarət</div>
          <div className="hover-scale">ERP/CRM • Avtomatlaşdırma</div>
          <div className="hover-scale">Bulud • DevOps</div>
          <div className="hover-scale">AI • Analitika</div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[hsl(var(--brand)/0.08)] via-transparent to-transparent" />
    </section>
  );
};

export default Hero;
