import { motion } from "framer-motion";
import { Trophy, Users, Calendar, Award } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.jpg";

const stats = [
  { icon: Calendar, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Clients Trained" },
  { icon: Trophy, value: "50+", label: "Champions Made" },
  { icon: Award, value: "12", label: "Certifications" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                alt="Coach Marcus Rivera"
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
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Coach Marcus Rivera
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 15 years in the boxing world, I've dedicated my life to
                the sweet science. From competing professionally to training
                national champions, boxing has been my passion and purpose.
              </p>
              <p>
                I believe everyone deserves access to world-class training,
                whether you're stepping into the ring for the first time or
                preparing for competition. My approach combines traditional
                boxing fundamentals with modern sports science.
              </p>
              <p>
                Certified by the National Boxing Association, USA Boxing, and
                the International Sports Sciences Association, I bring a
                comprehensive approach to every training session.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
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
      </div>
    </section>
  );
};

export default AboutSection;
