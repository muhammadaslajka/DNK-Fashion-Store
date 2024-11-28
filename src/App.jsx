import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PromoBanner from './components/PromoBanner';
import FeaturedProducts from './components/FeaturedProducts';
import SpecialOffer from './components/SpecialOffer';
import Features from './components/Features';
import Footer from './components/Footer';
import CarouselLogo from './components/CarouselLogo';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PromoBanner />
      <FeaturedProducts />
      <CarouselLogo/>
      <SpecialOffer />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
