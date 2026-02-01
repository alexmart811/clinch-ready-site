import { Trophy, Users, Calendar, Award } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.jpg";

const stats = [
  { icon: Calendar, value: "15+", label: "Лет опыта" },
  { icon: Users, value: "500+", label: "Учеников" },
  { icon: Trophy, value: "50+", label: "Чемпионов" },
  { icon: Award, value: "12", label: "Сертификатов" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={coachPortrait}
              alt="Тренер Магомедбек Махмудов"
              className="w-full h-[450px] md:h-[550px] object-cover object-top rounded-lg"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-muted-foreground text-sm tracking-wide">
              О тренере
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-6">
              Магомедбек Махмудов
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Более 15 лет я посвятил боксу — от профессиональных выступлений
                до подготовки чемпионов. Бокс стал моей жизнью и призванием.
              </p>
              <p>
                Я уверен, что каждый заслуживает доступа к качественным тренировкам,
                независимо от уровня подготовки. Мой подход сочетает классическую
                школу бокса с современными методами спортивной науки.
              </p>
              <p>
                Сертифицированный тренер с лицензиями федераций бокса и
                международными сертификатами по спортивной подготовке.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-5 h-5 text-foreground mx-auto mb-2" />
                  <div className="text-2xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
