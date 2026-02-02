import { motion } from "framer-motion";
import { Trophy, Swords, Medal, Award, Calendar, Star } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.jpg";

const stats = [
  { icon: Calendar, value: "15", label: "Лет в боксе" },
  { icon: Swords, value: "200", label: "Боёв" },
  { icon: Trophy, value: "196", label: "Побед" },
  { icon: Award, value: "МСМК", label: "Разряд" },
  { icon: Star, value: "3", label: "Проф. боя" },
  { icon: Medal, value: "3", label: "Проф. победы" },
];

const achievements = [
  {
    title: "Чемпион мира",
    year: "2015",
    icon: "🌍",
  },
  {
    title: "Чемпион России",
    year: "2014, 2015",
    icon: "🇷🇺",
  },
  {
    title: "Чемпион Москвы",
    year: "2013–2016",
    icon: "🏆",
  },
  {
    title: "Чемпион ВДВ",
    year: "2021",
    icon: "⭐",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={coachPortrait}
                alt="Тренер Магомедбек Махмудов"
                className="w-full h-[500px] md:h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
              О тренере
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Махмудов Магомедбек
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Мастер спорта международного класса</strong> по боксу. 
                За 15 лет в спорте провёл 200 боёв с 196 победами — один из лучших 
                показателей среди действующих тренеров.
              </p>
              <p>
                Многократный чемпион России и Москвы, чемпион мира 2015 года. 
                Прошёл путь от юношеских соревнований до профессионального ринга, 
                где одержал 3 победы в 3 боях.
              </p>
              <p>
                Сегодня передаю свой опыт ученикам — от начинающих до тех, 
                кто готовится к соревнованиям. Индивидуальный подход, 
                проверенная методика, реальные результаты.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-secondary/50 rounded-lg"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
              Достижения
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
              Спортивные титулы
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-boxing p-6 text-center hover:border-primary/50 transition-colors group"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="font-display text-lg font-bold text-foreground mb-1">
                  {achievement.title}
                </h4>
                <div className="text-primary font-display text-sm">
                  {achievement.year}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional achievements note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
              <Medal className="w-5 h-5" />
              <span className="font-display text-sm uppercase tracking-wider">
                Множество золотых медалей 2014–2018
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
