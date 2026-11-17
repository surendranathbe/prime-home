export const featuredPropertiesData = [
  {
    id: 1,
    title: 'The Grand Palm Villa',
    category: 'Luxury Villa',
    location: 'Worli Sea Face, Mumbai',
    price: '₹8.50 Cr',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    beds: 4,
    baths: 5,
    area: '4,850 sq.ft',
    tag: 'Featured',
  },
  {
    id: 2,
    title: 'Skyline Horizon Penthouse',
    category: 'Penthouse',
    location: 'Indiranagar, Bangalore',
    price: '₹4.20 Cr',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    beds: 3,
    baths: 4,
    area: '3,200 sq.ft',
    tag: 'Exclusive',
  },
  {
    id: 3,
    title: 'Emerald Bayfront Estate',
    category: 'Luxury Villa',
    location: 'Candolim Beach, Goa',
    price: '₹6.75 Cr',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    beds: 5,
    baths: 6,
    area: '5,600 sq.ft',
    tag: 'Trending',
  },
  {
    id: 4,
    title: 'Royal Crest Residency',
    category: 'Modern Apartment',
    location: 'Jubilee Hills, Hyderabad',
    price: '₹3.40 Cr',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    beds: 3,
    baths: 3,
    area: '2,900 sq.ft',
    tag: 'New Launch',
  },
  {
    id: 5,
    title: 'Aura Heights Mansion',
    category: 'Luxury Villa',
    location: 'Golf Course Road, Gurgaon',
    price: '₹9.25 Cr',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    beds: 5,
    baths: 6,
    area: '6,200 sq.ft',
    tag: 'Exclusive',
  },
  {
    id: 6,
    title: 'Marina View Haven',
    category: 'Penthouse',
    location: 'Boat Club Road, Pune',
    price: '₹3.95 Cr',
    image:
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    beds: 3,
    baths: 4,
    area: '3,450 sq.ft',
    tag: 'Featured',
  },
  {
    id: 7,
    title: 'The Palm Sanctuary',
    category: 'Luxury Villa',
    location: 'ECR Beach Road, Chennai',
    price: '₹6.20 Cr',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    beds: 4,
    baths: 4,
    area: '4,500 sq.ft',
    tag: 'Exclusive',
  },
  {
    id: 8,
    title: 'Signature Glass House',
    category: 'Modern Apartment',
    location: 'Banjara Hills, Hyderabad',
    price: '₹4.80 Cr',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    beds: 3,
    baths: 3,
    area: '3,100 sq.ft',
    tag: 'Trending',
  },
];

// ============================================================================
// Comprehensive Properties Dataset (Powers /properties & /properties/:id)
// ============================================================================
export const allPropertiesData = [
  {
    id: 1,
    title: 'The Grand Palm Villa',
    category: 'Villas',
    displayCategory: 'Luxury Villa',
    location: 'Worli Sea Face, Mumbai',
    city: 'Mumbai',
    price: '₹8.50 Cr',
    numericPrice: 85000000,
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 4,
    baths: 5,
    area: '4,850 sq.ft',
    status: 'Ready to Move',
    tag: 'Featured',
    description:
      'The Grand Palm Villa is a masterclass in coastal contemporary architecture situated along the prestigious Worli Sea Face promenade in South Mumbai. Boasting unobstructed panoramic views of the Arabian Sea and the Bandra-Worli Sea Link, this private multi-level sanctuary offers unrivaled grandeur, absolute privacy, and bespoke European craftsmanship. Features include double-height grand salons, a private temperature-controlled pool, imported Statuario marble flooring, and automated climate control systems.',
    overview: {
      propertyType: 'Independent Seafront Villa',
      builtUpArea: '4,850 sq.ft',
      carpetArea: '4,100 sq.ft',
      furnishing: 'Fully Furnished (Italian Couture)',
      facing: 'West (Sea Facing)',
      floor: 'G + 2 Floors with Terrace Deck',
      parking: '3 Covered Spaces',
      possession: 'Immediate (Ready to Move)',
      reraId: 'P51900023412',
    },
    amenities: [
      'Private Heated Infinity Pool',
      'Landscaped Zen Terrace Garden',
      'Italian Modular Kitchen with Miele Appliances',
      'Private Hydraulic Passenger Elevator',
      'Home Cinema with Dolby Atmos Acoustics',
      'Smart Home Automation by Lutron',
      'Dedicated Staff Quarters with Bath',
      'Multi-Tier Biometric Security & CCTV',
      '100% Silent Power Generator Backup',
      'Rainwater Harvesting & Solar Water Heating',
    ],
    features: [
      'Unobstructed sunset views over the Arabian Sea',
      'Floor-to-ceiling soundproof Schuco double-glazed windows',
      'Customized walk-in wardrobes in master suites',
      'Private wine cellar and bar counter',
    ],
    agent: {
      name: 'Surendra Nath Bezawada',
      phone: '+91 1234567891',
      email: 'test@primerealstate.com',
    },
  },
  {
    id: 2,
    title: 'Skyline Horizon Penthouse',
    category: 'Apartments',
    displayCategory: 'Penthouse',
    location: 'Indiranagar, Bangalore',
    city: 'Bangalore',
    price: '₹4.20 Cr',
    numericPrice: 42000000,
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 3,
    baths: 4,
    area: '3,200 sq.ft',
    status: 'Ready to Move',
    tag: 'Exclusive',
    description:
      'Perched on the 28th and 29th storeys in prime Indiranagar, this duplex penthouse commands 360-degree vistas across Bangalore’s lush tree-lined canopy. Featuring a wrap-around sky terrace, floating staircase, Poggenpohl designer kitchen, and private plunge pool, it is the quintessential home for urban tastemakers who refuse to compromise on space or sophistication.',
    overview: {
      propertyType: 'Duplex Penthouse',
      builtUpArea: '3,200 sq.ft',
      carpetArea: '2,750 sq.ft',
      furnishing: 'Semi-Furnished Luxury',
      facing: 'East Facing (Vastu Compliant)',
      floor: '28th & 29th (Top Floor)',
      parking: '2 Covered Reserved Slots',
      possession: 'Ready to Move',
      reraId: 'PRM/KA/RERA/1251/310',
    },
    amenities: [
      'Private Terrace Plunge Pool',
      'Clubhouse with Gymnasium & Steam Sauna',
      'High-Speed Destination Lifts',
      'Full Home Automation with iPad Control',
      '24/7 Concierge & Package Handling',
      'EV Charging Point in Dedicated Bay',
    ],
    features: [
      'Wrap-around 800 sq.ft private garden terrace',
      'Double-height living room with 20ft glass facade',
      'Master suite with jacuzzi bathtub and rain shower',
    ],
    agent: {
      name: 'Ananya Deshmukh',
      phone: '+91 1234567891',
      email: 'ananya@primeestates.in',
    },
  },
  {
    id: 3,
    title: 'Emerald Bayfront Estate',
    category: 'Villas',
    displayCategory: 'Luxury Villa',
    location: 'Candolim Beach, Goa',
    city: 'Goa',
    price: '₹6.75 Cr',
    numericPrice: 67500000,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 5,
    baths: 6,
    area: '5,600 sq.ft',
    status: 'Ready to Move',
    tag: 'Trending',
    description:
      'Step directly onto the golden sands of Candolim from this private 5-bedroom coastal sanctuary. Blending Portuguese-colonial heritage charm with minimalist open-air luxury, the estate includes a 40-foot lap pool, courtyard fountains, teakwood rafters, and a shaded outdoor pergola dining pavilion.',
    overview: {
      propertyType: 'Beachfront Standalone Estate',
      builtUpArea: '5,600 sq.ft',
      carpetArea: '4,900 sq.ft',
      furnishing: 'Fully Furnished (Boho-Luxury)',
      facing: 'West (Direct Beachfront)',
      floor: 'G + 1 Floor',
      parking: '4 Vehicles',
      possession: 'Immediate',
      reraId: 'PRGO04230076',
    },
    amenities: [
      'Direct Private Beach Access Gate',
      '40-foot Resort-Style Heated Lap Pool',
      'Covered Outdoor Bar & BBQ Pavilion',
      'Landscaped Lawn with Coconut Grove',
      'Staff Quarters & Driver Rest Area',
      'Water Desalination & Purification Plant',
    ],
    features: [
      'Rare direct beach frontage in North Goa',
      'Independent security lodge at main gates',
      'Solid Burma teakwood roof trusses and louvers',
    ],
    agent: {
      name: 'Surendra Nath Bezawada',
      phone: '+91 1234567891',
      email: 'test@primerealstate.com',
    },
  },
  {
    id: 4,
    title: 'Royal Crest Residency',
    category: 'Apartments',
    displayCategory: 'Modern Apartment',
    location: 'Jubilee Hills, Hyderabad',
    city: 'Hyderabad',
    price: '₹3.40 Cr',
    numericPrice: 34000000,
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 3,
    baths: 3,
    area: '2,900 sq.ft',
    status: 'Under Construction',
    tag: 'New Launch',
    description:
      'Set in Hyderabad’s most coveted neighborhood, Royal Crest Residency offers low-density ultra-spacious residences with expansive balconies overlooking KBR National Park. Enjoy an exclusive 25,000 sq.ft rooftop infinity club, banquet halls, squash court, and five-tier security.',
    overview: {
      propertyType: 'Luxury High-Rise Residence',
      builtUpArea: '2,900 sq.ft',
      carpetArea: '2,400 sq.ft',
      furnishing: 'Unfurnished (Custom Bare Shell)',
      facing: 'North-East',
      floor: '14th Floor of 22 Floors',
      parking: '2 Basement Car Parks',
      possession: 'Dec 2026',
      reraId: 'P02400008912',
    },
    amenities: [
      'Rooftop Infinity Edge Pool with Deck',
      'Tennis & Badminton Courts',
      'Bespoke Business Centre with Boardrooms',
      'Central Air-Conditioning & Air Purification',
      'Creche and Children’s Play Pavilion',
    ],
    features: [
      'Overlooks lush greenery of KBR National Park',
      'Only 2 residences per floor with private lobby',
      '11-foot clear floor-to-ceiling heights',
    ],
    agent: {
      name: 'Vikramaditya Rao',
      phone: '+91 1234567891',
      email: 'vikram@primeestates.in',
    },
  },
  {
    id: 5,
    title: 'Aura Heights Mansion',
    category: 'Villas',
    displayCategory: 'Luxury Villa',
    location: 'Golf Course Road, Gurgaon',
    city: 'Gurgaon',
    price: '₹9.25 Cr',
    numericPrice: 92500000,
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 5,
    baths: 6,
    area: '6,200 sq.ft',
    status: 'Ready to Move',
    tag: 'Exclusive',
    description:
      'Directly adjacent to the premier championship golf course, Aura Heights Mansion exemplifies grand suburban luxury. Highlights include an Italian designer elevator, subterranean recreation den with billiards, double master bedroom suites, and floor-to-ceiling glazing.',
    overview: {
      propertyType: 'Golf Course Villa',
      builtUpArea: '6,200 sq.ft',
      carpetArea: '5,300 sq.ft',
      furnishing: 'Fully Furnished Luxury',
      facing: 'East Facing',
      floor: 'Basement + G + 2 Floors',
      parking: '4 Covered Car Bays',
      possession: 'Ready to Move',
      reraId: 'HARERA/GGM/2022/411',
    },
    amenities: [
      'Direct Golf Course Fairway Views',
      'Basement Entertainment & Media Lounge',
      'Private Temperature-Controlled Pool',
      'Private Elevator & Service Staircase',
      'Full Home Automation & Sensor Lighting',
    ],
    features: [
      'Uninterrupted fairways and greens backdrop',
      'Bespoke walk-in wine room and humidor',
      'Imported double-glazed soundproof glass walls',
    ],
    agent: {
      name: 'Ananya Deshmukh',
      phone: '+91 1234567891',
      email: 'ananya@primeestates.in',
    },
  },
  {
    id: 6,
    title: 'Marina View Haven',
    category: 'Apartments',
    displayCategory: 'Penthouse',
    location: 'Boat Club Road, Pune',
    city: 'Pune',
    price: '₹3.95 Cr',
    numericPrice: 39500000,
    image:
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 3,
    baths: 4,
    area: '3,450 sq.ft',
    status: 'Ready to Move',
    tag: 'Featured',
    description:
      'Set along the tranquil Mula-Mutha riverbank at Boat Club Road, this bespoke penthouse residence provides private riverfront serenity in Pune’s most prestigious heritage address.',
    overview: {
      propertyType: 'Riverfront Penthouse',
      builtUpArea: '3,450 sq.ft',
      carpetArea: '2,950 sq.ft',
      furnishing: 'Fully Furnished',
      facing: 'North Facing',
      floor: '12th Floor (Penthouse)',
      parking: '2 Covered Slots',
      possession: 'Ready to Move',
      reraId: 'P52100019842',
    },
    amenities: [
      'Riverfront Observation Deck',
      'Private Jacuzzi on Terrace',
      'Access to Premium Boat Club Facilities',
      'High-Speed Elevators with Biometric Keys',
    ],
    features: [
      'Rare waterfront living in Central Pune',
      'Hardwood Burmese teak flooring in master bedroom',
    ],
    agent: {
      name: 'Vikramaditya Rao',
      phone: '+91 1234567891',
      email: 'vikram@primeestates.in',
    },
  },
  {
    id: 7,
    title: 'The Palm Sanctuary',
    category: 'Villas',
    displayCategory: 'Luxury Villa',
    location: 'ECR Beach Road, Chennai',
    city: 'Chennai',
    price: '₹6.20 Cr',
    numericPrice: 62000000,
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 4,
    baths: 4,
    area: '4,500 sq.ft',
    status: 'Ready to Move',
    tag: 'Exclusive',
    description:
      'A tropical modern beach residence situated inside a gated private enclave on East Coast Road. Features landscaped courtyards, swimming pool with waterfall feature, and solar power integration.',
    overview: {
      propertyType: 'Independent Beach Villa',
      builtUpArea: '4,500 sq.ft',
      carpetArea: '3,800 sq.ft',
      furnishing: 'Semi-Furnished',
      facing: 'East Facing',
      floor: 'G + 1 Floor',
      parking: '3 Cars',
      possession: 'Ready to Move',
      reraId: 'TN/01/Building/0192',
    },
    amenities: [
      'Private Swimming Pool with Waterfall',
      'Private Access Road to Beach',
      'Clubhouse & Gym Access',
      '100% Solar-Assisted Power Grid',
    ],
    features: [
      '300 meters from Bay of Bengal shoreline',
      'Gated community with 24-hour patrolled security',
    ],
    agent: {
      name: 'Surendra Nath Bezawada',
      phone: '+91 1234567891',
      email: 'test@primerealstate.com',
    },
  },
  {
    id: 8,
    title: 'Signature Glass House',
    category: 'Apartments',
    displayCategory: 'Modern Apartment',
    location: 'Banjara Hills, Hyderabad',
    city: 'Hyderabad',
    price: '₹4.80 Cr',
    numericPrice: 48000000,
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 3,
    baths: 3,
    area: '3,100 sq.ft',
    status: 'Ready to Move',
    tag: 'Trending',
    description:
      'Modern glass architecture apartment overlooking the serene Taj Krishna valley in Banjara Hills. Equipped with floor-to-ceiling double-glazed windows, private elevator lobby, and German Poggenpohl kitchen.',
    overview: {
      propertyType: 'Boutique Apartment',
      builtUpArea: '3,100 sq.ft',
      carpetArea: '2,650 sq.ft',
      furnishing: 'Fully Furnished',
      facing: 'North Facing',
      floor: '8th of 10 Floors',
      parking: '2 Covered Slots',
      possession: 'Immediate',
      reraId: 'P02400002194',
    },
    amenities: [
      'Heated Indoor Pool & Spa',
      'Private Elevator Access to Residence',
      'Valet & Concierge Desk',
      'Smart Home Lighting & Shades',
    ],
    features: [
      'Valley view from expansive living room deck',
      'Imported Greek marble flooring throughout',
    ],
    agent: {
      name: 'Vikramaditya Rao',
      phone: '+91 1234567891',
      email: 'vikram@primeestates.in',
    },
  },
  {
    id: 9,
    title: 'Emerald Valley Luxury Plots',
    category: 'Plots',
    displayCategory: 'Gated Villa Plot',
    location: 'Moinabad Road, Hyderabad',
    city: 'Hyderabad',
    price: '₹1.65 Cr',
    numericPrice: 16500000,
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 0,
    baths: 0,
    area: '4,500 sq.ft (500 sq.yds)',
    status: 'Ready to Move',
    tag: 'New Launch',
    description:
      'HMDA and RERA-approved luxury villa plot within a 35-acre gated eco-haven. Features 40ft wide blacktop avenues, underground drainage and cabling, landscaped fruit orchards, and grand entrance arch with round-the-clock security.',
    overview: {
      propertyType: 'Residential Villa Plot',
      builtUpArea: '500 sq.yards (4,500 sq.ft)',
      carpetArea: '500 sq.yards',
      furnishing: 'Unfurnished (Open Plot)',
      facing: 'East Facing',
      floor: 'Ground Plot',
      parking: 'Available on plot',
      possession: 'Immediate Registration',
      reraId: 'P02400005510',
    },
    amenities: [
      'Grand Club with Tennis Court & Gym',
      'Underground Electrical & Water Supply',
      'Perimeter Security with CCTV Coverage',
      '100% Clear Title with Bank Loan Approvals',
    ],
    features: [
      '100% Vastu compliant rectangular dimension',
      'Close to upcoming Regional Ring Road',
    ],
    agent: {
      name: 'Surendra Nath Bezawada',
      phone: '+91 1234567891',
      email: 'test@primerealstate.com',
    },
  },
  {
    id: 10,
    title: 'Serenity Highland Country Plot',
    category: 'Plots',
    displayCategory: 'Gated Villa Plot',
    location: 'Alibaug, Maharashtra',
    city: 'Alibaug',
    price: '₹2.75 Cr',
    numericPrice: 27500000,
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 0,
    baths: 0,
    area: '9,000 sq.ft (1,000 sq.yds)',
    status: 'Ready to Move',
    tag: 'Exclusive',
    description:
      'Hillside country estate plot in Alibaug with direct road access, minutes from Mandwa Ro-Ro ferry terminal. Perfect for developing a signature luxury weekend villa with pool and private fruit orchard.',
    overview: {
      propertyType: 'Estate Farmhouse Plot',
      builtUpArea: '1,000 sq.yards (9,000 sq.ft)',
      carpetArea: '1,000 sq.yards',
      furnishing: 'Open Land',
      facing: 'North-East',
      floor: 'Gentle Hill Slope',
      parking: 'Private Driveway',
      possession: 'Ready for Construction',
      reraId: 'P52000031829',
    },
    amenities: [
      'Gated Farmhouse Community',
      'Borewell Water & Electric Meter in Place',
      'Tree-lined Compound Wall',
    ],
    features: [
      'Only 20 minutes from Mandwa Jetty (45 mins from Gateway of India)',
      'Scenic Western Ghats mountain views',
    ],
    agent: {
      name: 'Ananya Deshmukh',
      phone: '+91 1234567891',
      email: 'ananya@primeestates.in',
    },
  },
  {
    id: 11,
    title: 'Apex Financial Tower',
    category: 'Commercial',
    displayCategory: 'Commercial Space',
    location: 'HITEC City, Hyderabad',
    city: 'Hyderabad',
    price: '₹12.50 Cr',
    numericPrice: 125000000,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 0,
    baths: 4,
    area: '8,200 sq.ft',
    status: 'Ready to Move',
    tag: 'Featured',
    description:
      'Grade-A corporate office suite in HITEC City with high ROI rental yield. Complete with LEED Gold rating, double-glazed acoustic glass, 100% power backup, and dedicated underground parking slots.',
    overview: {
      propertyType: 'Grade-A Commercial Office',
      builtUpArea: '8,200 sq.ft',
      carpetArea: '7,100 sq.ft',
      furnishing: 'Warm Shell (A/C & Fire Systems)',
      facing: 'North',
      floor: '18th Floor',
      parking: '8 Reserved Car Bays',
      possession: 'Immediate Occupancy',
      reraId: 'P02400003140',
    },
    amenities: [
      'LEED Gold Certified Eco Tower',
      'High Speed Destination Lifts',
      '24/7 Redundant Power & Cooling',
      'Cafeteria, Food Court & Conference Hub',
    ],
    features: [
      'Ideal for multinational headquarters and tech startups',
      'Projected 8.5% annual commercial rental yield',
    ],
    agent: {
      name: 'Vikramaditya Rao',
      phone: '+91 1234567891',
      email: 'vikram@primeestates.in',
    },
  },
  {
    id: 12,
    title: 'The Boulevard Retail Plaza',
    category: 'Commercial',
    displayCategory: 'Commercial Space',
    location: 'Bandra Kurla Complex (BKC), Mumbai',
    city: 'Mumbai',
    price: '₹16.80 Cr',
    numericPrice: 168000000,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    ],
    beds: 0,
    baths: 2,
    area: '5,500 sq.ft',
    status: 'Ready to Move',
    tag: 'Exclusive',
    description:
      'High-visibility ground-floor retail showroom located in the premier commercial heart of Mumbai. High footfall avenue, 30-foot frontage, and immense brand exposure.',
    overview: {
      propertyType: 'Prime Retail Showroom',
      builtUpArea: '5,500 sq.ft',
      carpetArea: '4,800 sq.ft',
      furnishing: 'Bare Shell Showroom',
      facing: 'Main Boulevard Frontage',
      floor: 'Ground Floor + Mezzanine',
      parking: '6 Dedicated Valet Spots',
      possession: 'Ready to Move',
      reraId: 'P51900018241',
    },
    amenities: [
      '30-Foot Double-Height Glass Frontage',
      'Dedicated Customer Valet Parking',
      '24/7 Security & High-Voltage Electric Supply',
    ],
    features: [
      'Located in BKC, India’s financial epicenter',
      'Ideal for luxury car showrooms, bank branches, or fine jewelry flagships',
    ],
    agent: {
      name: 'Surendra Nath Bezawada',
      phone: '+91 1234567891',
      email: 'test@primerealstate.com',
    },
  },
];

// ============================================================================
// Section: Ongoing & Upcoming Projects Banner Data
// ============================================================================
export const projectsBannerData = {
  eyebrow: 'OUR PROJECTS',
  title: 'Ongoing & Upcoming Projects',
  subtitle: 'Premium projects designed for modern living.',
  buttonText: 'View All Projects',
  buttonLink: '#projects',
  backgroundImage:
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80',
};

// ============================================================================
// Section: Stats / Metrics Bar Data
// ============================================================================
export const statsData = [
  {
    id: 1,
    value: '10+',
    label: 'Years Experience',
    iconType: 'experience',
  },
  {
    id: 2,
    value: '500+',
    label: 'Happy Clients',
    iconType: 'clients',
  },
  {
    id: 3,
    value: '1,000+',
    label: 'Properties Sold',
    iconType: 'properties',
  },
  {
    id: 4,
    value: '100%',
    label: 'Trusted Service',
    iconType: 'trust',
  },
];

// ============================================================================
// Section: Client Testimonials Data
// ============================================================================
export const testimonialsData = [
  {
    id: 1,
    quote:
      'Prime Estates helped us find our dream home in the perfect location. The team was professional, transparent, and very supportive throughout the process.',
    name: 'Ravi Kumar',
    location: 'Hitech City, Hyderabad',
    rating: 5,
    avatar: null,
  },
  {
    id: 2,
    quote:
      'Outstanding guidance on our commercial property investment in Jubilee Hills. Their market insight and legal assistance made the whole purchase seamless and worry-free.',
    name: 'Priya Sharma',
    location: 'Banjara Hills, Hyderabad',
    rating: 5,
    avatar: null,
  },
  {
    id: 3,
    quote:
      'The best luxury real estate consultancy we have worked with. From shortlisted beachfront villas to finalized paperwork, everything was executed with elite perfection.',
    name: 'Rajesh Verma',
    location: 'Jubilee Hills, Hyderabad',
    rating: 5,
    avatar: null,
  },
];

// ============================================================================
// Section: Real Estate Insights (Blog / Latest Updates) Data
// ============================================================================
export const insightsIntroData = {
  eyebrow: 'LATEST UPDATES',
  title: 'Real Estate Insights',
  description:
    'Stay ahead in the property market with curated real estate trends, expert home-buying advice, and high-return investment insights from our specialists.',
  buttonText: 'View All Articles',
  buttonLink: '#',
};

export const insightsData = [
  {
    id: 1,
    title: 'Real Estate Trends in Hyderabad for 2026',
    date: 'Jan 28, 2026',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    id: 2,
    title: 'Tips for Buying Your First Home',
    date: 'Jan 15, 2026',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    id: 3,
    title: 'Why Real Estate Is a Smart Investment?',
    date: 'Jan 10, 2026',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    id: 4,
    title: 'Top Emerging Localities for Luxury Living',
    date: 'Jan 05, 2026',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    id: 5,
    title: 'Essential Legal Checklist for Property Buyers',
    date: 'Dec 28, 2025',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
];

// ============================================================================
// Section: Footer Configuration Data
// ============================================================================
export const footerData = {
  brand: {
    name: 'Prime Estates',
    tagline: 'REAL ESTATE',
    description:
      'Your trusted real estate partner for buying, selling, renting, and investing in premium properties.',
  },
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Buy Property', href: '#services' },
    { label: 'Sell Property', href: '#services' },
    { label: 'Rent & Lease', href: '#services' },
    { label: 'Investment Consulting', href: '#services' },
    { label: 'Property Management', href: '#services' },
    { label: 'Legal Assistance', href: '#services' },
  ],
  contact: {
    address: 'Plot No. 125, Madhapur, Hyderabad - 500081',
    phone: '+91 1234567891',
    email: 'test@primerealstate.com',
  },
  socialLinks: [
    { platform: 'Instagram', href: 'https://instagram.com' },
    { platform: 'Facebook', href: 'https://facebook.com' },
    { platform: 'YouTube', href: 'https://youtube.com' },
    { platform: 'LinkedIn', href: 'https://linkedin.com' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Sitemap', href: '#sitemap' },
  ],
};