
import Icon from "@/components/ui/icon";

interface TestimonialProps {
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const Testimonial = ({ name, avatar, rating, text }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex gap-4 items-center mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-[#3C2A21]">{name}</h4>
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i} 
                name="Star" 
                className={`w-4 h-4 ${i >= rating ? "text-gray-300" : ""}`} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-[#6B4226]/80">"{text}"</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Анна К.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      rating: 5,
      text: "Лучший капучино в городе! Уютная атмосфера и всегда приветливый персонал. Мое любимое место для встреч с друзьями и утренних ритуалов."
    },
    {
      name: "Михаил Д.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      rating: 4,
      text: "Потрясающие десерты и отличный кофе. Работаю часто удалённо именно здесь из-за приятной атмосферы и быстрого Wi-Fi. Рекомендую!"
    },
    {
      name: "Елена В.",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      rating: 5,
      text: "Обожаю их сезонные напитки! Особенно тыквенный латте осенью. Всегда свежая выпечка и приятная музыка. Мое любимое место в городе."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3C2A21] mb-4">Отзывы наших гостей</h2>
        <p className="text-lg text-[#6B4226]/80 max-w-2xl mx-auto">Что говорят о нас наши постоянные посетители</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
