import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Пробное занятие",
    price: "2500",
    period: "разово",
    description: "Идеально, чтобы попробовать тренировки по боксу",
    features: [
      "60 минут",
      "Оценка физической формы",
      "Введение в технику",
      "Без обязательств",
    ],
    featured: false,
  },
  {
    name: "Разовое занятие",
    price: "5000",
    period: "за занятие",
    description: "Персональная тренировка один на один",
    features: [
      "60 минут",
      "Индивидуальная тренировка",
      "Работа на лапах",
      "Фокус на технике",
    ],
    featured: true,
  },
  {
    name: "Тренировка в паре",
    price: "3500",
    period: "с человека",
    description: "Занятие для двоих — выгоднее вместе",
    features: [
      "60 минут",
      "2 человека",
      "Работа в паре",
      "Спарринг с партнёром",
    ],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
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
            Стоимость
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Цены на тренировки
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Инвестируйте в себя. Выберите план, который соответствует вашим
            целям и уровню подготовки.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative card-boxing p-6 md:p-8 flex flex-col ${
                plan.featured
                  ? "border-primary glow-accent scale-105 z-10"
                  : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-display uppercase tracking-wider">
                    <Star className="w-3 h-3" />
                    Популярный
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-lg">₽</span>
                </div>
                <span className="text-muted-foreground text-sm">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "hero" : "heroOutline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contact">Записаться</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
