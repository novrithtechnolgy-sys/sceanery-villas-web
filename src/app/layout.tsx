import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sceneryvillassrilanka.com"),

  title: {
    default: "Scenery Villas Collection | Luxury Villas in Bentota Sri Lanka",
    template: "%s | Scenery Villas",
  },

  description:
    "Luxury private villas and homestays in Bentota and Aluthgama, Sri Lanka. Infinity pools, tropical gardens, curated experiences, and authentic Sri Lankan hospitality.",

  keywords: [
    "Bentota villas",
    "luxury villas Sri Lanka",
    "private villas Bentota",
    "Bentota villa accommodation",
    "Aluthgama villas",
    "Sri Lanka holiday villas",
    "Bentota private pool villas",
  ],

  openGraph: {
    type: "website",
    url: "https://sceneryvillassrilanka.com",
    siteName: "Scenery Villas Collection",
    title: "Scenery Villas — Luxury Villas in Bentota Sri Lanka",
    description:
      "Stay in luxury private villas in Bentota and Aluthgama with infinity pools, tropical gardens, and curated Sri Lankan travel experiences.",
    images: [
      {
        url: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772884984/IMG-20250927-WA0043_x4850s.jpg",
        width: 1200,
        height: 630,
        alt: "Scenery Villas Luxury Villa in Bentota Sri Lanka",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Scenery Villas | Luxury Villas in Bentota",
    description:
      "Discover private villas in Bentota with infinity pools, tropical gardens, and authentic Sri Lankan hospitality.",
    images: ["https://res.cloudinary.com/dpjmcup95/image/upload/v1772884984/IMG-20250927-WA0043_x4850s.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};
const timesTen = localFont({
  src: [
    {
      path: "../../public/fonts/TimesTen.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-times-ten",
});

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${timesTen.variable} ${helvetica.variable} antialiased`}
      >
        {children}
        <Footer />

      </body>
    </html>
  );
}
