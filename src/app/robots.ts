import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://aman.tool2day.com/sitemap.xml",
    host: "https://aman.tool2day.com",
  };
}
