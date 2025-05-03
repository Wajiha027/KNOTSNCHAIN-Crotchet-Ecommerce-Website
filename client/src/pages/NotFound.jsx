import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 flex items-center">
        <div className="container py-12 max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-9xl font-bold text-brand-pink-light">404</span>
          </div>
          
          <h1 className="brand-font text-4xl text-brand-pink-dark mb-4">Page Not Found</h1>
          <p className="text-gray-600 text-lg mb-8">
            We couldn't find the page you're looking for. The page might have been removed, renamed, or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button className="bg-brand-pink hover:bg-brand-pink-dark text-white w-full">
                Go to Homepage
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" className="border-brand-pink text-brand-pink-dark w-full">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;

