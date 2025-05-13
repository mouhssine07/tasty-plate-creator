
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-black z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)"
        }}
      />
      
      <div className="container-custom relative z-10 text-white animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">Discover Exquisite Flavors at Gusto</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">A culinary journey through traditional Italian cuisine with a modern twist</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#reservations" className="btn-primary text-center">Book a Table</a>
            <a href="#menu" className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-restaurant-burgundy transition-all font-medium text-center">
              Explore Menu
            </a>
          </div>
          
          <div className="mt-16 flex items-center space-x-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-md px-4 py-3 rounded-lg">
              <p className="text-sm font-medium">Open Hours</p>
              <p className="text-lg">Tue - Sun: 5:00 PM - 11:00 PM</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-md px-4 py-3 rounded-lg">
              <p className="text-sm font-medium">Location</p>
              <p className="text-lg">123 Culinary Avenue, Foodville</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
