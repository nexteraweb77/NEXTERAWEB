import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const paths: {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/creare-site-uri", changeFrequency: "weekly", priority: 0.9 },
  { path: "/creare-site-uri-web-profesionale", changeFrequency: "weekly", priority: 0.88 },
  { path: "/creare-site-prezentare", changeFrequency: "weekly", priority: 0.87 },
  { path: "/pret-creare-site", changeFrequency: "weekly", priority: 0.85 },
  { path: "/portofoliu", changeFrequency: "monthly", priority: 0.85 },
  { path: "/abilitati", changeFrequency: "monthly", priority: 0.75 },
  { path: "/asigurare-digitala", changeFrequency: "monthly", priority: 0.75 },
  { path: "/cum-lucram", changeFrequency: "monthly", priority: 0.75 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  return paths.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
