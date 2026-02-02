import { Phone, MapPin } from "lucide-react";

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

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
              <li>
                <a href="tel:+79652238444" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  +7 965 223 84 44
                </a>
              </li>
              <li>
                <a href="https://t.me/mmbekm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-primary"><TelegramIcon /></span>
                  @mmbekm
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                д. Марушкино, 2<br />
                Москва, НАО
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
              href="https://t.me/mmbekm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
