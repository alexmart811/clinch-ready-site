import { motion } from "framer-motion";
import { Heart, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

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

        {/* Trial Training Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
              Первый шаг
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
              Пробная тренировка
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-boxing p-8 md:p-10">
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  <strong className="text-foreground">Не бойтесь ошибаться, не бойтесь пробовать.</strong> 
                  {" "}Бокс — это то, что нужно каждому человеку для здорового образа жизни и успеха.
                </p>

                <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                  <p className="italic text-foreground/90 text-lg">
                    «Даже если меч понадобится один раз в жизни, носить его нужно всегда»
                  </p>
                  <span className="text-sm text-muted-foreground mt-2 block">— самурайская мудрость</span>
                </blockquote>

                <p>
                  Каждый мужчина, каждый ребёнок должен заниматься боксом, чтобы чувствовать себя 
                  безопасно и уверенно. Опасность может прийти внезапно, и неподготовленность 
                  может стоить жизни.
                </p>

                <p className="text-foreground font-medium">
                  Когда вы приходите ко мне — вы учитесь, а ошибки — это часть обучения. Пробуйте смело!
                </p>

                <div className="border-t border-border pt-6 mt-6">
                  <p className="text-lg mb-2">
                    <strong className="text-foreground">Работа на лапах</strong> — высший пилотаж 
                    тренерского мастерства и показатель технической зрелости боксёра.
                  </p>
                  <p>
                    🥊 Это не развлечение, а самый эффективный тренажёр для переноса навыков в ринг.
                  </p>
                </div>
              </div>

              {/* Price Card */}
              <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">
                      Пробная тренировка
                    </div>
                    <div className="font-display text-4xl font-bold text-foreground">
                      2 500 ₽
                    </div>
                  </div>
                  <Button variant="hero" size="xl" asChild>
                    <a href="#contact">Записаться</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMeSection;
