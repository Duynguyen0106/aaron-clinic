import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.websiteUrl;
  const staticRoutes = ["", "/about", "/services", "/book", "/privacy"].map(
    (path) => ({
      url: `${base}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    }),
  );

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
