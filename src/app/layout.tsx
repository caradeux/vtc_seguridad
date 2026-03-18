import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StructuredData } from "@/components/SEO/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vtcseguridad.com"),
  title: {
    default: "VTC Seguridad | Expertos en Seguridad en Mendoza",
    template: "%s | VTC Seguridad"
  },
  description: "Más de 30 años liderando la seguridad integral en Mendoza. Alarmas monitoreadas 24hs, CCTV, seguridad física y App Smart Panic para hogares y empresas.",
  keywords: [
    "seguridad mendoza",
    "alarmas mendoza",
    "monitoreo 24hs",
    "CCTV mendoza",
    "seguridad física",
    "VTC Seguridad",
    "protección hogar",
    "seguridad industrial mendoza",
    "smart panic mendoza"
  ],
  authors: [{ name: "VTC Seguridad" }],
  creator: "VTC Seguridad",
  publisher: "VTC Seguridad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VTC Seguridad | Protección Integral en Mendoza",
    description: "Expertos en alarmas, CCTV y monitoreo 24/7 con respuesta inmediata. Protegemos lo que más valorás.",
    url: "https://vtcseguridad.com",
    siteName: "VTC Seguridad",
    images: [
      {
        url: "/slide_seguridad_electronica-1.jpg",
        width: 1200,
        height: 630,
        alt: "VTC Seguridad Mendoza - Monitoreo 24 Horas",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VTC Seguridad | Seguridad Líder en Mendoza",
    description: "Protección inteligente para hogares y empresas con más de 30 años de experiencia.",
    images: ["/slide_seguridad_electronica-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <StructuredData />
      </body>
    </html>
  );
}



