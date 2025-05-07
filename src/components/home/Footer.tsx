
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-[#3C2A21] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-xl mb-4">Aroma Coffee</h3>
          <p className="text-white/80 mb-6">Наслаждайтесь каждым глотком жизни с нашим великолепным кофе.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-white/80">
              <Icon name="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-white/80">
              <Icon name="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-white/80">
              <Icon name="Twitter" className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-4">Контакты</h4>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-center gap-2">
              <Icon name="MapPin" className="w-4 h-4" />
              ул. Кофейная, 42, Москва
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Phone" className="w-4 h-4" />
              +7 (495) 123-45-67
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Mail" className="w-4 h-4" />
              info@aromacoffee.ru
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-4">Меню</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:text-white">Кофейная карта</a></li>
            <li><a href="#" className="hover:text-white">Десерты</a></li>
            <li><a href="#" className="hover:text-white">Завтраки</a></li>
            <li><a href="#" className="hover:text-white">Сезонные напитки</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-4">Время работы</h4>
          <ul className="space-y-2 text-white/80">
            <li>Понедельник - Пятница: 7:00 - 22:00</li>
            <li>Суббота: 8:00 - 22:00</li>
            <li>Воскресенье: 9:00 - 21:00</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-white/20 text-center text-white/60 text-sm">
        &copy; {new Date().getFullYear()} Aroma Coffee. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
