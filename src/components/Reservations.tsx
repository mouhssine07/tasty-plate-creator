
import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

type ReservationFormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  specialRequests: string;
};

const initialFormData: ReservationFormData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  occasion: '',
  specialRequests: ''
};

const Reservations = () => {
  const [formData, setFormData] = useState<ReservationFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Here we would typically send data to a PHP backend
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Reservation Request Received",
        description: "We'll confirm your reservation shortly via email.",
      });
      
      setFormData(initialFormData);
      setIsSubmitting(false);
    }, 1500);
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservations" className="section-padding bg-restaurant-burgundy text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">Reserve Your Table</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Secure your spot for an unforgettable dining experience. For parties larger than 8, please call us directly.
          </p>
        </div>
        
        <div className="bg-white text-restaurant-dark rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="bg-[url('https://images.unsplash.com/photo-1550966871-3b3f82956374?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center p-8 hidden md:block">
              <div className="bg-black bg-opacity-60 text-white p-6 rounded-lg">
                <h3 className="font-playfair text-2xl mb-4">Dining Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday</span>
                    <span>Closed</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tuesday - Thursday</span>
                    <span>5:00 PM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span>5:00 PM - 11:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>5:00 PM - 9:00 PM</span>
                  </li>
                </ul>
                
                <div className="mt-8 pt-4 border-t border-white border-opacity-30">
                  <p className="font-medium">For special events or large parties:</p>
                  <p className="mt-2">Call us at (123) 456-7890</p>
                  <p className="mt-1">or email events@gusto.example.com</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="font-playfair text-2xl mb-6">Reservation Details</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-restaurant-burgundy"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-restaurant-burgundy"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-restaurant-burgundy"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={today}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-restaurant-burgundy"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium mb-1">Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-restaurant-burgundy appearance-none"
                          required
                        >
                          <option value="">Select time</option>
                          <option value="17:00">5:00 PM</option>
                          <option value="17:30">5:30 PM</option>
                          <option value="18:00">6:00 PM</option>
                          <option value="18:30">6:30 PM</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:00">9:00 PM</option>
                          <option value="21:30">9:30 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium mb-1">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-restaurant-burgundy appearance-none"
                          required
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="occasion" className="block text-sm font-medium mb-1">Occasion (Optional)</label>
                      <select
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-restaurant-burgundy appearance-none"
                      >
                        <option value="">Select occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="date">Date Night</option>
                        <option value="business">Business</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium mb-1">Special Requests (Optional)</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-restaurant-burgundy"
                      rows={3}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-restaurant-burgundy text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-all w-full font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Booking...' : 'Book Table'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
