
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-restaurant-dark text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
          <div className="md:w-1/3">
            <h3 className="font-playfair text-2xl mb-4">Gusto</h3>
            <p className="text-gray-300 mb-4">
              Authentic Italian cuisine made with passion and the finest ingredients. A dining experience to remember.
            </p>
            <p className="text-gray-300">
              &copy; {currentYear} Gusto Restaurant. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-white">Menu</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white">Gallery</a></li>
              <li><a href="#reservations" className="text-gray-300 hover:text-white">Reservations</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://facebook.com" className="text-gray-300 hover:text-white">Facebook</a></li>
              <li><a href="https://instagram.com" className="text-gray-300 hover:text-white">Instagram</a></li>
              <li><a href="https://twitter.com" className="text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="https://yelp.com" className="text-gray-300 hover:text-white">Yelp</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <address className="not-italic text-gray-300">
              <p>123 Culinary Avenue</p>
              <p>Foodville, FC 45678</p>
              <p className="mt-2">(123) 456-7890</p>
              <p>info@gusto.example.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>Website designed for demonstration purposes.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
