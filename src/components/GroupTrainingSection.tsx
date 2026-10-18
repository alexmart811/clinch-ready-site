import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Малые группы",
  "Командная мотивация",
  "Регулярное расписание",
  "Подходит для начинающих",
  "Кардио и техника",
  "Изучение основ бокса",
];

const GroupTrainingSection = () => {
  return (
    <section id="group" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
              Вместе сильнее
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Групповые тренировки
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Энергичные групповые занятия для командной мотивации. Отлично 
              подходят для кардио и изучения основ бокса. Тренируйтесь в компании 
              единомышленников!
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
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

            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Записаться на групповую</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="card-boxing p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Групповой формат
                  </h3>
                  <p className="text-muted-foreground">тренировки в группе</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Групповые тренировки — отличный способ начать заниматься боксом. 
                  Вы получаете энергию от группы, мотивацию от партнёров и 
                  качественную базовую подготовку.
                </p>
                <p>
                  Занятия включают разминку, работу над техникой, упражнения 
                  на выносливость и координацию. Подходит для любого уровня 
                  подготовки.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-foreground font-medium">
                  Узнайте подробности и актуальное расписание — запишитесь на групповую тренировку!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GroupTrainingSection;
