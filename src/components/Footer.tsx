import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-lg font-semibold text-foreground">
              Магомедбек Махмудов
            </span>
            <p className="text-muted-foreground mt-3 max-w-md text-sm">
              Персональные тренировки по боксу для всех уровней подготовки.
              От начинающих до соревнующихся спортсменов.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">
              Навигация
            </h4>
            <ul className="space-y-2">
              {[
                { label: "О тренере", href: "#about" },
                { label: "Программы", href: "#programs" },
                { label: "Цены", href: "#pricing" },
                { label: "Расписание", href: "#schedule" },
                { label: "Контакты", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-4">
              Контакты
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                coach@mahmudov.ru
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                г. Москва, ул. Спортивная, д. 15
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Магомедбек Махмудов. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/79991234567"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/mahmudov_boxing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Telegram"
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
