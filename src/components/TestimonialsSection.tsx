import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Александр Мартынов",
    role: "26 лет, занимается 2 года",
    content:
      "Два года назад пришёл к Магомедбеку без какого-либо опыта в боксе. Сейчас не узнаю себя — и физически, и ментально. Тренер не просто ставит технику, он учит мыслить как боец. Каждая тренировка — это вызов, после которого чувствуешь, что стал лучше.",
    rating: 5,
    result: "2 года тренировок — новый уровень",
  },
  {
    name: "Алексей Смирнов",
    role: "Боксёр-любитель",
    content:
      "Магомедбек полностью изменил мою технику. За 6 месяцев я прошёл путь от нуля до победы в первом любительском бою. Его внимание к деталям и терпеливый подход не имеют равных.",
    rating: 5,
    result: "Победа в первом бою за 6 месяцев",
  },
  {
    name: "Екатерина Волкова",
    role: "Фитнес-энтузиаст",
    content:
      "Пришла ради фитнеса, но получила гораздо больше. Сбросила 15 кг за 4 месяца, изучая настоящие боксёрские навыки. Уверенность, которую я обрела, бесценна.",
    rating: 5,
    result: "Минус 15 кг за 4 месяца",
  },
  {
    name: "Дмитрий Козлов",
    role: "Профессиональный боксёр",
    content:
      "После тренировок с несколькими тренерами могу сказать: Магомедбек выделяется. Его стратегический подход к подготовке к боям помог мне выиграть региональный титул.",
    rating: 5,
    result: "Региональный чемпион",
  },
  {
    name: "Мария Петрова",
    role: "Самооборона",
    content:
      "Как женщина, для меня безопасность была приоритетом. Магомедбек создал комфортную атмосферу и научил навыкам, которые останутся со мной навсегда. Теперь я хожу с уверенностью.",
    rating: 5,
    result: "Уверенность и навыки самообороны",
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
            Истории успеха
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Результаты учеников
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Реальные трансформации реальных людей. Их успех — моя главная награда.
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
                «{testimonial.content}»
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
