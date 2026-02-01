import { Clock, MapPin, Wifi } from "lucide-react";

const scheduleData = [
  { day: "Понедельник", morning: "6:00 – 9:00", evening: "17:00 – 21:00" },
  { day: "Вторник", morning: "6:00 – 9:00", evening: "17:00 – 21:00" },
  { day: "Среда", morning: "6:00 – 9:00", evening: "17:00 – 21:00" },
  { day: "Четверг", morning: "6:00 – 9:00", evening: "17:00 – 21:00" },
  { day: "Пятница", morning: "6:00 – 9:00", evening: "17:00 – 20:00" },
  { day: "Суббота", morning: "8:00 – 12:00", evening: "—" },
  { day: "Воскресенье", morning: "Выходной", evening: "—" },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Schedule Table */}
          <div>
            <span className="text-muted-foreground text-sm tracking-wide">
              Расписание
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-8">
              Часы работы
            </h2>

            <div className="card-minimal overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary p-4 text-sm font-medium text-foreground">
                <span>День</span>
                <span>Утро</span>
                <span>Вечер</span>
              </div>
              {scheduleData.map((item, index) => (
                <div
                  key={item.day}
                  className={`grid grid-cols-3 p-4 text-sm ${
                    index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                  }`}
                >
                  <span className="font-medium text-foreground">
                    {item.day}
                  </span>
                  <span className="text-muted-foreground">{item.morning}</span>
                  <span className="text-muted-foreground">{item.evening}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location Info */}
          <div>
            <span className="text-muted-foreground text-sm tracking-wide">
              Локация
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-8">
              Где проходят тренировки
            </h2>

            <div className="space-y-4">
              <div className="card-minimal p-5 flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    Основной зал
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    г. Москва, ул. Спортивная, д. 15<br />
                    Метро Спортивная
                  </p>
                </div>
              </div>

              <div className="card-minimal p-5 flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <Clock className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    Гибкое расписание
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Записывайтесь на удобное для вас время. Утренние и вечерние слоты доступны.
                  </p>
                </div>
              </div>

              <div className="card-minimal p-5 flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <Wifi className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    Онлайн-тренировки
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Не можете приехать лично? Присоединяйтесь к онлайн-занятиям из любой точки мира.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
