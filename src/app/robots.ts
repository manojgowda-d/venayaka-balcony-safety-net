import { MetadataRoute } from "next";
import { BUSINESS_CONFIG } from "@/data/business";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = BUSINESS_CONFIG.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

