import { motion } from "framer-motion";
import { Clock, MapPin, Wifi } from "lucide-react";

const scheduleData = [
  { day: "Пн", morning: "6:00 - 9:00", evening: "17:00 - 21:00" },
  { day: "Вт", morning: "6:00 - 9:00", evening: "17:00 - 21:00" },
  { day: "Ср", morning: "6:00 - 9:00", evening: "17:00 - 21:00" },
  { day: "Чт", morning: "6:00 - 9:00", evening: "17:00 - 21:00" },
  { day: "Пт", morning: "Выходной", evening: "—" },
  { day: "Сб", morning: "8:00 - 12:00", evening: "—" },
  { day: "Вс", morning: "8:00 - 12:00", evening: "—" },
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
                    Адрес зала
                  </h3>
                  <p className="text-muted-foreground">
                    Москва, Новомосковский АО,<br />
                    район Внуково, д. Марушкино, 2
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

        {/* Yandex Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="card-boxing overflow-hidden relative">
            <a
              href="https://yandex.ru/maps/213/moscow/house/derevnya_marushkino_2/Z04YdAdhTEYBQFtvfXl4c3tjbA==/?from=mapframe&ll=37.203098%2C55.592691&pt=37.253889%2C55.615278&source=mapframe&um=constructor%3A8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&utm_medium=mapframe&utm_source=maps&z=17.23"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 left-2 z-10 bg-background/80 backdrop-blur-sm px-3 py-1 rounded text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              д. Марушкино, 2
            </a>
            <iframe
              src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.203098%2C55.592691&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MjMyMTIwNTA5EqUB0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCd0L7QstC-0LzQvtGB0LrQvtCy0YHQutC40Lkg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC40LLQvdGL0Lkg0L7QutGA0YPQsywg0YDQsNC50L7QvSDQktC90YPQutC-0LLQviwg0LTQtdGA0LXQstC90Y8g0JzQsNGA0YPRiNC60LjQvdC-LCAyIgoNX84UQhXvXl5C&pt=37.253889%2C55.615278&source=mapframe&um=constructor%3A8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&utm_source=mapframe&z=17.23"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              className="w-full"
              title="Яндекс Карта — д. Марушкино, 2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
