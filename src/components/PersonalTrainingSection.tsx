import { motion } from "framer-motion";
import { User, Target, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Target,
    title: "Индивидуальный план",
    description: "Программа под ваши цели и уровень подготовки",
  },
  {
    icon: TrendingUp,
    title: "Быстрый прогресс",
    description: "100% внимания тренера — максимальная эффективность",
  },
  {
    icon: Clock,
    title: "Гибкое расписание",
    description: "Тренировки в удобное для вас время",
  },
];

const features = [
  "Коррекция техники в реальном времени",
  "Работа на лапах с тренером",
  "Видеоанализ ваших движений",
  "Подготовка к соревнованиям",
  "Фитнес-бокс и похудение",
  "Бокс для детей с 9 лет",
];

const PersonalTrainingSection = () => {
  return (
    <section id="personal" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
            Максимальный результат
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Персональные тренировки
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Индивидуальные занятия один на один с тренером. Полное внимание 
            вашей технике, вашим целям и вашему прогрессу.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-boxing p-6 text-center"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-boxing p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <User className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Формат 1 на 1
                </h3>
                <p className="text-muted-foreground">60 минут интенсива</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Персональная тренировка — это не просто занятие, это инвестиция 
              в себя. Вы получаете полное внимание тренера, мгновенную обратную 
              связь и программу, созданную специально для вас.
            </p>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card-boxing p-6 border-primary/50">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display text-lg font-bold text-foreground">
                  Разовое занятие
                </h4>
                <span className="font-display text-2xl font-bold text-primary">
                  6 000 ₽
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Идеально для первого знакомства с персональным форматом
              </p>
            </div>

            <div className="card-boxing p-6 glow-accent border-primary">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display text-lg font-bold text-foreground">
                  Абонемент 8 тренировок
                </h4>
                <span className="font-display text-2xl font-bold text-primary">
                  44 000 ₽
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                5 500 ₽ за тренировку • Экономия 4 000 ₽
              </p>
            </div>

            <div className="card-boxing p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display text-lg font-bold text-foreground">
                  Абонемент 12 тренировок
                </h4>
                <span className="font-display text-2xl font-bold text-primary">
                  60 000 ₽
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                5 000 ₽ за тренировку • Экономия 12 000 ₽
              </p>
            </div>

            <Button variant="hero" size="xl" className="w-full" asChild>
              <a href="#contact">Записаться на персональную</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTrainingSection;
