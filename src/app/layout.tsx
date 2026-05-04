import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  "Viziune transformată în experiențe digitale memorabile: design luxury, SEO și strategie pentru branduri care aleg performanță, claritate și ritm de creștere.";

const siteName = "NEXTERAWEB";
const defaultTitle = "Web Designer | Creez Site-uri Moderne pentru Afaceri Locale";

const canonicalRoot = new URL("/", getMetadataBase()).href;

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "web design România",
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
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: `${siteName} — logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteDescription,
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
      className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
    >
      <body className="touch-manipulation font-sans min-h-full flex flex-col overflow-x-hidden bg-black text-zinc-100 antialiased">
        <SiteProviders>
          <Navbar />
          {children}
        </SiteProviders>
      </body>
    </html>
  );
}
