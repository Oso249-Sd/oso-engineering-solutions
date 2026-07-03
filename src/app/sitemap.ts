import type {MetadataRoute} from "next";
import {routing} from "@/i18n/routing";
import {serviceSlugs} from "@/lib/content";

const base = "https://osoengineering.com";
const staticPages = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/industries",
  "/blog",
  "/careers",
  "/contact",
  "/portal",
  "/admin",
  "/quote",
  "/privacy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = serviceSlugs.map((slug) => `/services/${slug}`);
  const pages = [...staticPages, ...servicePages];

  return routing.locales.flatMap((locale) =>
    pages.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path ? "monthly" : "weekly",
      priority: path ? 0.7 : 1
    }))
  );
}
