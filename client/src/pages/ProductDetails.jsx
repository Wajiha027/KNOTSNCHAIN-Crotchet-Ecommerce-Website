import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProductById, products } from '../data/mockData';
import { useCartContext } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { ChevronLeft, ChevronRight, MinusIcon, PlusIcon, ShoppingCart } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCartContext();
  
  const [product, setProduct] = useState(id ? getProductById(id) : null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    if (!product) {
      navigate('/products');
      return;
    }
    
    // Set initial color selection
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
    
    // Get related products (same category, excluding current product)
    const related = products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
    setRelatedProducts(related);
  }, [product, navigate]);
  
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (!product) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container py-8">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex text-sm">
              <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-brand-pink-dark">Home</Link>
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              </li>
              <li className="flex items-center">
                <Link to="/products" className="text-gray-500 hover:text-brand-pink-dark">Products</Link>
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              </li>
              <li className="text-brand-pink-dark font-medium">{product.title}</li>
            </ol>
          </nav>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full h-auto"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
              <p className="text-brand-pink-dark text-2xl font-bold mb-4">Rs. {product.price.toLocaleString()}</p>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                
                {/* Color Selection */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Color</h3>
                    <div className="flex space-x-2">
                      {product.colors.map(color => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`
                            w-8 h-8 rounded-full border-2 
                            ${selectedColor === color ? 'border-brand-pink-dark ring-2 ring-brand-pink-light' : 'border-gray-200'}
                          `}
                          style={{ backgroundColor: color }}
                          aria-label={color}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Quantity Selector */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-100"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <div className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-300">
                      {quantity}
                    </div>
                    <button
                      onClick={incrementQuantity}
                      className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-100"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <Button 
                  onClick={handleAddToCart} 
                  className="w-full md:w-auto bg-brand-pink hover:bg-brand-pink-dark text-white flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
              
              {/* Extra Product Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="mb-2">
                  <span className="font-semibold">Category:</span> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Handmade with:</span> 100% Acrylic Yarn
                </div>
                <div>
                  <span className="font-semibold">Care instructions:</span> Hand wash gently, air dry
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map(relProduct => (
                  <ProductCard key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;

