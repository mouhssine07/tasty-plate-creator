
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

type MenuCategory = 'starters' | 'mains' | 'pasta' | 'desserts' | 'drinks';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
};

type MenuItems = {
  [key in MenuCategory]: MenuItem[];
};

const menuItems: MenuItems = {
  starters: [
    {
      name: "Bruschetta Classica",
      description: "Toasted bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil",
      price: "$9",
      popular: true
    },
    {
      name: "Calamari Fritti",
      description: "Crispy fried calamari served with lemon and house-made marinara sauce",
      price: "$14"
    },
    {
      name: "Antipasto Misto",
      description: "Selection of Italian cured meats, cheese, olives, and marinated vegetables",
      price: "$18"
    },
    {
      name: "Carpaccio di Manzo",
      description: "Thinly sliced raw beef with arugula, shaved Parmesan, and truffle oil",
      price: "$16"
    }
  ],
  pasta: [
    {
      name: "Spaghetti alla Carbonara",
      description: "Traditional Roman pasta with eggs, pecorino cheese, guanciale, and black pepper",
      price: "$18",
      popular: true
    },
    {
      name: "Pappardelle al Ragù",
      description: "Wide ribbons of pasta with slow-cooked beef and pork ragù",
      price: "$22"
    },
    {
      name: "Risotto ai Funghi",
      description: "Creamy Arborio rice with wild mushrooms, white wine, and Parmesan",
      price: "$20"
    },
    {
      name: "Ravioli di Ricotta e Spinaci",
      description: "Homemade ravioli filled with ricotta and spinach in sage butter sauce",
      price: "$19"
    }
  ],
  mains: [
    {
      name: "Filetto di Manzo",
      description: "Grilled beef tenderloin with rosemary potatoes and red wine reduction",
      price: "$32"
    },
    {
      name: "Branzino al Forno",
      description: "Whole baked Mediterranean sea bass with herbs, lemon, and seasonal vegetables",
      price: "$28",
      popular: true
    },
    {
      name: "Pollo al Marsala",
      description: "Pan-seared chicken breast with Marsala wine sauce and wild mushrooms",
      price: "$24"
    },
    {
      name: "Osso Buco",
      description: "Braised veal shanks with gremolata and saffron risotto",
      price: "$34"
    }
  ],
  desserts: [
    {
      name: "Tiramisù",
      description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
      price: "$10",
      popular: true
    },
    {
      name: "Panna Cotta",
      description: "Silky vanilla custard with mixed berry compote",
      price: "$9"
    },
    {
      name: "Cannoli Siciliani",
      description: "Crispy shells filled with sweet ricotta and chocolate chips, dusted with powdered sugar",
      price: "$8"
    },
    {
      name: "Gelato Artigianale",
      description: "Selection of house-made gelato, ask your server for today's flavors",
      price: "$7"
    }
  ],
  drinks: [
    {
      name: "Espresso",
      description: "Strong Italian coffee prepared with our house blend",
      price: "$3.50"
    },
    {
      name: "Negroni",
      description: "Classic Italian cocktail with gin, vermouth, and Campari",
      price: "$12"
    },
    {
      name: "Chianti Classico",
      description: "Glass of traditional Tuscan red wine with notes of cherry and herbs",
      price: "$14",
      popular: true
    },
    {
      name: "Limoncello",
      description: "House-made lemon liqueur, served chilled as a digestif",
      price: "$8"
    }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');
  
  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'starters', label: 'Appetizers' },
    { id: 'pasta', label: 'Pasta & Risotto' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Drinks' }
  ];

  return (
    <section id="menu" className="section-padding bg-restaurant-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair text-restaurant-dark mb-4">Our Menu</h2>
          <div className="w-20 h-1 bg-restaurant-burgundy mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Discover our carefully crafted dishes, prepared with fresh, seasonal ingredients and passion for Italian culinary traditions.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all text-sm md:text-base",
                  activeCategory === category.id 
                    ? "bg-restaurant-burgundy text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Menu Items */}
          <div className="grid gap-8 md:grid-cols-2">
            {menuItems[activeCategory].map((item, index) => (
              <div key={index} className="menu-item">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-playfair font-medium text-restaurant-dark">
                      {item.name}
                      {item.popular && (
                        <span className="ml-2 text-xs py-1 px-2 bg-restaurant-burgundy text-white rounded-full font-lato">
                          Popular
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <span className="font-playfair text-lg text-restaurant-burgundy font-medium">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 italic mb-4">*All our dishes may contain allergens. Please inform your server of any dietary restrictions.</p>
          <a href="#reservations" className="btn-primary inline-block">Reserve a Table</a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
