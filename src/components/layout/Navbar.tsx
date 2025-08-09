import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/i18n";

const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3" aria-label={t("nav.homeAria")}>
          <img src={logo} alt={t("hero.logoAlt")} className="h-8 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#xidmetler" className="story-link">{t("nav.services")}</a>
          <a href="#why" className="story-link">{t("nav.advantages")}</a>
          <a href="#faq" className="story-link">{t("nav.faq")}</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1" role="group" aria-label="Language switcher">
            <Button variant={lang === "en" ? "secondary" : "outline"} size="sm" onClick={() => setLang("en")}>EN</Button>
            <Button variant={lang === "az" ? "secondary" : "outline"} size="sm" onClick={() => setLang("az")}>AZ</Button>
          </div>
          <Button asChild variant="hero"> 
            <a href="#elaqe">{t("nav.quote")}</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
