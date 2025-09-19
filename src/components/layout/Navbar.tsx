import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useI18n } from "@/i18n/i18n";

const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3" aria-label={t("nav.homeAria")}>
          <img src={logo} alt={t("hero.logoAlt")} className="h-8 w-auto" />
        </a>
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#xidmetler" className="story-link">{t("nav.services")}</a>
          <a href="#clients" className="story-link">{t("nav.clients")}</a>
          <a href="#why" className="story-link">{t("nav.advantages")}</a>
          <a href="#faq" className="story-link">{t("nav.faq")}</a>
        </div>
        <div className="flex items-center gap-3">
          {/* Desktop language switcher */}
          <div className="hidden md:flex items-center gap-1" role="group" aria-label="Language switcher">
            <Button variant={lang === "en" ? "secondary" : "outline"} size="sm" onClick={() => setLang("en")}>EN</Button>
            <Button variant={lang === "az" ? "secondary" : "outline"} size="sm" onClick={() => setLang("az")}>AZ</Button>
          </div>
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild variant="hero">
              <a href="#elaqe">{t("nav.quote")}</a>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] sm:max-w-sm">
                <nav className="mt-4 flex flex-col gap-4 text-base">
                  <SheetClose asChild>
                    <a href="#xidmetler" className="story-link">{t("nav.services")}</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#clients" className="story-link">{t("nav.clients")}</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#why" className="story-link">{t("nav.advantages")}</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#faq" className="story-link">{t("nav.faq")}</a>
                  </SheetClose>
                </nav>
                <div className="mt-6 flex items-center gap-2" role="group" aria-label="Language switcher">
                  <SheetClose asChild>
                    <Button variant={lang === "en" ? "secondary" : "outline"} size="sm" onClick={() => setLang("en")}>EN</Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant={lang === "az" ? "secondary" : "outline"} size="sm" onClick={() => setLang("az")}>AZ</Button>
                  </SheetClose>
                </div>
                <div className="mt-6">
                  <SheetClose asChild>
                    <Button asChild className="w-full" variant="hero">
                      <a href="#elaqe">{t("nav.quote")}</a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
