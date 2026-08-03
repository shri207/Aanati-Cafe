export type CategoryType = 
  | 'all' 
  | 'coffee' 
  | 'cold-coffee' 
  | 'mojitos' 
  | 'burgers' 
  | 'wraps' 
  | 'sandwiches' 
  | 'nuggets' 
  | 'fries' 
  | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryType;
  image: string;
  isChefRecommended?: boolean;
  isVeg: boolean;
  calories?: string;
  rating?: number;
  tags?: string[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  sugarLevel?: string;
  spiceLevel?: string;
  customNotes?: string;
}

export interface SpecialItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
  badge: string;
  highlights: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  verified: boolean;
  itemRecommended?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'ambience' | 'coffee' | 'food';
  image: string;
  subtitle?: string;
}

export interface ReservationDetails {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequests?: string;
}

export interface ContactDetails {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}
