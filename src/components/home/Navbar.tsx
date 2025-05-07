
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 md:px-12 md:py-5 flex items-center justify-between">
      <div className="font-semibold text-xl text-[#3C2A21]">Aroma Coffee</div>
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-[#3C2A21] hover:text-[#6B4226] font-medium">Главная</Link>
        <Link to="/menu" className="text-[#3C2A21] hover:text-[#6B4226] font-medium">Меню</Link>
        <Link to="/about" className="text-[#3C2A21] hover:text-[#6B4226] font-medium">О нас</Link>
        <Link to="/contact" className="text-[#3C2A21] hover:text-[#6B4226] font-medium">Контакты</Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-white text-[#6B4226] border border-[#6B4226] px-5 py-2 rounded-full hover:bg-[#F8F1E9] transition-colors">
          Заказать
        </button>
        <button className="md:hidden">
          <Icon name="Menu" className="text-[#3C2A21]" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
