import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../components/ui/button';
import { ChevronLeft, CreditCard } from 'lucide-react';

// Form validation schema
const checkoutSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  address: z.string().min(5, { message: 'Address must be at least 5 characters' }),
  city: z.string().min(2, { message: 'City must be at least 2 characters' }),
  postalCode: z.string().min(5, { message: 'Postal code must be at least 5 characters' }),
  paymentMethod: z.enum(['jazzCash', 'easyPaisa', 'card', 'cod']),
});

const paymentMethods = [
  { id: 'jazzCash', name: 'JazzCash', icon: '💳' },
  { id: 'easyPaisa', name: 'EasyPaisa', icon: '💳' },
  { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
  { id: 'cod', name: 'Cash on Delivery', icon: '💵' },
];

const Checkout = () => {
  const { cart, subtotal, clearCart } = useCartContext();
  const navigate = useNavigate();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  // Shipping rate
  const shippingCost = 200;
  const total = subtotal + shippingCost;
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: 'cod',
    }
  });
  
  const onSubmit = (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate random order ID
      const newOrderId = 'KNC-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(newOrderId);
      setOrderPlaced(true);
      clearCart();
      setIsSubmitting(false);
    }, 1500);
  };
  
  if (cart.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }
  
  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <div className="container py-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <h1 className="brand-font text-3xl text-brand-pink-dark mb-4">Order Placed Successfully!</h1>
              <p className="text-gray-600 mb-2">Thank you for your purchase.</p>
              <p className="text-gray-600 mb-6">Your order number is: <span className="font-bold">{orderId}</span></p>
              
              <div className="mb-6 p-4 bg-brand-lavender-light rounded-md">
                <p className="text-gray-800">
                  We've sent an order confirmation email with details and tracking info.
                </p>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Link to="/">
                  <Button className="bg-brand-pink hover:bg-brand-pink-dark text-white">
                    Back to Home
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" className="border-brand-pink text-brand-pink-dark">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
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
          <h1 className="brand-font text-3xl md:text-4xl text-center text-brand-pink-dark mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          {...register('firstName')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          {...register('lastName')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register('email')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        {...register('address')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                      />
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          {...register('city')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                        />
                        {errors.city && (
                          <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                          Postal Code *
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          {...register('postalCode')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                        />
                        {errors.postalCode && (
                          <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    
                    <div className="space-y-3 mb-8">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="flex items-center">
                          <input
                            type="radio"
                            id={method.id}
                            value={method.id}
                            {...register('paymentMethod')}
                            className="h-4 w-4 text-brand-pink focus:ring-brand-pink border-gray-300"
                          />
                          <label htmlFor={method.id} className="ml-2 flex items-center">
                            <span className="mr-2">{method.icon}</span>
                            <span>{method.name}</span>
                          </label>
                        </div>
                      ))}
                      {errors.paymentMethod && (
                        <p className="mt-1 text-sm text-red-600">{errors.paymentMethod.message}</p>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Link to="/cart">
                        <Button variant="outline" type="button" className="border-brand-pink text-brand-pink-dark flex items-center">
                          <ChevronLeft className="mr-1 h-4 w-4" />
                          Back to Cart
                        </Button>
                      </Link>
                      
                      <Button 
                        type="submit" 
                        className="ml-auto bg-brand-pink hover:bg-brand-pink-dark text-white flex items-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Processing...</>
                        ) : (
                          <>
                            <CreditCard className="mr-2 h-4 w-4" />
                            Place Order
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="divide-y divide-gray-200">
                  {cart.map(item => (
                    <div key={item.product.id} className="py-3 flex">
                      <div className="w-16 h-16 rounded overflow-hidden">
                        <img 
                          src={item.product.imageUrl} 
                          alt={item.product.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-3 flex-grow">
                        <h4 className="text-sm font-medium">{item.product.title}</h4>
                        <div className="flex justify-between mt-1">
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                          <p className="text-sm font-semibold">
                            Rs. {(item.product.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>Rs. {shippingCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-gray-100">
                    <span>Total</span>
                    <span>Rs. {total.toLocaleString()}</span>
                  </div>
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

export default Checkout;

