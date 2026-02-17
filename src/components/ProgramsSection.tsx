import { motion } from "framer-motion";
import { User, Dumbbell, Medal, ArrowRight, Baby } from "lucide-react";

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
    icon: Baby,
    title: "Бокс для детей",
    description:
      "С 9 лет можно спокойно отдавать детей в бокс. Развитие реакции, дисциплины, уверенности и мышления.",
    features: [
      "Развитие координации и реакции",
      "Воспитание дисциплины",
      "Уверенность в себе",
      "Умение держать удар в жизни",
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

const kidsBoxingBenefits = [
  "Умение трудиться",
  "Держать слово",
  "Не ломаться при первых трудностях",
  "Уважать границы и правила",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

        {/* Kids Boxing Detailed Section */}
        <motion.div
          id="kids"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 scroll-mt-24"
        >
          <div className="text-center mb-10">
            <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
              Для родителей
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
              Почему так важно отдавать детей в бокс
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-boxing p-6 md:p-8"
            >
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg text-foreground font-medium">
                  Спорт в детстве — это не про медали. И даже не про профессию.
                  <span className="text-primary"> Это про фундамент.</span>
                </p>
                
                <p>
                  Ребёнок, который тренируется, учится терпеть. Учится ждать результат. 
                  Учится проигрывать и вставать. Он раньше других понимает: 
                  <em> ничего не даётся просто так.</em>
                </p>

                <p>
                  Меняется мышление. Он перестаёт бояться усилий. 
                  Перестаёт искать лёгкие пути. Начинает уважать труд — свой и чужой.
                </p>

                <p>
                  Спорт дисциплинирует. Не жёстко. А через привычку. 
                  Сегодня не хочется — но ты пришёл. Сделал. 
                  И вышел сильнее, чем зашёл.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-boxing p-6 md:p-8"
            >
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Такие дети <strong className="text-foreground">увереннее</strong>. 
                  Спокойнее в стрессах. Они лучше держат удар — и в зале, и в жизни.
                </p>

                <p className="text-foreground font-medium">
                  Даже если он не станет спортсменом, навыки останутся:
                </p>

                <ul className="space-y-2">
                  {kidsBoxingBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="text-lg text-foreground">
                    <strong>Цель — не сделать чемпиона. А вырастить сильного человека!</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <blockquote className="inline-block max-w-2xl bg-primary/10 border border-primary/20 rounded-lg p-6 md:p-8">
              <p className="text-lg md:text-xl text-foreground italic">
                «Дисциплина бьёт талант»
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Бокс — сложнейший вид спорта, для успеха в котором очень важно постоянство
              </p>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
