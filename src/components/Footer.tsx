import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="font-display text-2xl font-bold tracking-wider text-foreground">
              МАГОМЕДБЕК<span className="text-primary"> МАХМУДОВ</span>
            </a>
            <p className="text-muted-foreground mt-4 max-w-md">
              Измени свою жизнь через искусство бокса. Персональные тренировки
              для всех уровней — от начинающих до профессиональных бойцов.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Навигация
            </h4>
            <ul className="space-y-2">
              {[
                { label: "О тренере", href: "about" },
                { label: "Программы", href: "programs" },
                { label: "Цены", href: "pricing" },
                { label: "Расписание", href: "schedule" },
                { label: "Контакты", href: "contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                coach@boxingtrainer.ru
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                ул. Спортивная, 15<br />
                Москва
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Магомедбек Махмудов. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/magomedbekboxing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/79991234567"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
