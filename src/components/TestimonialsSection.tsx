import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Алексей Иванов",
    role: "Любитель бокса",
    content:
      "За 6 месяцев тренировок с Магомедбеком я прошёл путь от новичка до первой победы на любительском турнире. Внимание к деталям и терпеливый подход — это то, что отличает его от других тренеров.",
    rating: 5,
    result: "Победа на турнире за 6 месяцев",
  },
  {
    name: "Екатерина Смирнова",
    role: "Фитнес",
    content:
      "Пришла ради фигуры, а нашла гораздо больше. Минус 15 кг за 4 месяца и настоящие навыки бокса. Уверенность в себе — бесценна.",
    rating: 5,
    result: "Минус 15 кг за 4 месяца",
  },
  {
    name: "Дмитрий Петров",
    role: "Профессиональный боксёр",
    content:
      "Работал с разными тренерами, но Магомедбек выделяется стратегическим подходом к подготовке. Благодаря ему я выиграл региональный чемпионат.",
    rating: 5,
    result: "Региональный чемпион",
  },
  {
    name: "Анна Козлова",
    role: "Самооборона",
    content:
      "Как женщине для меня было важно чувствовать себя в безопасности. Магомедбек создал комфортную атмосферу и научил навыкам, которые останутся со мной навсегда.",
    rating: 5,
    result: "Уверенность и навыки самозащиты",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-muted-foreground text-sm tracking-wide">
            Отзывы
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mt-2">
            Результаты учеников
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Реальные истории реальных людей. Их успех — моя главная награда.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card-minimal p-6"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-foreground text-foreground"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-5 leading-relaxed">
                «{testimonial.content}»
              </p>

              {/* Result Badge */}
              <div className="inline-block bg-secondary text-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                {testimonial.result}
              </div>

              {/* Author */}
              <div>
                <div className="font-medium text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
