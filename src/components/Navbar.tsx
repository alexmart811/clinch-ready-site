import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "О тренере" },
  { href: "#programs", label: "Программы" },
  { href: "#pricing", label: "Цены" },
  { href: "#schedule", label: "Расписание" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-lg font-semibold text-foreground">
            Магомедбек Махмудов
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" asChild>
              <a href="#contact">Записаться</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Меню"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Button size="default" asChild className="mt-2">
              <a href="#contact" onClick={() => setIsOpen(false)}>Записаться</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
