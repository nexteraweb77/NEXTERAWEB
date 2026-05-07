import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { Navbar } from "@/components/Navbar";
import { SiteProviders } from "@/components/SiteProviders";
import { getMetadataBase, getSiteUrl } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Web design și site-uri moderne în Brașov, România — viziune transformată în experiențe digitale memorabile: design luxury, SEO și strategie pentru branduri care aleg performanță, claritate și ritm de creștere.";

const siteName = "NEXTERAWEB™";
const defaultTitle =
  `${siteName} | Creare Site-uri Web Profesionale în România`;

const canonicalRoot = new URL("/", getMetadataBase()).href;

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  other: {
    google: "notranslate",
  },
  keywords: [
    "web design România",
    "web design Brașov",
    "creare site-uri",
    "creare siteuri",
    "creare site-uri web",
    "creare site-uri web profesionale",
    "creare site prezentare",
    "pret creare site",
    "creare site ieftin",
    "site-uri profesionale",
    "siteuri premium",
    "creare site Brașov",
    "site web Brașov",
    "site web afaceri locale",
    "site modern",
    "Next.js",
    "SEO site",
    "NEXTERAWEB",
  ],
  alternates: {
    canonical: canonicalRoot,
  },
  openGraph: {
    title: defaultTitle,
    description: siteDescription,
    type: "website",
    locale: "ro_RO",
    url: getSiteUrl(),
    siteName,
    images: [
      {
        url: "/og.png",
        width: 576,
        height: 576,
        alt: `${siteName} — identitate vizuală`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#030303",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      translate="no"
      className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
    >
      <body
        translate="no"
        className="touch-manipulation font-sans min-h-full flex flex-col overflow-x-clip bg-black text-zinc-100 antialiased"
      >
        <OrganizationJsonLd />
        <SiteProviders>
          <Navbar />
          {children}
        </SiteProviders>
      </body>
    </html>
  );
}
