import { MenuItem, SpecialItem, Review, GalleryItem } from '../types';

export const CAFE_INFO = {
  name: "Aanati Cafe",
  tagline: "Where Every Sip Creates a Memory.",
  location: "F18, Madhura Nagar, Hyderabad, Telangana 500038",
  nearbyLandmark: "Adjacent to Madhura Nagar Park",
  phone: "+91 98765 43210",
  altPhone: "+91 91234 56789",
  email: "hello@aanaticafe.com",
  rating: 5.0,
  reviewsCount: 23,
  priceRange: "₹200–400",
  timings: "Open Daily 9:00 AM – 11:00 PM",
  services: ["Dine-in", "Drive-through", "Order Online"],
  features: [
    "Fresh Ingredients",
    "Perfect Ambience",
    "Affordable Luxury",
    "Premium Coffee",
    "Friendly Service",
    "Women-Owned Business",
    "Fast Service",
    "Drive-through Available"
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE & HOT DRIPS
  {
    id: 'c1',
    name: 'Aanati Signature Espresso',
    description: 'Rich, bold double shot crafted from 100% single-origin South Indian Arabica beans with caramel crema notes.',
    price: 180,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: true,
    calories: '15 kcal',
    rating: 4.9,
    tags: ['Single Origin', 'Bold']
  },
  {
    id: 'c2',
    name: 'Artisanal Cappuccino',
    description: 'Velvety steamed whole milk over dark roast espresso, dusted with Belgian cocoa powder and intricate latte art.',
    price: 220,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: true,
    calories: '120 kcal',
    rating: 5.0,
    tags: ['Customer Favorite', 'Latte Art']
  },
  {
    id: 'c3',
    name: 'Vanilla Bean Cafe Latte',
    description: 'Smooth espresso infused with real Madagascar vanilla bean pod syrup and micro-foamed milk.',
    price: 240,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    calories: '180 kcal',
    rating: 4.8,
    tags: ['Aromatic', 'Smooth']
  },
  {
    id: 'c4',
    name: 'Hazelnut Mocha Roast',
    description: 'Decadent dark chocolate and roasted hazelnut praline layered with espresso and warm frothed milk.',
    price: 260,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1607681034540-2c46cc71896d?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    calories: '230 kcal',
    rating: 4.9,
    tags: ['Sweet & Nutty']
  },

  // COLD COFFEE
  {
    id: 'cc1',
    name: 'Aanati Signature Cold Coffee',
    description: 'Our iconic blend of espresso, chilled cream, artisanal vanilla gelato, and dark chocolate drizzle.',
    price: 260,
    category: 'cold-coffee',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: true,
    calories: '280 kcal',
    rating: 5.0,
    tags: ['Bestseller', 'Creamy']
  },
  {
    id: 'cc2',
    name: 'Vietnamese Iced Coffee',
    description: 'Slow-drip dark roast espresso served over crushed ice and sweetened condensed whole milk.',
    price: 250,
    category: 'cold-coffee',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    calories: '210 kcal',
    rating: 4.9,
    tags: ['Intense', 'Refreshing']
  },
  {
    id: 'cc3',
    name: 'Caramel Macchiato Cold Brew',
    description: '24-hour steeped cold brew topped with cold foam and handcrafted sea salt caramel ribbons.',
    price: 270,
    category: 'cold-coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: true,
    calories: '220 kcal',
    rating: 4.9,
    tags: ['Cold Brew', 'Caramel']
  },

  // SPECIAL MOJITOS
  {
    id: 'm1',
    name: 'Fresh Mint Lime Mojito',
    description: 'Crisp hand-muddled organic mint leaves, fresh key lime, sparkling soda, and golden cane sugar over crushed ice.',
    price: 220,
    category: 'mojitos',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: true,
    calories: '110 kcal',
    rating: 5.0,
    tags: ['Cooling', 'Signature']
  },
  {
    id: 'm2',
    name: 'Wild Blueberry Passion Mojito',
    description: 'Exotic passion fruit nectar fused with muddled fresh blueberries, lime mint, and fizzing botanical tonic.',
    price: 240,
    category: 'mojitos',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    calories: '130 kcal',
    rating: 4.8,
    tags: ['Fruity Burst']
  },
  {
    id: 'm3',
    name: 'Watermelon Basil Fizz',
    description: 'Freshly pressed Hyderabad watermelon juice muddled with Thai basil, green lime juice, and sparkling soda.',
    price: 230,
    category: 'mojitos',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    calories: '95 kcal',
    rating: 4.9,
    tags: ['Hydrating', 'Natural']
  },

  // BURGERS
  {
    id: 'b1',
    name: 'Classic Aanati Chicken Burger',
    description: 'Crispy seasoned chicken fillet patty, melted cheddar cheese, house smoked paprika aioli, and butter lettuce on toasted brioche.',
    price: 320,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: false,
    calories: '490 kcal',
    rating: 5.0,
    tags: ['Bestseller', 'Gourmet']
  },
  {
    id: 'b2',
    name: 'Smokey Jalapeño Cheese Burger',
    description: 'Juicy spiced chicken patty topped with grilled jalapeños, molten pepper jack cheese, crispy onion rings, and BBQ glaze.',
    price: 350,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800',
    isVeg: false,
    calories: '540 kcal',
    rating: 4.9,
    tags: ['Spicy', 'Cheesy']
  },
  {
    id: 'b3',
    name: 'Truffle Mushroom Veggie Burger',
    description: 'Artisanal herb potato and Portobello mushroom patty, white cheddar, caramelised onions, and garlic truffle mayo.',
    price: 290,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: true,
    calories: '420 kcal',
    rating: 4.8,
    tags: ['Gourmet Veg', 'Truffle']
  },

  // WRAPS
  {
    id: 'w1',
    name: 'Crispy Chicken Tender Wrap',
    description: 'Golden fried chicken tenders wrapped in warm tortilla with crisp romaine, pickled onions, and house garlic mayonnaise.',
    price: 280,
    category: 'wraps',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: false,
    calories: '410 kcal',
    rating: 4.9,
    tags: ['Crunchy', 'Hearty']
  },
  {
    id: 'w2',
    name: 'Paneer Tikka Herb Wrap',
    description: 'Chargrilled cottage cheese marinated in aromatic spices, mint chutney, bell peppers, and fresh greens wrapped in soft flatbread.',
    price: 260,
    category: 'wraps',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    calories: '370 kcal',
    rating: 4.8,
    tags: ['Tandoori Spices', 'Veg']
  },

  // SANDWICHES
  {
    id: 's1',
    name: 'Signature Chicken Club Sandwich',
    description: 'Triple-decker toasted artisanal bread packed with grilled spiced chicken breast, fried egg, lettuce, tomatoes, and herb mayo.',
    price: 310,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: false,
    calories: '450 kcal',
    rating: 5.0,
    tags: ['Classic Club', 'Loaded']
  },
  {
    id: 's2',
    name: 'Spinach & Corn Cheese Panini',
    description: 'Grilled sourdough bread stuffed with creamy spinach, sweet corn kernels, melted mozzarella, and oregano seasoning.',
    price: 250,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    calories: '360 kcal',
    rating: 4.8,
    tags: ['Melted Cheese', 'Comfort']
  },

  // CHICKEN NUGGETS
  {
    id: 'n1',
    name: 'Golden Crispy Chicken Nuggets',
    description: '100% tender chicken breast bites fried to golden perfection, served with house honey mustard and fiery dip.',
    price: 260,
    category: 'nuggets',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: false,
    calories: '380 kcal',
    rating: 4.9,
    tags: ['Kid Friendly', 'Sharing']
  },

  // FRIES & SIDES
  {
    id: 'f1',
    name: 'Peri Peri Seasoned Fries',
    description: 'Hand-cut potato fries tossed in fiery African Peri Peri spices, served with cool garlic aioli.',
    price: 190,
    category: 'fries',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: true,
    calories: '320 kcal',
    rating: 4.9,
    tags: ['Zesty', 'Crispy']
  },
  {
    id: 'f2',
    name: 'Loaded Cheesy Bacon Fries',
    description: 'Crispy golden fries smothered in molten cheddar sauce, jalapeño bits, and crispy herbs.',
    price: 240,
    category: 'fries',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    calories: '410 kcal',
    rating: 4.8,
    tags: ['Indulgent']
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'Molten Belgian Chocolate Lava',
    description: 'Warm dark chocolate cake with a gooey oozing core, paired with a scoop of Madagascar vanilla gelato.',
    price: 280,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
    isChefRecommended: true,
    isVeg: true,
    calories: '390 kcal',
    rating: 5.0,
    tags: ['Warm & Decadent']
  },
  {
    id: 'd2',
    name: 'New York Blueberry Cheesecake',
    description: 'Silky smooth baked cream cheese over a graham cracker crust, topped with real wild blueberry compote.',
    price: 270,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    calories: '340 kcal',
    rating: 4.9,
    tags: ['Classic Slice']
  }
];

export const SIGNATURE_SPECIALS: SpecialItem[] = [
  {
    id: 'sp1',
    name: 'Classic Aanati Chicken Burger',
    subtitle: 'Our Flagship Culinary Creation',
    description: 'Handcrafted tender chicken patty coated in secret herb crust, layered with aged cheddar, caramelized onions, and our signature smoked paprika aioli tucked in toasted sesame brioche.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000',
    badge: 'Chef\'s Masterpiece',
    highlights: ['Freshly Ground Chicken', 'Artisanal Brioche Bun', 'House Smoked Aioli', 'Served with Fries']
  },
  {
    id: 'sp2',
    name: 'Aanati Signature Cold Coffee',
    subtitle: 'Creamy, Bold & Unforgettable',
    description: 'Double shot of cold brew espresso blended with whole cream milk, dark Belgian cocoa powder, topped with a rich ball of vanilla gelato and chocolate shavings.',
    price: 260,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=1000',
    badge: 'Customer Favorite',
    highlights: ['100% Arabica Beans', 'Madagascar Vanilla Gelato', 'Chilled to Perfection']
  },
  {
    id: 'sp3',
    name: 'Fresh Mint Lime Mojito',
    subtitle: 'The Ultimate Refreshment',
    description: 'Hand-muddled fresh garden mint, key lime rounds, sparkling spring water, and organic raw cane sugar syrup over finely crushed diamond ice.',
    price: 220,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1000',
    badge: 'Summer Special',
    highlights: ['Hand-Muddled Garden Mint', 'Fresh Key Lime', 'Sparkling Botanicals']
  },
  {
    id: 'sp4',
    name: 'Signature Chicken Club Sandwich',
    subtitle: 'Layered Luxury Comfort',
    description: 'Triple stacked toasted artisan sourdough bread layered with smoked grilled chicken breast, sunny fried egg, crisp lettuce, farm fresh tomatoes, and garlic butter.',
    price: 310,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=1000',
    badge: 'Gourmet Club',
    highlights: ['Artisan Sourdough', 'Farm Fresh Ingredients', 'Triple Layered']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Aarav Sharma',
    rating: 5.0,
    comment: 'Great ambience with a pleasant look and feel. Tucked away right in Madhura Nagar, this café feels like a hidden European oasis. The cappuccino and cold brew are unmatched in Hyderabad.',
    date: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    verified: true,
    itemRecommended: 'Aanati Signature Cold Coffee'
  },
  {
    id: 'r2',
    name: 'Priya Reddy',
    rating: 5.0,
    comment: 'The burgers, wraps and mojitos taste amazing. The chicken burger patty was juicy and full of flavour, and the mint lime mojito is so refreshing on a warm day!',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    verified: true,
    itemRecommended: 'Classic Chicken Burger'
  },
  {
    id: 'r3',
    name: 'Karthik Varma',
    rating: 5.0,
    comment: 'Affordable prices with premium quality. In a market where boutique cafes overcharge, Aanati Cafe offers genuine luxury at super accessible prices. The staff is so polite.',
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    verified: true,
    itemRecommended: 'Signature Club Sandwich'
  },
  {
    id: 'r4',
    name: 'Sneha Rao',
    rating: 5.0,
    comment: 'Highly recommended! The aesthetic is so vintage and Instagrammable. Sitting outdoors next to the Madhura Nagar Park in the evening with a warm latte is pure bliss.',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    verified: true,
    itemRecommended: 'Artisanal Cappuccino'
  },
  {
    id: 'r5',
    name: 'Rohan Mehta',
    rating: 5.0,
    comment: 'Sensational food and coffee. Their drive-through and quick pickup is super convenient when commuting through Madhura Nagar. 10/10 recommendation!',
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    verified: true,
    itemRecommended: 'Crispy Chicken Nuggets'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Vintage Cafe Ambience & Seating',
    category: 'ambience',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Warm lighting and cozy wooden craftsmanship'
  },
  {
    id: 'g2',
    title: 'Artisanal Latte Art Cappuccino',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Handcrafted by expert baristas'
  },
  {
    id: 'g3',
    title: 'Gourmet Classic Chicken Burger',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Juicy patty & toasted brioche bun'
  },
  {
    id: 'g4',
    title: 'Parkside Outdoor Terrace',
    category: 'ambience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Relaxing views overlooking Madhura Nagar Park'
  },
  {
    id: 'g5',
    title: 'Fresh Mint Lime Mojito & Cocktails',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Refreshing botanical fizz'
  },
  {
    id: 'g6',
    title: 'Molten Belgian Chocolate Lava Cake',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Warm chocolate with vanilla gelato'
  },
  {
    id: 'g7',
    title: 'Evening Lantern Glow & Exterior',
    category: 'ambience',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Enchanting night atmosphere'
  },
  {
    id: 'g8',
    title: 'Triple Layered Chicken Club Sandwich',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Served with golden potato fries'
  }
];
