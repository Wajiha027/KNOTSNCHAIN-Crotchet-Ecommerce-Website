
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useCartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext();
  
  const handleAddToCart = () => {
    addToCart(product, 1);
  };
  
  return (
    <div className="card group animate-fade-in">
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className="product-image group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button 
            onClick={handleAddToCart} 
            className="w-full bg-brand-pink hover:bg-brand-pink-dark text-white"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium text-lg">{product.title}</h3>
        </Link>
        <p className="text-brand-pink-dark font-bold mt-1">Rs. {product.price.toLocaleString()}</p>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
