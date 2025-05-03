import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Carousel = ({ slides, autoplay = true, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const intervalId = setInterval(() => {
      nextSlide();
    }, interval);
    
    return () => clearInterval(intervalId);
  }, [autoplay, currentSlide, interval]);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="brand-font text-4xl md:text-6xl mb-4">{slide.heading}</h2>
            <p className="text-xl md:text-2xl mb-6 max-w-2xl">{slide.subheading}</p>
            <Link to={slide.buttonLink}>
              <Button variant="outline" className="bg-white text-brand-pink-dark hover:bg-brand-pink hover:text-white border-white">
                {slide.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 focus:outline-none"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 focus:outline-none"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
