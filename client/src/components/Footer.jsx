import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { PinterestIcon } from './icons/PinterestIcon';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-lavender-light pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="brand-font text-2xl text-brand-pink-dark mb-4">Knots N' Chains</h3>
            <p className="text-gray-600 mb-4">
              Handcrafted crochet keychains and flowers made with love.
              Each piece is unique and made with attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/knotsnchains/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-brand-pink-dark transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-brand-pink-dark transition-colors">
                <PinterestIcon size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-brand-pink-dark transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-brand-pink-dark transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=flowers" className="text-gray-600 hover:text-brand-pink-dark transition-colors">
                  Crochet Flowers
                </Link>
              </li>
              <li>
                <Link to="/products?category=keychains" className="text-gray-600 hover:text-brand-pink-dark transition-colors">
                  Keychains
                </Link>
              </li>
              <li>
                <Link to="/custom-orders" className="text-gray-600 hover:text-brand-pink-dark transition-colors">
                  Custom Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
            <p className="text-gray-600 mb-2">Email: hello@knotsnchains.com</p>
            <p className="text-gray-600 mb-2">Phone: +92 123 4567890</p>
            <p className="text-gray-600 mb-4">Lahore, Pakistan</p>
            <Link to="/contact" className="text-brand-pink-dark hover:underline">
              Send us a message
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 mt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Knots N' Chains. All rights reserved. 
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            Created by Wajiha Naveed & Anna Rai
          </p>
        </div>
      </div>
    </footer>
  );
};
