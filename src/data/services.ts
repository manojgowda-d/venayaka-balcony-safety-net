export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  badge?: string;
  iconName: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "pigeon-safety-nets",
    slug: "pigeon-safety-nets",
    title: "Pigeon Safety Nets",
    shortDescription: "Help prevent pigeons from entering balconies and residential spaces.",
    fullDescription:
      "Our pigeon safety nets are specially designed to prevent pigeons and other birds from roosting or nesting in your balconies, ducts, and utility spaces. Built with high-tensile, weather-resistant nylon, these nets keep your premises clean, hygienic, and free from bird droppings without harming the birds.",
    features: [
      "Effective barrier against pigeon droppings & nesting",
      "High-density UV-stabilized nylon netting",
      "Maintains ventilation and natural sunlight",
      "Durable stainless steel wire rope frame fastening",
    ],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    badge: "Popular Service",
    iconName: "ShieldCheck",
  },
  {
    id: "anti-bird-nets",
    slug: "anti-bird-nets",
    title: "Anti-Bird Nets",
    shortDescription: "Protect open areas from unwanted birds using suitable netting solutions.",
    fullDescription:
      "Anti-bird nets provide total protection across open areas like courtyards, air conditioning shafts, shafts, and ventilation zones. Prevent entry of birds of various sizes while retaining clear airflow and outside visibility.",
    features: [
      "Custom mesh sizing for all bird species",
      "Resistant to rain, intense heat, and UV rays",
      "Non-corrosive and rust-proof anchoring hooks",
      "Eco-friendly barrier with zero harm to birds",
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    badge: "High Demand",
    iconName: "Feather",
  },
  {
    id: "balcony-safety-nets",
    slug: "balcony-safety-nets",
    title: "Balcony Safety Nets",
    shortDescription: "Additional protection for apartment balconies and open spaces.",
    fullDescription:
      "Balcony safety nets create a dependable safety boundary for high-rise apartment balconies, preventing accidental falls of household items, pots, or pets, while maintaining an open aesthetic and scenic view.",
    features: [
      "Strong load-bearing capacity",
      "Transparent or unobtrusive visual profile",
      "Tailor-made to fit any balcony architectural structure",
      "Rigid wire border support for taut and stable installation",
    ],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    badge: "Essential",
    iconName: "Home",
  },
  {
    id: "children-safety-nets",
    slug: "children-safety-nets",
    title: "Children Safety Nets",
    shortDescription: "Additional protective barriers for balconies and suitable residential spaces.",
    fullDescription:
      "Safety is paramount when you have curious toddlers and young children at home. Our children safety nets form a resilient protective perimeter on balconies, staircases, and window ledges so children can play freely and safely.",
    features: [
      "Extra high-strength braided nylon material",
      "Tightly tied mesh preventing any gap or slip-through",
      "Smooth finish with zero sharp edges",
      "Double-anchored perimeter fixtures for childproofing",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badge: "Child Safe",
    iconName: "HeartHandshake",
  },
  {
    id: "terrace-safety-nets",
    slug: "terrace-safety-nets",
    title: "Terrace Safety Nets",
    shortDescription: "Netting solutions for open terraces and rooftops.",
    fullDescription:
      "Open terraces, rooftop gardens, and parapet walls require comprehensive coverage. Our terrace safety netting solutions cover large horizontal and vertical expanses to safeguard residents, pets, and recreational rooftop areas.",
    features: [
      "Large-span coverage capability",
      "Heavy-duty wind resistance for high-altitude terraces",
      "Heavy weather protection against monsoons and UV rays",
      "Sturdy metal support fixtures and stainless steel wires",
    ],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    badge: "Rooftop Solution",
    iconName: "Layers",
  },
  {
    id: "invisible-safety-nets",
    slug: "invisible-safety-nets",
    title: "Invisible Safety Nets",
    shortDescription: "Low-visibility safety net solutions for balconies.",
    fullDescription:
      "Invisible safety nets provide uncompromising security without disturbing your balcony's panoramic view. Using ultra-fine high-strength monofilament or high-grade stainless steel cables, they remain almost invisible from a few feet away.",
    features: [
      "Unobstructed panoramic exterior view",
      "Sleek and modern architectural aesthetic",
      "Tough cut-resistant and rust-proof material",
      "Perfect for luxury apartments and gated communities",
    ],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    badge: "Modern Aesthetic",
    iconName: "Eye",
  },
  {
    id: "window-safety-nets",
    slug: "window-safety-nets",
    title: "Window Safety Nets",
    shortDescription: "Protection for windows and other open residential areas.",
    fullDescription:
      "Protect your bedroom and living room windows from bird entry while ensuring family safety. Custom-fitted to sliding windows, casements, and French windows without obstructing your window operation.",
    features: [
      "Custom tailored to window frame dimensions",
      "Allows full window opening for fresh air breeze",
      "Does not interfere with curtains, blinds, or grilles",
      "Easy maintenance and cleanable surface",
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    badge: "Clean Air",
    iconName: "Square",
  },
  {
    id: "apartment-safety-nets",
    slug: "apartment-safety-nets",
    title: "Apartment Safety Nets",
    shortDescription: "Safety net installation solutions for apartment buildings.",
    fullDescription:
      "Comprehensive netting installations for individual apartments, entire floor complexes, society duct areas, and internal stairwells. We partner with homeowners and apartment associations across Mysore.",
    features: [
      "Multi-balcony and complete flat coverage packages",
      "Specialized duct area netting to block nesting colonies",
      "Uniform neat aesthetic compliant with society guidelines",
      "Prompt on-site measurement and reliable installation",
    ],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    badge: "Building Complex",
    iconName: "Building2",
  },
];

