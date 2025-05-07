
const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
