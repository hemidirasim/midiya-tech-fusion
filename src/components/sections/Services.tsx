import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, Smartphone, ShoppingCart, LayoutDashboard, Server, Settings, Cloud,
  ShieldCheck, Cpu, Radio, Video, Bot, LineChart
} from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Veb və Mobil Həllər",
    bullets: [
      "Korporativ və e‑ticarət saytları",
      "Admin panel və idarəetmə",
      "Android/iOS tətbiqləri",
      "Masaüstü proqramlar",
      "UI/UX dizayn, prototip"
    ],
  },
  {
    icon: ShoppingCart,
    title: "Rəqəmsal Marketinq",
    bullets: [
      "SMM strategiya və kontent",
      "SEO audit və optimizasiya",
      "Google Ads, YouTube, SEM",
      "A/B test və dönüşüm",
      "Email marketinq, avtomatizasiya"
    ],
  },
  {
    icon: LayoutDashboard,
    title: "ERP, CRM və Avtomatlaşdırma",
    bullets: [
      "Satış, anbar, HR modulları",
      "Xüsusi dashboardlar",
      "Proses avtomatlaşdırması",
      "API və ödəniş inteqrasiyası"
    ],
  },
  {
    icon: Server,
    title: "IT İnfrastruktur",
    bullets: [
      "Server və şəbəkə (CCTV)",
      "Təhlükəsizlik sistemləri",
      "Outsource və 24/7 dəstək"
    ],
  },
  {
    icon: Cloud,
    title: "Bulud və Hosting",
    bullets: [
      "AWS, GCP, Azure",
      "VPS, domen, e‑poçt",
      "Backup və DR həlləri"
    ],
  },
  {
    icon: ShieldCheck,
    title: "Kibertəhlükəsizlik",
    bullets: [
      "Firewall, antivirus, VPN",
      "İstifadəçi hüquqlarının idarəsi",
      "Təhlükəsizlik auditi"
    ],
  },
  {
    icon: Cpu,
    title: "Hardware Dizayn və İstehsal",
    bullets: [
      "PCB dizaynı və istehsal",
      "Kontroller/SoC proqramlaşdırma",
      "Korpus və qəlib dizaynı",
      "Yığım və test"
    ],
  },
  {
    icon: Radio,
    title: "IoT Həllləri",
    bullets: [
      "Ağıllı cihazların qoşulması",
      "Sensor/aktuator inteqrasiyası",
      "Veb və mobil idarəetmə"
    ],
  },
  {
    icon: Video,
    title: "Canlı Yayım və Streaming",
    bullets: [
      "Özəl platformalar",
      "Arxiv və texniki dəstək",
      "Tədbir və konsert yayımı"
    ],
  },
  {
    icon: Bot,
    title: "Süni İntellekt və ML",
    bullets: [
      "Chatbot və avtomat cavab",
      "Axtarış/təklif sistemləri",
      "NLP, səs-mətn tanıma",
      "AI API inteqrasiyası"
    ],
  },
];

const Services = () => {
  return (
    <section id="xidmetler" className="py-16 md:py-24">
      <div className="container mx-auto">
        <header className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Geniş spektrli texnoloji xidmətlər</h2>
          <p className="mt-3 text-muted-foreground">Software‑dən hardware‑ə, sənaye həlllərindən AI‑a qədər bütün ehtiyaclar üçün vahid komanda.</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, bullets }) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
