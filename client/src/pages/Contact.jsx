import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../components/ui/button';
import { Facebook, Instagram } from 'lucide-react';
import { PinterestIcon } from '../components/icons/PinterestIcon';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });
  
  const onSubmit = (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Contact form submitted:', data);
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
          <h1 className="brand-font text-3xl md:text-4xl text-center text-brand-pink-dark mb-4">Contact Us</h1>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Have questions, feedback, or just want to say hello? We'd love to hear from you!
            Fill out the form below or reach out through any of our contact channels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    
                    <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
                    <p className="text-gray-600 mb-6">
                      Your message has been received. We'll respond to your inquiry as soon as possible!
                    </p>
                    
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      className="bg-brand-pink hover:bg-brand-pink-dark text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
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
                    
                    <div className="mb-4">
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
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        {...register('subject')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        {...register('message')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-pink focus:border-brand-pink"
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button
                      type="submit"
                      className="bg-brand-pink hover:bg-brand-pink-dark text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@knotsnchains.com" className="text-brand-pink-dark hover:underline">
                      hello@knotsnchains.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+923001234567" className="text-brand-pink-dark hover:underline">
                      +92 300 1234567
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-700">
                      Lahore, Pakistan
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-700">
                      Monday - Friday: 10am - 6pm<br />
                      Saturday: 11am - 3pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-lavender-light rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                <p className="text-gray-700 mb-4">
                  Stay updated with our latest creations and offers on social media!
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-white p-3 rounded-full text-pink-600 hover:bg-pink-50 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://pinterest.com" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-white p-3 rounded-full text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <PinterestIcon size={20} />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-white p-3 rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-md h-80">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27231.73480442081!2d74.31325522983917!3d31.46591260324117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906c8a396e9e9%3A0xa8b74b441b1c284e!2s852-B%20Milaad%20St%2C%20Block%20B%20Faisal%20Town%2C%20Lahore%2C%2054770!5e0!3m2!1sen!2s!4v1714822346719!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
