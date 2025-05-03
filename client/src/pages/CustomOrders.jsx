import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../components/ui/button';

// Form validation schema
const customOrderSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  productType: z.enum(['flower', 'keychain', 'earrings', 'other']),
  size: z.enum(['small', 'medium', 'large']),
  color: z.string().min(1, { message: 'Please specify at least one color' }),
  designDetails: z.string().min(10, { message: 'Please provide some design details (minimum 10 characters)' }),
  additionalInfo: z.string().optional(),
});

const CustomOrders = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(customOrderSchema),
    defaultValues: {
      productType: 'flower',
      size: 'medium',
    }
  });
  
  const onSubmit = (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      setIsSubmitting(false);
      reset();
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container py-8 max-w-5xl">
          <h1 className="brand-font text-3xl md:text-4xl text-center text-brand-pink-dark mb-4">Custom Orders</h1>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Looking for something unique? We'd love to create a custom piece just for you! 
            Fill out the form below with your requirements, and we'll get back to you within 24 hours.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Custom Order Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    
                    <h2 className="text-2xl font-semibold mb-2">Request Submitted!</h2>
                    <p className="text-gray-600 mb-6">
                      Thank you for your custom order request! We'll review your requirements and get back to you within 24 hours.
                    </p>
                    
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      className="bg-brand-pink hover:bg-brand-pink-dark text-white"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-xl font-semibold mb-6">Your Custom Order Request</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register('name')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>
                      
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
                    </div>
                    
                    <div className="mb-6">
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                          Product Type *
                        </label>
                        <select
                          id="productType"
                          {...register('productType')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                        >
                          <option value="flower">Flower</option>
                          <option value="keychain">Keychain</option>
                          <option value="earrings">Earrings</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.productType && (
                          <p className="mt-1 text-sm text-red-600">{errors.productType.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                          Size *
                        </label>
                        <select
                          id="size"
                          {...register('size')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                        >
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                        </select>
                        {errors.size && (
                          <p className="mt-1 text-sm text-red-600">{errors.size.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Colors *
                      </label>
                      <input
                        type="text"
                        id="color"
                        {...register('color')}
                        placeholder="E.g., Pink, Light Blue, White"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                      />
                      {errors.color && (
                        <p className="mt-1 text-sm text-red-600">{errors.color.message}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="designDetails" className="block text-sm font-medium text-gray-700 mb-1">
                        Design Details *
                      </label>
                      <textarea
                        id="designDetails"
                        rows={4}
                        {...register('designDetails')}
                        placeholder="Describe what you envision for your custom piece..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                      />
                      {errors.designDetails && (
                        <p className="mt-1 text-sm text-red-600">{errors.designDetails.message}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        id="additionalInfo"
                        rows={3}
                        {...register('additionalInfo')}
                        placeholder="Any other details you'd like to share..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="bg-brand-pink hover:bg-brand-pink-dark text-white w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Custom Order Request'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Information Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-semibold text-lg mb-3">Custom Order Process</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-pink-light flex items-center justify-center mr-3">
                      <span className="text-brand-pink-dark text-sm font-bold">1</span>
                    </div>
                    <p className="text-gray-600">Submit your request with details</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-pink-light flex items-center justify-center mr-3">
                      <span className="text-brand-pink-dark text-sm font-bold">2</span>
                    </div>
                    <p className="text-gray-600">Receive a price quote within 24 hours</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-pink-light flex items-center justify-center mr-3">
                      <span className="text-brand-pink-dark text-sm font-bold">3</span>
                    </div>
                    <p className="text-gray-600">Approve design and make payment</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-pink-light flex items-center justify-center mr-3">
                      <span className="text-brand-pink-dark text-sm font-bold">4</span>
                    </div>
                    <p className="text-gray-600">Production (7-10 days)</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-pink-light flex items-center justify-center mr-3">
                      <span className="text-brand-pink-dark text-sm font-bold">5</span>
                    </div>
                    <p className="text-gray-600">Delivery of your custom item</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-brand-lavender-light rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Need Help?</h3>
                <p className="text-gray-700 mb-4">
                  Have questions about custom orders? Contact us directly and we'll be happy to assist you!
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span><br />
                  hello@knotsnchains.com
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">Phone:</span><br />
                  +92 123 4567890
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CustomOrders;

