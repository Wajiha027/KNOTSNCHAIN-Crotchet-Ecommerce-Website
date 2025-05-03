import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory, products } from '../data/mockData';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);
  
  useEffect(() => {
    setFilteredProducts(getProductsByCategory(selectedCategory));
  }, [selectedCategory]);
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container py-8">
          <h1 className="brand-font text-4xl text-center text-brand-pink-dark mb-8">Our Handcrafted Collection</h1>
          
          {/* Category Filters */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex shadow-sm rounded-md">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`py-2 px-4 text-sm font-medium rounded-l-lg ${
                  selectedCategory === 'all'
                    ? 'bg-brand-pink text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-200`}
              >
                All Products
              </button>
              <button
                onClick={() => handleCategoryChange('flowers')}
                className={`py-2 px-4 text-sm font-medium ${
                  selectedCategory === 'flowers'
                    ? 'bg-brand-pink text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border-t border-b border-gray-200`}
              >
                Flowers
              </button>
              <button
                onClick={() => handleCategoryChange('keychains')}
                className={`py-2 px-4 text-sm font-medium rounded-r-lg ${
                  selectedCategory === 'keychains'
                    ? 'bg-brand-pink text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-200`}
              >
                Keychains
              </button>
            </div>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
