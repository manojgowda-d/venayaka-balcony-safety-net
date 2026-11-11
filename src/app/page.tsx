import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import VideoGallery from "@/components/VideoGallery";
import ImageGallery from "@/components/ImageGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Us Section */}
      <About />

      {/* 3. Services Showcase Section (All 8 services) */}
      <Services />

      {/* 4. Installation Videos Gallery (Real business videos from public/videos) */}
      <VideoGallery limit={6} />

      {/* 5. Work Image Gallery */}
      <ImageGallery limit={8} />

      {/* 6. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 7. Contact Us, Enquiry Form & Google Maps Section */}
      <ContactSection />
    </>
  );
}
