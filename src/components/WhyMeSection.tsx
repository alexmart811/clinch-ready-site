import { motion } from "framer-motion";
import { Heart, Users, Target, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Бокс — это моя жизнь",
    description:
      "Это не просто спорт, а то, что приносит мне подлинное удовольствие и наполняет каждый миг смыслом. В каждую тренировку вкладываю душу — физически и эмоционально, без остатка.",
  },
  {
    icon: Users,
    title: "Индивидуальный подход",
    description:
      "Я хорошо чувствую людей, поэтому без проблем нахожу подход к любому человеку. Переживаю и волнуюсь вместе с вами, но после каждой тренировки ощущаю радость.",
  },
  {
    icon: Target,
    title: "Понимание ваших целей",
    description:
      "Мне важно знать, для чего вы пришли в зал и какие у вас цели. Это позволяет выстроить тренировочный процесс максимально эффективно.",
  },
  {
    icon: TrendingUp,
    title: "Фокус на прогрессе",
    description:
      "Неважно, быстро человек растёт или шаг за шагом. Сам факт движения вперёд — вот что приносит настоящую радость. Хочу зажечь в вас ту же страсть и силу.",
  },
];

const WhyMeSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
            Мой подход
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Почему я твой тренер?!
          </h2>
        </motion.div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="card-boxing p-8 md:p-12 text-center relative">
            <div className="text-6xl text-primary/20 absolute top-4 left-6">"</div>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              Для меня бокс — это <strong className="text-primary">Жизнь!</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Я отдал ему 20 лет своей жизни: через пот и кровь, через бурю эмоций, 
              через жертвы и бесценное время. Мне очень важно обучать и передавать знания, 
              навеки зажечь в других ту же страсть и силу.
            </p>
            <div className="text-6xl text-primary/20 absolute bottom-4 right-6">"</div>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-boxing p-6 md:p-8 group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyMeSection;
