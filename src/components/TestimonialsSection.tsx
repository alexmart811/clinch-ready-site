import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Mitchell",
    role: "Amateur Boxer",
    content:
      "Coach Marcus transformed my game completely. In 6 months, I went from zero experience to winning my first amateur fight. His attention to detail and patient coaching style is unmatched.",
    rating: 5,
    result: "Won first amateur fight after 6 months",
  },
  {
    name: "Sarah Chen",
    role: "Fitness Enthusiast",
    content:
      "I came for fitness, but I found so much more. Lost 30 pounds in 4 months while learning real boxing skills. The confidence I've gained is priceless.",
    rating: 5,
    result: "Lost 30 lbs in 4 months",
  },
  {
    name: "David Rodriguez",
    role: "Professional Boxer",
    content:
      "After training with several coaches, Marcus stands out. His strategic approach to fight preparation helped me win my regional title. A true master of the craft.",
    rating: 5,
    result: "Regional Champion",
  },
  {
    name: "Emily Thompson",
    role: "Self-Defense Student",
    content:
      "As a woman, feeling safe was my priority. Marcus created a welcoming environment and taught me skills I'll carry forever. Now I walk with confidence.",
    rating: 5,
    result: "Gained confidence and self-defense skills",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
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
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Client Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Real transformations from real people. Their success is my greatest
            reward.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-boxing p-6 md:p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="inline-block bg-primary/10 text-primary text-xs font-display uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                {testimonial.result}
              </div>

              {/* Author */}
              <div>
                <div className="font-display text-lg font-bold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
