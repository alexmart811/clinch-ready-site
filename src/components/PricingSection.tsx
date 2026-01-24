import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Trial Session",
    price: "25",
    period: "one time",
    description: "Perfect for trying out boxing training",
    features: [
      "60-minute session",
      "Fitness assessment",
      "Basic technique intro",
      "No commitment required",
    ],
    featured: false,
  },
  {
    name: "Monthly Package",
    price: "199",
    period: "per month",
    description: "Most popular for consistent progress",
    features: [
      "12 sessions per month",
      "Personalized training plan",
      "Progress tracking",
      "Nutrition guidance",
      "Priority scheduling",
    ],
    featured: true,
  },
  {
    name: "Single Session",
    price: "60",
    period: "per session",
    description: "Flexible option for busy schedules",
    features: [
      "60-minute session",
      "Customized workout",
      "Technique focus",
      "Book anytime",
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
            Investment
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Training Rates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Invest in yourself. Choose a plan that fits your commitment level
            and goals.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
                    Most Popular
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
                  <span className="text-muted-foreground text-lg">$</span>
                  <span className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
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
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
