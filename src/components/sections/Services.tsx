import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, Smartphone, ShoppingCart, LayoutDashboard, Server, Settings, Cloud,
  ShieldCheck, Cpu, Radio, Video, Bot, LineChart
} from "lucide-react";
import { useI18n } from "@/i18n/i18n";

const iconList = [
  Code2,
  ShoppingCart,
  LayoutDashboard,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  Radio,
  Video,
  Bot,
];

const Services = () => {
  const { t } = useI18n();
  const items = t("services.items") as { title: string; bullets: string[] }[];
  return (
    <section id="xidmetler" className="py-16 md:py-24">
      <div className="container mx-auto">
        <header className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">{t("services.header")}</h2>
          <p className="mt-3 text-muted-foreground">{t("services.sub")}</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, bullets }, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <Card key={title} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--brand-muted))] text-[hsl(var(--brand))]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
