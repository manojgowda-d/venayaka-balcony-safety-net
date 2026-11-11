export interface VideoItem {
  id: string;
  title: string;
  category:
    | "Pigeon Net Installation"
    | "Balcony Safety Net Installation"
    | "Anti-Bird Net Installation"
    | "Terrace Net Installation"
    | "Window Safety Net Installation";
  description: string;
  src: string; // local path like '/videos/video1.mp4' or YouTube embed URL
  type: "local" | "youtube";
  thumbnail?: string;
  duration?: string;
  location?: string;
  isAvailable: boolean;
}

export const VIDEO_CATEGORIES = [
  "All",
  "Pigeon Net Installation",
  "Balcony Safety Net Installation",
  "Anti-Bird Net Installation",
  "Terrace Net Installation",
  "Window Safety Net Installation",
] as const;

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: "vid-1",
    title: "Balcony Pigeon Net Installation in Mysore Apartment",
    category: "Pigeon Net Installation",
    description: "Watch our team secure a residential apartment balcony with heavy-duty anti-pigeon netting and stainless steel wire borders.",
    src: "/videos/video1.mp4",
    type: "local",
    thumbnail: "/images/hero/hero-balcony.jpg",
    duration: "Real Installation",
    location: "Mysore, Karnataka",
    isAvailable: true,
  },
  {
    id: "vid-2",
    title: "Apartment Balcony Safety Net Fitting & Tightening",
    category: "Balcony Safety Net Installation",
    description: "Demonstration of high-tension perimeter anchor fastening ensuring reliable fall protection on open balconies.",
    src: "/videos/video2.mp4",
    type: "local",
    thumbnail: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    duration: "On-Site Work",
    location: "Saraswathipuram, Mysore",
    isAvailable: true,
  },
  {
    id: "vid-3",
    title: "Anti-Bird Netting for Residential High-Rise",
    category: "Anti-Bird Net Installation",
    description: "Complete bird-proofing service covering exterior duct areas and balcony openings against nesting birds.",
    src: "/videos/video3.mp4",
    type: "local",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    duration: "Full Coverage",
    location: "KG Koppal, Mysore",
    isAvailable: true,
  },
  {
    id: "vid-4",
    title: "Terrace & Rooftop Safety Net Installation",
    category: "Terrace Net Installation",
    description: "Open terrace safety netting with sturdy metal boundary hooks providing complete protection for rooftop recreation.",
    src: "/videos/video4.mp4",
    type: "local",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    duration: "Terrace Setup",
    location: "Lakshmipuram, Mysore",
    isAvailable: true,
  },
  {
    id: "vid-5",
    title: "Window Safety Net Fitting & Measurement",
    category: "Window Safety Net Installation",
    description: "Custom-fitted window safety net allowing continuous natural air ventilation while keeping birds completely out.",
    src: "/videos/video5.mp4",
    type: "local",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    duration: "Window Service",
    location: "Chamarajapuram, Mysore",
    isAvailable: true,
  },
  {
    id: "vid-6",
    title: "High-Tensile Pigeon Netting Finishing & Quality Check",
    category: "Pigeon Net Installation",
    description: "Detailed look at the clean mesh finish, uniform square alignment, and corner tension verification.",
    src: "/videos/video6.mp4",
    type: "local",
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    duration: "Precision Fitting",
    location: "Mysore City",
    isAvailable: true,
  },
  {
    id: "vid-7",
    title: "Balcony Protective Netting for Residential Flats",
    category: "Balcony Safety Net Installation",
    description: "Complete apartment balcony netting setup providing safety for pets, children, and elderly residents.",
    src: "/videos/video7.mp4",
    type: "local",
    thumbnail: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    duration: "Safety Barrier",
    location: "Kuvempunagar, Mysore",
    isAvailable: true,
  },
  {
    id: "vid-8",
    title: "Anti-Bird Mesh Installation Across Open Utility Shaft",
    category: "Anti-Bird Net Installation",
    description: "Sealing building utility shafts and vents to prevent birds from entering residential bathrooms and kitchens.",
    src: "/videos/video8.mp4",
    type: "local",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    duration: "Shaft Proofing",
    location: "Mysore, Karnataka",
    isAvailable: true,
  },
  {
    id: "vid-9",
    title: "Rooftop & Balcony Boundary Netting Walkthrough",
    category: "Terrace Net Installation",
    description: "Client inspection walkthrough showing taut, secure, and clean safety netting across upper floor balconies.",
    src: "/videos/video9.mp4",
    type: "local",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    duration: "Final Review",
    location: "Mysore, Karnataka",
    isAvailable: true,
  },
];

