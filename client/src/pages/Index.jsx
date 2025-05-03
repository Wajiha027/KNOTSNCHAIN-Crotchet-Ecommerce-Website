import { Link } from 'react-router-dom';
import { Carousel } from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import { carouselSlides, featuredProducts, newArrivals } from '../data/mockData';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Instagram } from 'lucide-react';
import { PinterestIcon } from '../components/icons/PinterestIcon';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Carousel */}
      <section className="mt-0">
        <Carousel slides={carouselSlides} />
      </section>
      
      {/* Featured Products */}
      <section className="section-padding container">
        <div className="text-center mb-8">
          <h2 className="brand-font text-3xl md:text-4xl text-brand-pink-dark mb-2">Featured Products</h2>
          <p className="text-gray-600">Our most loved crochet creations</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/products">
            <button className="btn-outline">View All Products</button>
          </Link>
        </div>
      </section>
      
      {/* About Section */}
      <section className="bg-brand-lavender-light section-padding">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1559302995-f1d7926f2063?q=80&w=600&auto=format&fit=crop" 
                alt="Handmade Crochet Process" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="brand-font text-3xl md:text-4xl text-brand-pink-dark mb-4">About Knots N' Chains</h2>
              <p className="text-gray-700 mb-4">
                We are a small business based in Lahore, Pakistan, specializing in handcrafted crochet products.
                Each item is made with love and attention to detail, ensuring that you receive a unique piece that will bring joy for years to come.
              </p>
              <p className="text-gray-700 mb-6">
                Our collection includes beautiful flowers that never wilt and adorable keychains that add charm to your everyday items.
                We also take custom orders to create something special just for you!
              </p>
              <Link to="/contact">
                <button className="btn-primary">Get in Touch</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="section-padding container">
        <div className="text-center mb-8">
          <h2 className="brand-font text-3xl md:text-4xl text-brand-pink-dark mb-2">New Arrivals</h2>
          <p className="text-gray-600">Fresh off the crochet hook</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      {/* Custom Orders CTA */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(https://images.unsplash.com/photo-1604787294309-2d321e713c4e?q=80&w=1200&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container text-center">
          <h2 className="brand-font text-3xl md:text-4xl text-brand-pink-dark mb-4">Custom Crochet Creations</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Looking for something specific? We'd love to create a custom piece just for you!
            Whether it's a personalized keychain or a flower arrangement in your favorite colors, we can make it happen.
          </p>
          <Link to="/custom-orders">
            <button className="btn-primary">Request Custom Order</button>
          </Link>
        </div>
      </section>
      
      {/* Instagram Feed Simulation */}
      <section className="section-padding container">
        <div className="text-center mb-8">
          <h2 className="brand-font text-3xl md:text-4xl text-brand-pink-dark mb-2">Follow Us</h2>
          <p className="text-gray-600 mb-2">@knotsnchains</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="text-brand-pink-dark hover:text-brand-pink transition-colors">
              <div className="flex items-center">
                <Instagram size={20} className="mr-1" />
                <span>Instagram</span>
              </div>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" 
               className="text-brand-pink-dark hover:text-brand-pink transition-colors">
              <div className="flex items-center">
                <PinterestIcon size={20} className="mr-1" />
                <span>Pinterest</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <a key={item} href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="overflow-hidden aspect-square">
              <img 
                src={`https://images.unsplash.com/photo-${1550250946 + item * 1000}?q=80&w=300&auto=format&fit=crop`}
                alt="Instagram Feed"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
