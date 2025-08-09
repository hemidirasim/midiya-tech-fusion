import logo from "@/assets/logo.png";
import { useI18n } from "@/i18n/i18n";

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt={t("hero.logoAlt")} className="h-7 w-auto" loading="lazy" />
        </div>
        <nav className="flex gap-6 text-sm">
          <a href="#xidmetler" className="hover-scale">{t("footer.links.services")}</a>
          <a href="#faq" className="hover-scale">{t("footer.links.faq")}</a>
          <a href="#elaqe" className="hover-scale">{t("footer.links.contact")}</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
