import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import ionicLogo from "@/assets/ionic-logo.jpg";

const StickyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between px-4 py-3 md:px-8">
        <img src={ionicLogo} alt="IONIC Logo" className="h-10 md:h-12 object-contain" />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {[["solutions", "Solutions"], ["how-it-works", "How It Works"], ["products", "Products"], ["why-ionic", "Why IONIC"], ["contact", "Contact"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="hover:text-primary transition-colors">{label}</button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => scrollTo("book")} className="hidden sm:inline-flex gradient-orange text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Book a Free Consultation
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-foreground">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-3">
          {[["solutions", "Solutions"], ["how-it-works", "How It Works"], ["products", "Products"], ["why-ionic", "Why IONIC"], ["contact", "Contact"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left text-foreground py-2">{label}</button>
          ))}
          <button onClick={() => scrollTo("book")} className="w-full gradient-orange text-accent-foreground px-5 py-3 rounded-lg text-sm font-semibold">
            Book a Free Consultation
          </button>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
