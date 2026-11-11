import React from "react";
import { BUSINESS_CONFIG } from "@/data/business";
import { SERVICES_DATA } from "@/data/services";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_CONFIG.name,
    alternateName: BUSINESS_CONFIG.shortName,
    image: `${BUSINESS_CONFIG.siteUrl}/images/gallery/balcony-safety-net.jpg`,
    "@id": `${BUSINESS_CONFIG.siteUrl}/#business`,
    url: BUSINESS_CONFIG.siteUrl,
    telephone: "+919880364527",
    description: BUSINESS_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "KG Koppal, Chamarajapuram, Lakshmipuram, Saraswathipuram",
      addressLocality: "Mysore",
      addressRegion: "Karnataka",
      postalCode: "570005",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.3072",
      longitude: "76.6347",
    },
    hasMap: BUSINESS_CONFIG.googleMapsUrl,
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Mysore",
      },
      {
        "@type": "AdministrativeArea",
        name: "Karnataka",
      },
    ],
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    makesOffer: SERVICES_DATA.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

