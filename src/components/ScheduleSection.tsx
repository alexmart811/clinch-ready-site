import { motion } from "framer-motion";
import { Clock, MapPin, Wifi } from "lucide-react";

const scheduleData = [
  { day: "Понедельник", morning: "6:00 - 9:00", evening: "17:00 - 21:00" },
  { day: "Вторник", morning: "6:00 - 9:00", evening: "17:00 - 21:00" },
  { day: "Среда", morning: "6:00 - 9:00", evening: "17:00 - 21:00" },
  { day: "Четверг", morning: "6:00 - 9:00", evening: "17:00 - 21:00" },
  { day: "Пятница", morning: "6:00 - 9:00", evening: "17:00 - 20:00" },
  { day: "Суббота", morning: "8:00 - 12:00", evening: "—" },
  { day: "Воскресенье", morning: "Выходной", evening: "—" },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Schedule Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
              Доступность
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
              Расписание
            </h2>

            <div className="card-boxing overflow-hidden">
              <div className="grid grid-cols-3 bg-primary/10 p-4 text-sm font-display uppercase tracking-wider text-foreground">
                <span>День</span>
                <span>Утро</span>
                <span>Вечер</span>
              </div>
              {scheduleData.map((item, index) => (
                <div
                  key={item.day}
                  className={`grid grid-cols-3 p-4 text-sm ${
                    index % 2 === 0 ? "bg-card" : "bg-card/50"
                  }`}
                >
                  <span className="font-display font-bold text-foreground">
                    {item.day}
                  </span>
                  <span className="text-muted-foreground">{item.morning}</span>
                  <span className="text-muted-foreground">{item.evening}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
              Где нас найти
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
              Место тренировок
            </h2>

            <div className="space-y-6">
              <div className="card-boxing p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Основной зал
                  </h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Спортивная, 15<br />
                    Спортивный комплекс «Чемпион»
                  </p>
                </div>
              </div>

              <div className="card-boxing p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Гибкое расписание
                  </h3>
                  <p className="text-muted-foreground">
                    Записывайтесь на удобное для вас время. Доступны утренние
                    и вечерние слоты.
                  </p>
                </div>
              </div>

              <div className="card-boxing p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Онлайн-тренировки
                  </h3>
                  <p className="text-muted-foreground">
                    Не можете приехать лично? Присоединяйтесь к онлайн-занятиям
                    из любой точки мира.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
