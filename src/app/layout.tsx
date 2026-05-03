import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SiteProviders } from "@/components/SiteProviders";
import { getMetadataBase } from "@/lib/site-url";

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

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "Web Designer | Creez Site-uri Moderne pentru Afaceri Locale",
  description: siteDescription,
  openGraph: {
    title: "Web Designer | Creez Site-uri Moderne pentru Afaceri Locale",
    description: siteDescription,
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Designer | Creez Site-uri Moderne pentru Afaceri Locale",
    description: siteDescription,
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
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
