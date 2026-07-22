import type { MetadataRoute } from "next";

const base = "https://aman.tool2day.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    "/guide",
    "/resources",
    "/about",
    "/faq",
    "/privacy",
    "/safe-browsing",
    "/stopncii",
    "/take-it-down",
  ];

  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/guide" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/guide" ? 0.9 : 0.7,
  }));
}
