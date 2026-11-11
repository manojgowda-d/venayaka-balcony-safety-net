export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "Pigeon Net Installation"
    | "Balcony Safety Nets"
    | "Anti-Bird Nets"
    | "Terrace Netting"
    | "Window Safety Nets";
  description: string;
  image: string;
  isSample: boolean; // clearly distinguish sample reference vs completed project
  location?: string;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Pigeon Net Installation",
  "Balcony Safety Nets",
  "Anti-Bird Nets",
  "Terrace Netting",
  "Window Safety Nets",
] as const;

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-0",
    title: "Completed Balcony Safety Net Installation",
    category: "Balcony Safety Nets",
    description: "Actual on-site installation by Venayaka Balcony Safety Net featuring transparent high-tensile netting and anchor fastenings.",
    image: "/images/gallery/image1.jpg",
    isSample: false,
    location: "Mysore, Karnataka",
  },
  {
    id: "gal-1",
    title: "Apartment Balcony Pigeon Netting",
    category: "Pigeon Net Installation",
    description: "Installed clean nylon mesh with stainless steel wire borders preventing pigeon nuisance.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    isSample: true,
    location: "Saraswathipuram, Mysore",
  },
  {
    id: "gal-2",
    title: "High-Rise Balcony Child Safety Net",
    category: "Balcony Safety Nets",
    description: "Tightly-anchored safety netting on a 5th-floor apartment balcony for family childproofing.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
    isSample: true,
    location: "KG Koppal, Mysore",
  },
  {
    id: "gal-3",
    title: "Building Utility Duct Anti-Bird Protection",
    category: "Anti-Bird Nets",
    description: "Full vertical netting covering AC outdoor units and building duct openings.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    isSample: true,
    location: "Chamarajapuram, Mysore",
  },
  {
    id: "gal-4",
    title: "Rooftop Terrace Safety Net Barrier",
    category: "Terrace Netting",
    description: "Perimeter rooftop netting installed for residential terrace relaxation and safety.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    isSample: true,
    location: "Lakshmipuram, Mysore",
  },
  {
    id: "gal-5",
    title: "Residential Window Pigeon Netting",
    category: "Window Safety Nets",
    description: "Unobtrusive custom-fitted window netting allowing full ventilation while stopping birds.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    isSample: true,
    location: "Mysore City",
  },
  {
    id: "gal-6",
    title: "Corner Balcony Precision Installation",
    category: "Balcony Safety Nets",
    description: "Curved corner balcony fitted with UV-resistant transparent safety netting.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    isSample: true,
    location: "Kuvempunagar, Mysore",
  },
  {
    id: "gal-7",
    title: "Open Terrace Boundary Protection",
    category: "Terrace Netting",
    description: "Heavy duty netting protecting against bird landing and accidental falls on open roof.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    isSample: true,
    location: "Vijayanagar, Mysore",
  },
  {
    id: "gal-8",
    title: "French Window Protective Netting",
    category: "Window Safety Nets",
    description: "Full height glass window netting securely fixed without damaging paint or frame.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    isSample: true,
    location: "Gokulam, Mysore",
  },
];
