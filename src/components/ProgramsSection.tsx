import { motion } from "framer-motion";
import { User, Users, Dumbbell, Medal, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: User,
    title: "Personal 1-on-1",
    description:
      "Intensive one-on-one sessions tailored to your goals. Perfect for beginners and advanced boxers seeking personalized attention.",
    features: [
      "Customized training plan",
      "Technique correction",
      "Flexible scheduling",
      "Video analysis",
    ],
  },
  {
    icon: Users,
    title: "Group Training",
    description:
      "High-energy group sessions that build community and push your limits. Great for cardio and learning basics.",
    features: [
      "Small group sizes (max 8)",
      "Team motivation",
      "Affordable rates",
      "Scheduled classes",
    ],
  },
  {
    icon: Dumbbell,
    title: "Fitness Boxing",
    description:
      "Get in the best shape of your life without stepping in the ring. Boxing-inspired workouts for total body conditioning.",
    features: [
      "Full-body workout",
      "Stress relief",
      "Weight loss focus",
      "No contact required",
    ],
  },
  {
    icon: Medal,
    title: "Competition Prep",
    description:
      "Elite training for those ready to compete. Comprehensive preparation covering all aspects of competitive boxing.",
    features: [
      "Fight strategy",
      "Sparring sessions",
      "Mental conditioning",
      "Nutrition guidance",
    ],
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-secondary/30">
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
            Training Options
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Training Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Choose the training style that fits your goals. Every program is
            designed to challenge and transform you.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-boxing p-6 md:p-8 group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
