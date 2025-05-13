
import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-restaurant-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair text-restaurant-dark mb-4">Find Us</h2>
          <div className="w-20 h-1 bg-restaurant-burgundy mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            We're conveniently located in the heart of the city. Come visit us or reach out with any questions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-playfair text-2xl mb-6 text-restaurant-dark">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-restaurant-burgundy mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Address</h4>
                  <p className="text-gray-700">123 Culinary Avenue</p>
                  <p className="text-gray-700">Foodville, FC 45678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-restaurant-burgundy mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <p className="text-gray-700">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-restaurant-burgundy mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <p className="text-gray-700">info@gusto.example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-restaurant-burgundy mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Hours</h4>
                  <p className="text-gray-700">Tuesday - Thursday: 5:00 PM - 10:00 PM</p>
                  <p className="text-gray-700">Friday - Saturday: 5:00 PM - 11:00 PM</p>
                  <p className="text-gray-700">Sunday: 5:00 PM - 9:00 PM</p>
                  <p className="text-gray-700">Monday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-lg mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-restaurant-burgundy">
                  Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-restaurant-burgundy">
                  Instagram
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-restaurant-burgundy">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-80 md:h-auto rounded-lg overflow-hidden shadow-md">
            <div className="h-full w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1619913899325!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                title="Restaurant location"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-4">
            <a 
              href="#reservations"
              className="inline-flex items-center text-restaurant-burgundy hover:text-restaurant-dark"
            >
              <ExternalLink size={18} className="mr-2" />
              Make a reservation
            </a>
          </p>
          <p className="text-gray-700">We look forward to serving you!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
