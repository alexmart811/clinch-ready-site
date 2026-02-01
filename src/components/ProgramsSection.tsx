import { motion } from "framer-motion";
import { User, Users, Dumbbell, Medal, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: User,
    title: "Персональные тренировки",
    description:
      "Интенсивные индивидуальные занятия, адаптированные под ваши цели. Идеально для начинающих и опытных боксёров.",
    features: [
      "Индивидуальный план тренировок",
      "Коррекция техники",
      "Гибкое расписание",
      "Видеоанализ",
    ],
  },
  {
    icon: Users,
    title: "Групповые тренировки",
    description:
      "Энергичные групповые занятия для командной мотивации. Отлично подходят для кардио и изучения основ.",
    features: [
      "Малые группы (до 8 человек)",
      "Командная мотивация",
      "Доступные цены",
      "Регулярное расписание",
    ],
  },
  {
    icon: Dumbbell,
    title: "Фитнес-бокс",
    description:
      "Приведи себя в лучшую форму без выхода на ринг. Тренировки на основе бокса для общей физической подготовки.",
    features: [
      "Тренировка всего тела",
      "Снятие стресса",
      "Фокус на похудении",
      "Без контакта",
    ],
  },
  {
    icon: Medal,
    title: "Подготовка к соревнованиям",
    description:
      "Элитные тренировки для тех, кто готов выступать. Полная подготовка ко всем аспектам соревновательного бокса.",
    features: [
      "Боевая стратегия",
      "Спарринги",
      "Психологическая подготовка",
      "Консультации по питанию",
    ],
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
            Варианты тренировок
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Программы тренировок
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Выберите стиль тренировок, который соответствует вашим целям. Каждая
            программа создана, чтобы бросить вам вызов и изменить вас.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-boxing p-6 md:p-8 group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
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
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
