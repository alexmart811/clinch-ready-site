import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Пробная тренировка",
    price: "1 500",
    period: "разово",
    description: "Знакомство с тренером и форматом занятий",
    features: [
      "60 минут",
      "Оценка физической формы",
      "Введение в технику",
      "Без обязательств",
    ],
    featured: false,
  },
  {
    name: "Месячный абонемент",
    price: "12 000",
    period: "в месяц",
    description: "Оптимальный вариант для регулярных занятий",
    features: [
      "12 тренировок в месяц",
      "Персональный план",
      "Отслеживание прогресса",
      "Рекомендации по питанию",
      "Приоритетная запись",
    ],
    featured: true,
  },
  {
    name: "Разовая тренировка",
    price: "3 000",
    period: "за занятие",
    description: "Гибкий вариант для занятых людей",
    features: [
      "60 минут",
      "Индивидуальная программа",
      "Работа над техникой",
      "Запись в любое время",
    ],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-muted-foreground text-sm tracking-wide">
            Стоимость
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mt-2">
            Цены на тренировки
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Инвестируйте в себя. Выберите подходящий формат.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`card-minimal p-6 flex flex-col ${
                plan.featured ? "ring-2 ring-foreground" : ""
              }`}
            >
              {plan.featured && (
                <div className="text-center mb-4">
                  <span className="bg-foreground text-background px-3 py-1 rounded-full text-xs font-medium">
                    Популярный выбор
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-semibold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">₽</span>
                </div>
                <span className="text-muted-foreground text-sm">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#contact">Записаться</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
