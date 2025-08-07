import logo from "@/assets/midiya-logo-white.png";

const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Midiya logo" className="h-7 w-auto" loading="lazy" />
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Midiya. Bütün hüquqlar qorunur.</span>
        </div>
        <nav className="flex gap-6 text-sm">
          <a href="#xidmetler" className="hover-scale">Xidmətlər</a>
          <a href="#faq" className="hover-scale">FAQ</a>
          <a href="#elaqe" className="hover-scale">Əlaqə</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
