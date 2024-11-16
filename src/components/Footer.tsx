import React from 'react';
import { Music2, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export const Footer = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.sendfox.com/js/form.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const email = new FormData(form).get('email') as string;

    try {
      const response = await fetch('https://sendfox.com/form/m85z42/m2nj6n', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Subscription failed');

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for subscribing!'
      });
      form.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to subscribe. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Music2 className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-white">THE BUSINESS OF SONG</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/terms-privacy" className="hover:text-purple-400 transition-colors">Terms & Privacy</a></li>
              <li><a href="/faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@businessofsong.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+61 02 3814 7682</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Melbourne, Australia</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <form 
              onSubmit={handleSubmit}
              className="mt-4 space-y-4"
              data-sendfox-form="m2nj6n"
            >
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="a_password" tabIndex={-1} autoComplete="off" />
                </div>
              </div>
              
              {submitStatus.type && (
                <div className={`text-sm ${
                  submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-purple-500 text-white px-4 py-2 rounded-md transition-colors ${
                  isSubmitting ? 'bg-purple-400 cursor-not-allowed' : 'hover:bg-purple-600'
                }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>Copyright © 2024. The Business of Song ABN: 21 672 202 612</p>
        </div>
      </div>
    </footer>
  );
};