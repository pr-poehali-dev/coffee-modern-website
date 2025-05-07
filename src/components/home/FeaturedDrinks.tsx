
import Icon from "@/components/ui/icon";

interface DrinkCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

const DrinkCard = ({ image, title, price, description }: DrinkCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-[#3C2A21]">{title}</h3>
          <span className="text-[#6B4226] font-medium">{price}</span>
        </div>
        <p className="text-[#6B4226]/80 mb-4">{description}</p>
        <button className="text-[#6B4226] font-medium flex items-center gap-2 hover:text-[#3C2A21]">
          Заказать
          <Icon name="ArrowRight" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const FeaturedDrinks = () => {
  const drinks = [
    {
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      title: "Капучино",
      price: "350 ₽",
      description: "Классический итальянский напиток с бархатистой молочной пеной"
    },
    {
      image: "https://images.unsplash.com/photo-1534805258485-11e2cc74efd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      title: "Флэт Уайт",
      price: "390 ₽",
      description: "Насыщенный эспрессо с добавлением бархатистого молока"
    },
    {
      image: "https://images.unsplash.com/photo-1613743203842-7a5b389e0ad8?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      title: "Раф кофе",
      price: "420 ₽",
      description: "Нежный сливочный вкус с ванильными нотками и корицей"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3C2A21] mb-4">Наши фирменные напитки</h2>
        <p className="text-lg text-[#6B4226]/80 max-w-2xl mx-auto">Изысканные вкусы, созданные с любовью к кофейному искусству</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {drinks.map((drink, index) => (
          <DrinkCard key={index} {...drink} />
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="border-2 border-[#6B4226] text-[#6B4226] px-6 py-3 rounded-full hover:bg-[#6B4226] hover:text-white transition-colors">
          Посмотреть все меню
        </button>
      </div>
    </section>
  );
};

export default FeaturedDrinks;
