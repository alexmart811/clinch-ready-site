import { User, Users, Dumbbell, Medal, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: User,
    title: "Персональные тренировки",
    description:
      "Индивидуальные занятия, адаптированные под ваши цели. Подходит для начинающих и опытных боксёров.",
    features: [
      "Персональный план тренировок",
      "Работа над техникой",
      "Гибкое расписание",
      "Видеоанализ",
    ],
  },
  {
    icon: Users,
    title: "Групповые тренировки",
    description:
      "Энергичные групповые занятия для развития выносливости и освоения базовой техники.",
    features: [
      "Малые группы (до 8 человек)",
      "Командная мотивация",
      "Доступные цены",
      "Фиксированное расписание",
    ],
  },
  {
    icon: Dumbbell,
    title: "Фитнес-бокс",
    description:
      "Тренировки для тех, кто хочет быть в форме без выхода на ринг. Боксёрские упражнения для всего тела.",
    features: [
      "Полноценная тренировка",
      "Снятие стресса",
      "Снижение веса",
      "Без контактного спарринга",
    ],
  },
  {
    icon: Medal,
    title: "Подготовка к соревнованиям",
    description:
      "Профессиональная подготовка для тех, кто готов выступать. Комплексный подход к боевой подготовке.",
    features: [
      "Тактика боя",
      "Спарринги",
      "Психологическая подготовка",
      "Рекомендации по питанию",
    ],
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-muted-foreground text-sm tracking-wide">
            Направления
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mt-2">
            Программы тренировок
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Выберите формат занятий, который подходит именно вам.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="card-minimal p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <program.icon className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
