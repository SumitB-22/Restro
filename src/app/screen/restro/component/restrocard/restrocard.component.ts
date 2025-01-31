import { Component } from '@angular/core';

@Component({
  selector: 'app-restrocard',
  templateUrl: './restrocard.component.html',
  styleUrls: ['./restrocard.component.css']
})
export class RestrocardComponent {
  firstRow = [
    {
      name: 'Spice Symphony',
      description: 'Authentic North Indian curries & tandoori specialties',
      type: 'North Indian Restaurant',
      serviceType: 'Dine-in · Takeaway',
      openingHours: '11:00 AM - 11:00 PM'
  },
  {
      name: 'Dosa Express',
      description: 'Crispy South Indian dosas with coconut chutney',
      type: 'South Indian Vegetarian',
      serviceType: 'Dine-in · Delivery',
      openingHours: '7:30 AM - 10:30 PM'
  },
  {
      name: 'Biryani Mahal',
      description: 'Hyderabadi dum biryani & kebabs',
      type: 'Mughlai Cuisine',
      serviceType: 'Takeaway · Delivery',
      openingHours: '10:30 AM - 11:00 PM'
  },
  {
      name: 'Chaat Corner',
      description: 'Mumbai-style street food & pani puri',
      type: 'Street Food Hub',
      serviceType: 'Dine-in · Takeaway',
      openingHours: '12:00 PM - 9:00 PM'
  },
  {
      name: 'Kerala Waves',
      description: 'Coastal seafood with coconut milk spices',
      type: 'Coastal Indian Cuisine',
      serviceType: 'Dine-in · Takeaway · Delivery',
      openingHours: '11:00 AM - 10:30 PM'
  }
];

secondRow = [
  {
      name: 'Tandoori Nights',
      description: 'Clay-oven roasted meats & naan breads',
      type: 'North Indian Grill',
      serviceType: 'Dine-in · Takeaway',
      openingHours: '12:00 PM - 11:30 PM'
  },
  {
      name: 'Thali House',
      description: 'Gujarati/Rajasthani unlimited thali meals',
      type: 'Traditional Indian',
      serviceType: 'Dine-in · Delivery',
      openingHours: '10:00 AM - 10:00 PM'
  },
  {
      name: 'Masala Chai Co.',
      description: 'Indian tea blends with street snacks',
      type: 'Cafe · Quick Bites',
      serviceType: 'Takeaway · Delivery',
      openingHours: '6:00 AM - 9:00 PM'
  },
  {
      name: 'Punjab Da Dhaba',
      description: 'Hearty sarson ka saag & makki roti',
      type: 'Rural Punjabi Cuisine',
      serviceType: 'Dine-in · Takeaway',
      openingHours: '8:00 AM - 10:30 PM'
  },
  {
      name: 'Jalebi Junction',
      description: 'Fresh sweets & traditional Indian desserts',
      type: 'Mithai House',
      serviceType: 'Takeaway · Delivery',
      openingHours: '8:00 AM - 11:00 PM'
  }
  ];
}