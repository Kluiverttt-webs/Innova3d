import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "Innova 3D | Impresión 3D y piezas a medida";
  const description = "Fabricamos autopartes, repuestos, prototipos y piezas personalizadas con impresión 3D. Cotiza tu idea con Innova 3D.";

  return {
    metadataBase: base,
    title,
    description,
    keywords: ["impresión 3D", "autopartes", "repuestos 3D", "piezas personalizadas", "prototipos"],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "es_EC",
      images: [{ url: new URL("/og.png", base).toString(), width: 1536, height: 805, alt: "Innova 3D: convertimos tus ideas en soluciones 3D" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og.png", base).toString()] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
