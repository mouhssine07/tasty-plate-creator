
import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservations", href: "#reservations" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white bg-opacity-95 shadow-md z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <a href="#hero" className="font-playfair text-2xl font-bold text-restaurant-burgundy">Gusto</a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className="text-restaurant-dark hover:text-restaurant-burgundy transition-colors"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-restaurant-dark" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-16 bg-white bg-opacity-95 md:hidden transition-transform duration-300 ease-in-out z-40",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col items-center pt-8 space-y-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className="text-xl font-medium text-restaurant-dark hover:text-restaurant-burgundy transition-colors"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
