export const HOTEL_CONFIG = {
  name: 'Hotel Rajmahal',
  brandGroup: 'by Vilasa Group',
  fullName: 'Hotel Rajmahal by Vilasa Group',
  restaurantName: 'Times Rajmahal Restaurant',
  locationLabel: 'Nathdwara · Rajasthan',
  addressLines: [
    'Nathuwas Circle, Nathuwas,',
    'Nathdwara, Rajasthan – 313301',
  ],
  fullAddress: 'Nathuwas Circle, Nathuwas, Nathdwara, Rajasthan – 313301',
  primaryPhoneDisplay: '+91 92576 76733',
  primaryPhoneTel: '+919257676733',
  alternatePhoneDisplay: '+91 90010 61852',
  alternatePhoneTel: '+919001061852',
  landlineDisplay: '02953-232556',
  landlineTel: '02953232556',
  whatsappNumber: '919257676733',
  whatsappBaseUrl: 'https://wa.me/919257676733',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Hotel+Rajmahal+by+Vilasa+Group+Nathuwas+Circle+Nathdwara+Rajasthan+313301',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Hotel+Rajmahal+Nathuwas+Circle+Nathdwara+Rajasthan+313301&output=embed',
};

export function buildWhatsAppUrl(message: string): string {
  return `${HOTEL_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export interface RoomCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  amenities: string[];
  image: {
    baseName: string;
    alt: string;
    aspect: string;
    objectPosition?: string;
  };
  secondaryImage?: {
    baseName: string;
    alt: string;
    label: string;
  };
}

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'double-room',
    name: 'Double Room',
    subtitle: 'Quiet Comfort for Effortless Stays',
    description:
      'Warmly appointed accommodation featuring textured timber accents, soft ambient wall lighting, crisp white linens, and calm interiors designed for restful nights after temple darshan or travel across Mewar.',
    amenities: [
      'Air Conditioned',
      'Free Wi-Fi',
      'Flat-Screen TV',
      'Daily Housekeeping',
      'Room Service',
    ],
    image: {
      baseName: 'room-double',
      alt: 'Double Room at Hotel Rajmahal featuring a plush bed, warm wood paneling, and soft lighting',
      aspect: '3 / 2',
    },
    secondaryImage: {
      baseName: 'bathroom',
      alt: 'Private modern bathroom with mosaic tile detailing at Hotel Rajmahal',
      label: 'Bath Detail',
    },
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    subtitle: 'Arched Alcove & Lounge Seating',
    description:
      'Elevated guestroom comfort featuring a Rajasthani stone-bracketed window alcove, a two-seat tea table beside draped windows, electric kettle service, and warm bedside reading sconces.',
    amenities: [
      'Air Conditioned',
      'Free Wi-Fi',
      'Window Seating Area',
      'Tea & Kettle Setup',
      'Room Service',
    ],
    image: {
      baseName: 'room-deluxe',
      alt: 'Deluxe Room at Hotel Rajmahal with arched window alcove, wooden tea table, and king-style bedding',
      aspect: '3 / 2',
    },
    secondaryImage: {
      baseName: 'bathroom',
      alt: 'Contemporary granite and floral mosaic bathroom at Hotel Rajmahal',
      label: 'Bath Detail',
    },
  },
  {
    id: 'family-room',
    name: 'Family Room',
    subtitle: 'Twin Double Beds for Shared Journeys',
    description:
      'Thoughtfully laid out with two full double beds set against continuous fluted wood paneling, individual warm sconce lamps, signature navy embroidered runners, and ample room to gather comfortably.',
    amenities: [
      'Two Double Beds',
      'Air Conditioned',
      'Free Wi-Fi',
      'Daily Housekeeping',
      '24-Hour Room Service',
    ],
    image: {
      baseName: 'room-family',
      alt: 'Family Room at Hotel Rajmahal featuring two full double beds with signature navy runners',
      aspect: '16 / 9',
    },
    secondaryImage: {
      baseName: 'bathroom',
      alt: 'En-suite bathroom in Hotel Rajmahal with illuminated feature tiles',
      label: 'Bath Detail',
    },
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite',
    subtitle: 'Private Living Lounge & Heritage Balcony',
    description:
      'An expansive suite pairing refined sleeping quarters with a dedicated lounge featuring curved leather-and-floral seating, carved wood coffee tables, patterned rugs, and a balcony framed by Rajasthani sandstone jali.',
    amenities: [
      'Dedicated Living Lounge',
      'Private Jali Balcony',
      'Air Conditioned',
      'Free Wi-Fi',
      'Priority Room Service',
    ],
    image: {
      baseName: 'suite-living-detail',
      alt: 'Junior Suite living lounge with dark green sofa, teak tables, and carved jali balcony at Hotel Rajmahal',
      aspect: '3 / 2',
    },
    secondaryImage: {
      baseName: 'bathroom',
      alt: 'Suite bathroom with ornate mosaic tilework and slate finish',
      label: 'Bath Detail',
    },
  },
  {
    id: 'maharaja-suite',
    name: 'Maharaja Suite',
    subtitle: 'Our Flagship Heritage Suite',
    description:
      'Designed for unhurried royal hospitality in Nathdwara, offering generous living and sleeping quarters under circular cove ceilings, rich patterned rugs, wall-mounted entertainment, and carved sandstone jali views into the night.',
    amenities: [
      'Spacious Living & Sleeping Zone',
      'Carved Jali Balcony',
      'Air Conditioned',
      'Free Wi-Fi',
      '24-Hour Front Desk & Room Service',
    ],
    image: {
      baseName: 'suite-maharaja',
      alt: 'Maharaja Suite at Hotel Rajmahal showing full living lounge, king bed, circular ceiling light, and jali balcony',
      aspect: '3 / 2',
    },
    secondaryImage: {
      baseName: 'bathroom',
      alt: 'Luxury bathroom at Hotel Rajmahal with warm floral mosaic walls and granite vanity',
      label: 'En-Suite Bath',
    },
  },
];

export interface AmenityItem {
  code: string;
  name: string;
  note: string;
}

export const HOTEL_AMENITIES: AmenityItem[] = [
  {
    code: '01',
    name: 'Air Conditioned Rooms',
    note: 'Climate-controlled interiors calibrated for year-round Rajasthan comfort.',
  },
  {
    code: '02',
    name: 'Free Wi-Fi',
    note: 'Complimentary wireless connectivity across guest rooms and public lounges.',
  },
  {
    code: '03',
    name: 'Multi-Cuisine Restaurant',
    note: 'In-house dining at Times Rajmahal Restaurant for relaxed family meals.',
  },
  {
    code: '04',
    name: 'Private Parking',
    note: 'Dedicated on-premises parking conveniently situated at Nathuwas Circle.',
  },
  {
    code: '05',
    name: '24-Hour Front Desk',
    note: 'Round-the-clock reception and arrival assistance for early and late travellers.',
  },
  {
    code: '06',
    name: 'Room Service',
    note: 'Attentive in-room dining and hospitality brought directly to your door.',
  },
  {
    code: '07',
    name: 'Power Backup',
    note: 'Uninterrupted power support ensuring consistent lighting and cooling.',
  },
  {
    code: '08',
    name: 'Daily Housekeeping',
    note: 'Fresh linens and methodical daily upkeep of every room and suite.',
  },
  {
    code: '09',
    name: 'Lift Facility',
    note: 'Smooth elevator access connecting all guest floors with luggage ease.',
  },
  {
    code: '10',
    name: 'Laundry Service',
    note: 'Careful garment laundering and pressing available on request.',
  },
  {
    code: '11',
    name: '24-Hour Security',
    note: 'Continuous premises monitoring for complete peace of mind.',
  },
];

export interface GalleryPhoto {
  id: string;
  baseName: string;
  title: string;
  category: 'Exterior' | 'Rooms & Suites' | 'Dining & Lobby';
  alt: string;
  width: number;
  height: number;
  span: 'wide' | 'tall' | 'standard';
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'ext-front-night',
    baseName: 'hero-desktop',
    title: 'Illuminated Heritage Facade — Night',
    category: 'Exterior',
    alt: 'Front night view of Hotel Rajmahal by Vilasa Group illuminated with traditional Rajasthani jharokhas and rooftop chhatris',
    width: 1024,
    height: 576,
    span: 'wide',
  },
  {
    id: 'lobby-main',
    baseName: 'lobby',
    title: 'Reception & Grand Lobby',
    category: 'Dining & Lobby',
    alt: 'Lobby of Hotel Rajmahal with backlit Rajasthani jali panels, geometric marble floor, and velvet seating',
    width: 1024,
    height: 575,
    span: 'standard',
  },
  {
    id: 'ext-angled-night',
    baseName: 'exterior-angled',
    title: 'Architectural Perspective at Dusk',
    category: 'Exterior',
    alt: 'Angled evening exterior view of Hotel Rajmahal showcasing layered carved jharokhas and grand entrance steps',
    width: 1024,
    height: 822,
    span: 'tall',
  },
  {
    id: 'suite-lounge',
    baseName: 'suite-maharaja',
    title: 'Maharaja Suite Living Space & Jali Balcony',
    category: 'Rooms & Suites',
    alt: 'Spacious suite living room with dark green sofa, carved coffee tables, and sandstone jali balcony',
    width: 1024,
    height: 682,
    span: 'wide',
  },
  {
    id: 'dining-hall',
    baseName: 'restaurant',
    title: 'Times Rajmahal Restaurant',
    category: 'Dining & Lobby',
    alt: 'Times Rajmahal Restaurant interior with solid teak tables, circular cove lighting, and chevron marble floors',
    width: 1024,
    height: 682,
    span: 'standard',
  },
  {
    id: 'room-deluxe-view',
    baseName: 'room-deluxe',
    title: 'Deluxe Guestroom & Arched Window Seating',
    category: 'Rooms & Suites',
    alt: 'Deluxe guestroom featuring plush bedding, Rajasthani stone brackets, and two-chair dining nook',
    width: 1024,
    height: 682,
    span: 'standard',
  },
  {
    id: 'room-family-view',
    baseName: 'room-family',
    title: 'Family Room with Twin Double Beds',
    category: 'Rooms & Suites',
    alt: 'Family room at Hotel Rajmahal with two full beds, fluted wood wall, and embroidered bed runners',
    width: 1024,
    height: 575,
    span: 'wide',
  },
  {
    id: 'bath-mosaic',
    baseName: 'bathroom',
    title: 'Heritage Mosaic & Slate Bath Suite',
    category: 'Rooms & Suites',
    alt: 'Private bathroom featuring warm floral mosaic wall tiles, granite countertop basin, and slate stone',
    width: 1024,
    height: 682,
    span: 'standard',
  },
];

export interface Destination {
  id: string;
  name: string;
  distance: string;
  travelTime: string;
  region: string;
  description: string;
  imageBaseName: string;
  imageAlt: string;
}

export const EXPLORE_DESTINATIONS: Destination[] = [
  {
    id: 'shrinathji-temple',
    name: 'Shrinathji Temple',
    distance: 'Approx. 1.5 km',
    travelTime: '~5–8 mins drive',
    region: 'Pushtimarg Shrine · Nathdwara',
    description:
      'The sacred 17th-century haveli shrine of Lord Shrinathji that anchors Nathdwara’s spiritual rhythm, famous for its eight daily darshans, Pichwai art tradition, and vibrant temple alleys.',
    imageBaseName: 'attr-shrinathji',
    imageAlt: 'Grand entrance gateway and haveli architecture of Shrinathji Temple in Nathdwara',
  },
  {
    id: 'statue-of-belief',
    name: 'Statue of Belief (Vishwas Swaroopam)',
    distance: 'Approx. 3 km',
    travelTime: '~10 mins drive',
    region: 'Ganesh Tekri · Nathdwara',
    description:
      'Rising 369 feet above the hills of Nathdwara, Vishwas Swaroopam is the world’s tallest statue of Lord Shiva, offering panoramic Aravalli views and landscaped reflection gardens.',
    imageBaseName: 'attr-statue-of-belief',
    imageAlt: 'Vishwas Swaroopam Statue of Belief monument overlooking Nathdwara',
  },
  {
    id: 'haldighati',
    name: 'Haldighati',
    distance: 'Approx. 18 km',
    travelTime: '~30 mins drive',
    region: 'Aravalli Mountain Pass · Khamnore',
    description:
      'The historic yellow-soil pass of Mewar immortalised by Maharana Pratap and his loyal steed Chetak in 1576, home to the Maharana Pratap Museum and rose-water craft villages.',
    imageBaseName: 'attr-haldighati',
    imageAlt: 'Maharana Pratap Museum and heritage pavilion at historic Haldighati pass',
  },
  {
    id: 'eklingji-temple',
    name: 'Eklingji Temple',
    distance: 'Approx. 28 km',
    travelTime: '~35 mins drive',
    region: 'Kailashpuri · Towards Udaipur',
    description:
      'An ancient 8th-century white-marble and sandstone temple complex dedicated to Lord Shiva as the ruling deity of Mewar, renowned for its double-storeyed pillared mandapa.',
    imageBaseName: 'attr-eklingji',
    imageAlt: 'Carved stone spires and temple complex of Eklingji at Kailashpuri',
  },
  {
    id: 'nagda',
    name: 'Nagda (Sas-Bahu Temples)',
    distance: 'Approx. 30 km',
    travelTime: '~35 mins drive',
    region: 'Bagela Lake · Nagda',
    description:
      'Set beside tranquil Bagela Lake near Eklingji, these 10th-century twin Vishnu temples dazzle visitors with intricately sculpted torana arches and delicate sandstone relief work.',
    imageBaseName: 'attr-nagda',
    imageAlt: 'Intricately carved sandstone torana pillars of Sahastra Bahu Temples at Nagda',
  },
  {
    id: 'kumbhalgarh-fort',
    name: 'Kumbhalgarh Fort',
    distance: 'Approx. 51 km',
    travelTime: '~1 hr 15 mins drive',
    region: 'UNESCO World Heritage Site · Rajsamand',
    description:
      'Crowning a rugged Aravalli ridge, Rana Kumbha’s 15th-century citadel boasts a 36-kilometre perimeter wall—the second longest continuous wall in the world—and Badal Mahal.',
    imageBaseName: 'attr-kumbhalgarh',
    imageAlt: 'Stone ramparts and palace towers of Kumbhalgarh Fort across the Aravalli hills',
  },
  {
    id: 'ranakpur-jain-temple',
    name: 'Ranakpur Jain Temple',
    distance: 'Approx. 85 km',
    travelTime: '~1 hr 45 mins drive',
    region: 'Pali · Aravalli Valley',
    description:
      'One of India’s supreme marvels of marble architecture, built in the 15th century with 1,444 uniquely carved white-marble pillars arranged across 29 sunlit halls.',
    imageBaseName: 'attr-ranakpur',
    imageAlt: 'White marble shikharas and carved courtyard of Ranakpur Jain Temple in Rajasthan',
  },
];
