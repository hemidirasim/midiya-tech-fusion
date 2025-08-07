import logo from "@/assets/midiya-logo-white.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3" aria-label="Midiya ana səhifə">
          <img src={logo} alt="Midiya logo" className="h-8 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#xidmetler" className="story-link">Xidmətlər</a>
          <a href="#why" className="story-link">Üstünlüklər</a>
          <a href="#faq" className="story-link">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline">
            <a href="#xidmetler">Kəşf et</a>
          </Button>
          <Button asChild variant="hero">
            <a href="#elaqe">Təklif al</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
