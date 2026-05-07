/** URL public de bază — setează `NEXT_PUBLIC_SITE_URL` în producție (ex. https://nexteraweb.ro). */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      const withScheme = raw.includes("://") ? raw : `https://${raw}`;
      return new URL(withScheme).origin;
    } catch {
      /* ignoră valoare invalidă */
    }
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").split("/")[0];
    return `https://${host}`;
  }
  /** Build-uri pe Hostinger fără env — evită localhost în metadata/Open Graph. */
  if (process.env.NODE_ENV === "production") {
    return "https://nexteraweb.ro";
  }
  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`);
}
