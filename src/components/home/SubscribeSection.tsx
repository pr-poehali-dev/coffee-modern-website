
const SubscribeSection = () => {
  return (
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
  );
};

export default SubscribeSection;
