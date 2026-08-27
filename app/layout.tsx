import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/WhatsAppButton";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: { default: "Innova 3D | Soluciones de impresión 3D", template: "%s | Innova 3D" },
  description: "Autopartes, repuestos, prototipos y objetos personalizados mediante impresión 3D.",
  keywords: ["impresión 3D", "autopartes", "repuestos 3D", "prototipos", "piezas personalizadas"],
  icons: {
    icon: "/innova-logo.png",
    shortcut: "/innova-logo.png",
    apple: "/innova-logo.png",
  },
  openGraph: {
    title: "Innova 3D | Convertimos tus ideas en soluciones 3D",
    description: "Autopartes, repuestos y piezas funcionales creadas con impresión 3D.",
    type: "website",
    locale: "es_EC",
    images: [{ url: "/hero-physical.png", width: 1536, height: 1024, alt: "Pieza automotriz conceptual fabricada con impresión 3D" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
