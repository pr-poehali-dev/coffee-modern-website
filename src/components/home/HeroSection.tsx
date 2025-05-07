
const HeroSection = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Кофейня" 
          className="w-full h-full object-cover brightness-[0.65]"
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
  );
};

export default HeroSection;
