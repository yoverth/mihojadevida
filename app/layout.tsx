import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialRail from "@/components/SocialRail";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Yoverth Preciado | Software Engineer",
    template: "%s | Yoverth Preciado",
  },
  description:
    "Portafolio profesional de Yoverth Preciado. Desarrollo de aplicaciones móviles, arquitectura web moderna y diseño de bases de datos relacionales.",
  authors: [{ name: "Yoverth Preciado", url: "https://github.com/yoverth" }],
  creator: "Yoverth Preciado",
  openGraph: {
    title: "Yoverth Preciado | Software Engineer",
    description:
      "Desarrollo de software, aplicaciones móviles con React Native y bases de datos relacionales.",
    siteName: "Yoverth Preciado Portfolio",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-ink font-body antialiased min-h-screen">
        <Navbar />
        <SocialRail />
        <CustomCursor />
        {children}
        <Footer />
        <Analytics />
        <div
          aria-hidden
          className="grain-overlay pointer-events-none fixed inset-0 z-[60]"
        />
      </body>
    </html>
  );
}