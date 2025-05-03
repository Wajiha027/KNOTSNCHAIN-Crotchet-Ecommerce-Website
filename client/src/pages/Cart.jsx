import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCartContext } from '../context/CartContext';
import { MinusIcon, PlusIcon, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCartContext();
  
  // Shipping rates
  const shippingOptions = [
    { id: 'standard', name: 'Standard Delivery', price: 200, description: '3-5 business days' },
    { id: 'express', name: 'Express Delivery', price: 350, description: '1-2 business days' }
  ];
  
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);
  
  const total = subtotal + selectedShipping.price;
  
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <div className="container py-12">
            <h1 className="brand-font text-3xl md:text-4xl text-center text-brand-pink-dark mb-4">Your Shopping Cart</h1>
            
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-lavender-light mb-4">
                <ShoppingBag className="h-12 w-12 text-brand-pink" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
              <Link to="/products">
                <Button className="bg-brand-pink hover:bg-brand-pink-dark text-white">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container py-8">
          <h1 className="brand-font text-3xl md:text-4xl text-center text-brand-pink-dark mb-8">Your Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Cart Items ({cart.length})</h2>
                  
                  <div className="divide-y divide-gray-200">
                    {cart.map(item => (
                      <div key={item.product.id} className="py-6 flex flex-wrap md:flex-nowrap">
                        {/* Product Image */}
                        <div className="w-full md:w-24 h-24 mb-4 md:mb-0">
                          <img 
                            src={item.product.imageUrl} 
                            alt={item.product.title} 
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        
                        {/* Product Details */}
                        <div className="md:ml-4 flex-grow">
                          <h3 className="text-lg font-medium">{item.product.title}</h3>
                          <p className="text-sm text-gray-500">{item.product.category}</p>
                          <p className="mt-1 font-semibold">Rs. {item.product.price.toLocaleString()}</p>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="w-full md:w-auto mt-4 md:mt-0 flex items-center">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
                          >
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
                          >
                            <PlusIcon className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="ml-4 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        
                        {/* Item Total */}
                        <div className="w-full md:w-auto mt-2 md:mt-0 text-right md:ml-4">
                          <p className="font-bold">
                            Rs. {(item.product.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap justify-between gap-4">
                <Link to="/products">
                  <Button variant="outline" className="border-brand-pink text-brand-pink-dark">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  
                  {/* Shipping Options */}
                  <div>
                    <p className="font-medium mb-2">Shipping</p>
                    <div className="space-y-2">
                      {shippingOptions.map(option => (
                        <div key={option.id} className="flex items-center">
                          <input
                            type="radio"
                            id={`shipping-${option.id}`}
                            name="shipping"
                            checked={selectedShipping.id === option.id}
                            onChange={() => setSelectedShipping(option)}
                            className="h-4 w-4 text-brand-pink focus:ring-brand-pink border-gray-300"
                          />
                          <label htmlFor={`shipping-${option.id}`} className="ml-2 flex flex-col">
                            <span>{option.name} - Rs. {option.price.toLocaleString()}</span>
                            <span className="text-sm text-gray-500">{option.description}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span>Rs. {total.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/checkout">
                    <Button className="w-full bg-brand-pink hover:bg-brand-pink-dark text-white flex items-center justify-center">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
