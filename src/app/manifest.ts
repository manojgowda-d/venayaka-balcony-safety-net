import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Venayaka Balcony Safety Net Mysore",
    short_name: "Venayaka Safety Net",
    description: "Professional balcony safety nets, pigeon nets, and anti-bird nets in Mysore.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#14532D",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}

