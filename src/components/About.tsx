
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Chef preparing food" 
                className="rounded-lg shadow-lg w-full h-auto md:max-h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-restaurant-burgundy text-white p-6 rounded-lg hidden md:block">
                <p className="font-playfair text-3xl">25+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-playfair text-restaurant-dark mb-6">Our Culinary Story</h2>
            <div className="w-20 h-1 bg-restaurant-burgundy mb-8"></div>
            
            <p className="mb-6 text-lg">
              Gusto was born from a passion for authentic Italian cuisine and a desire to create memorable dining experiences. What started as a small family restaurant in 1998 has grown into one of the most celebrated culinary destinations in the region.
            </p>
            
            <p className="mb-6 text-lg">
              Our founder, Chef Alessandro Rossi, brings traditions from his hometown in Tuscany, combining them with innovative techniques and locally-sourced ingredients to create dishes that are both familiar and surprising.
            </p>
            
            <p className="mb-8 text-lg">
              Every dish tells a story, every flavor has a purpose, and every meal is crafted with passion and precision. At Gusto, we don't just serve food; we create experiences that linger long after the last bite.
            </p>
            
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" 
                alt="Chef Alessandro Rossi" 
                className="w-16 h-16 object-cover rounded-full border-2 border-restaurant-burgundy"
              />
              <div>
                <p className="font-medium text-restaurant-dark">Chef Alessandro Rossi</p>
                <p className="text-sm text-gray-600">Founder & Head Chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
