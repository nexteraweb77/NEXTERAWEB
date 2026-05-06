import { INSTAGRAM_PROFILE_URL } from "@/lib/social-urls";
import { getSiteUrl } from "@/lib/site-url";

/** Date structurate pentru Google (Organization + WebSite). */
export function OrganizationJsonLd() {
  const base = getSiteUrl();
  const orgId = `${base}/#organization`;
  const siteId = `${base}/#website`;

  const graph = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: "NEXTERAWEB",
      url: base,
      logo: `${base}/logo.png`,
      email: "contact.nexteraweb@gmail.com",
      sameAs: [INSTAGRAM_PROFILE_URL],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brașov",
        addressRegion: "Județul Brașov",
        addressCountry: "RO",
      },
      areaServed: [
        { "@type": "City", name: "Brașov" },
        { "@type": "AdministrativeArea", name: "Județul Brașov" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+40753834965",
          contactType: "customer support",
          availableLanguage: ["ro"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": siteId,
      url: base,
      name: "NEXTERAWEB",
      inLanguage: "ro-RO",
      publisher: { "@id": orgId },
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD: conținut generat din constante + getSiteUrl()
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
