import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const paths: {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
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
