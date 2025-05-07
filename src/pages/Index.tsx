
import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import FeaturedDrinks from '@/components/home/FeaturedDrinks';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import SubscribeSection from '@/components/home/SubscribeSection';
import Footer from '@/components/home/Footer';

/**
 * Главная страница сайта кофейни
 * Состоит из нескольких секций, каждая из которых вынесена в отдельный компонент
 * для лучшей поддерживаемости и читаемости кода
 */
const Index = () => {
  return (
    <div className="bg-[#FAF6F1] min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedDrinks />
      <AboutSection />
      <TestimonialsSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Index;
