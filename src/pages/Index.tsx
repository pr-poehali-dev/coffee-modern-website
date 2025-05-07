
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="bg-[#FAF6F1] min-h-screen">
      {/* Навигация */}
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

      {/* Герой-секция */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Кофейня" 
            className="w-full h-full object-cover brightness-[0.85]"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Искусство кофе в каждой чашке</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">Уютная атмосфера, исключительный вкус и незабываемые моменты</p>
            <div className="flex gap-4">
              <button className="bg-white text-[#6B4226] px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
                Наше меню
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                О кофейне
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с популярными напитками */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C2A21] mb-4">Наши фирменные напитки</h2>
          <p className="text-lg text-[#6B4226]/80 max-w-2xl mx-auto">Изысканные вкусы, созданные с любовью к кофейному искусству</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Карточка напитка 1 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                alt="Капучино" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-[#3C2A21]">Капучино</h3>
                <span className="text-[#6B4226] font-medium">350 ₽</span>
              </div>
              <p className="text-[#6B4226]/80 mb-4">Классический итальянский напиток с бархатистой молочной пеной</p>
              <button className="text-[#6B4226] font-medium flex items-center gap-2 hover:text-[#3C2A21]">
                Заказать
                <Icon name="ArrowRight" className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Карточка напитка 2 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                alt="Флэт Уайт" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-[#3C2A21]">Флэт Уайт</h3>
                <span className="text-[#6B4226] font-medium">390 ₽</span>
              </div>
              <p className="text-[#6B4226]/80 mb-4">Насыщенный эспрессо с добавлением бархатистого молока</p>
              <button className="text-[#6B4226] font-medium flex items-center gap-2 hover:text-[#3C2A21]">
                Заказать
                <Icon name="ArrowRight" className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Карточка напитка 3 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534687941688-651ccb9c66bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                alt="Раф кофе" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-[#3C2A21]">Раф кофе</h3>
                <span className="text-[#6B4226] font-medium">420 ₽</span>
              </div>
              <p className="text-[#6B4226]/80 mb-4">Нежный сливочный вкус с ванильными нотками и корицей</p>
              <button className="text-[#6B4226] font-medium flex items-center gap-2 hover:text-[#3C2A21]">
                Заказать
                <Icon name="ArrowRight" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="border-2 border-[#6B4226] text-[#6B4226] px-6 py-3 rounded-full hover:bg-[#6B4226] hover:text-white transition-colors">
            Посмотреть все меню
          </button>
        </div>
      </section>

      {/* Секция о кофейне */}
      <section className="py-16 bg-[#3C2A21] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашей кофейне</h2>
            <p className="text-lg mb-5 text-white/80">
              Aroma Coffee — это больше, чем просто кофейня. Это место, где каждая чашка рассказывает свою историю, где мы трепетно относимся к каждому зерну и каждому гостю.
            </p>
            <p className="text-lg mb-8 text-white/80">
              Мы используем только отборные зерна из лучших уголков мира, обжариваем их по собственным рецептам и создаем неповторимые вкусовые композиции.
            </p>
            <button className="bg-white text-[#3C2A21] px-6 py-3 rounded-full hover:bg-white/90 transition-colors font-medium">
              Узнать больше
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Кофейня интерьер" 
              className="rounded-2xl h-60 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Приготовление кофе" 
              className="rounded-2xl h-60 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1497935586047-9242eb4fc795?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Кофейные зерна" 
              className="rounded-2xl h-60 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1607681034540-2c46cc71896d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Десерты" 
              className="rounded-2xl h-60 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Секция с отзывами */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C2A21] mb-4">Отзывы наших гостей</h2>
          <p className="text-lg text-[#6B4226]/80 max-w-2xl mx-auto">Что говорят о нас наши постоянные посетители</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Отзыв 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex gap-4 items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80" 
                alt="Анна" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-[#3C2A21]">Анна К.</h4>
                <div className="flex text-amber-400">
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4" />
                </div>
              </div>
            </div>
            <p className="text-[#6B4226]/80">
              "Лучший капучино в городе! Уютная атмосфера и всегда приветливый персонал. Мое любимое место для встреч с друзьями и утренних ритуалов."
            </p>
          </div>
          
          {/* Отзыв 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex gap-4 items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80" 
                alt="Михаил" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-[#3C2A21]">Михаил Д.</h4>
                <div className="flex text-amber-400">
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            </div>
            <p className="text-[#6B4226]/80">
              "Потрясающие десерты и отличный кофе. Работаю часто удалённо именно здесь из-за приятной атмосферы и быстрого Wi-Fi. Рекомендую!"
            </p>
          </div>
          
          {/* Отзыв 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex gap-4 items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80" 
                alt="Елена" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-[#3C2A21]">Елена В.</h4>
                <div className="flex text-amber-400">
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4" />
                  <Icon name="Star" className="w-4 h-4" />
                </div>
              </div>
            </div>
            <p className="text-[#6B4226]/80">
              "Обожаю их сезонные напитки! Особенно тыквенный латте осенью. Всегда свежая выпечка и приятная музыка. Мое любимое место в городе."
            </p>
          </div>
        </div>
      </section>

      {/* Секция подписки */}
      <section className="py-16 px-6 md:px-12 bg-[#E6DDD3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C2A21] mb-4">Будьте в курсе наших новостей</h2>
          <p className="text-lg text-[#6B4226]/80 mb-8">Подпишитесь на нашу рассылку и получайте информацию о специальных предложениях и новинках меню</p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="px-4 py-3 rounded-full flex-1 outline-none focus:ring-2 focus:ring-[#6B4226]/50"
            />
            <button className="bg-white text-[#6B4226] border border-[#6B4226] px-6 py-3 rounded-full hover:bg-[#F8F1E9] transition-colors">
              Подписаться
            </button>
          </div>
        </div>
      </section>

      {/* Футер */}
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
    </div>
  );
};

export default Index;
