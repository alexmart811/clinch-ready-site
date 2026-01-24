import { motion } from "framer-motion";
import { Clock, MapPin, Wifi } from "lucide-react";

const scheduleData = [
  { day: "Monday", morning: "6:00 AM - 9:00 AM", evening: "5:00 PM - 9:00 PM" },
  { day: "Tuesday", morning: "6:00 AM - 9:00 AM", evening: "5:00 PM - 9:00 PM" },
  { day: "Wednesday", morning: "6:00 AM - 9:00 AM", evening: "5:00 PM - 9:00 PM" },
  { day: "Thursday", morning: "6:00 AM - 9:00 AM", evening: "5:00 PM - 9:00 PM" },
  { day: "Friday", morning: "6:00 AM - 9:00 AM", evening: "5:00 PM - 8:00 PM" },
  { day: "Saturday", morning: "8:00 AM - 12:00 PM", evening: "—" },
  { day: "Sunday", morning: "Closed", evening: "—" },
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
              Availability
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
              Weekly Schedule
            </h2>

            <div className="card-boxing overflow-hidden">
              <div className="grid grid-cols-3 bg-primary/10 p-4 text-sm font-display uppercase tracking-wider text-foreground">
                <span>Day</span>
                <span>Morning</span>
                <span>Evening</span>
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
              Find Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
              Training Location
            </h2>

            <div className="space-y-6">
              <div className="card-boxing p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Main Gym Location
                  </h3>
                  <p className="text-muted-foreground">
                    123 Fighter's Way, Downtown<br />
                    Los Angeles, CA 90001
                  </p>
                </div>
              </div>

              <div className="card-boxing p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Flexible Scheduling
                  </h3>
                  <p className="text-muted-foreground">
                    Book sessions at times that work for you. Early bird and
                    evening slots available.
                  </p>
                </div>
              </div>

              <div className="card-boxing p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Online Training Available
                  </h3>
                  <p className="text-muted-foreground">
                    Can't make it in person? Join live virtual sessions from
                    anywhere in the world.
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
