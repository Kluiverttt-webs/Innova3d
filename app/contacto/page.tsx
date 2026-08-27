import type { Metadata } from "next";
import { instagramHref, siteData, whatsappHref } from "../site-data";

export const metadata: Metadata = { title: "Contacto", description: "Contacta a Innova 3D por WhatsApp o Instagram." };

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-page-hero"><span className="section-index">Contacto</span><h1>Hablemos de la pieza que necesitas.</h1><p>Una foto, una medida o una explicación sencilla es suficiente para empezar.</p></section>
      <section className="section contact-layout">
        <div className="contact-channels">
          <span className="section-index">Canales directos</span><h2>Estamos a una conversación de distancia.</h2>
          <a className="contact-card" href={whatsappHref} target="_blank" rel="noreferrer"><span>WA</span><div><small>WhatsApp</small><strong>{siteData.whatsappDisplay}</strong><p>Abre un mensaje preparado para contar tu necesidad.</p></div><b aria-hidden="true">↗</b></a>
          <a className="contact-card" href={instagramHref} target="_blank" rel="noreferrer"><span>IG</span><div><small>Instagram</small><strong>{siteData.instagramHandle}</strong><p>Conoce novedades y comunícate con Innova 3D.</p></div><b aria-hidden="true">↗</b></a>
          <div className="contact-card contact-location"><span>UB</span><div><small>Ubicación</small><strong>{siteData.address}</strong><p>Consulta el punto exacto en el mapa.</p></div></div>
        </div>
        <div className="map-shell" id="datos-pendientes">
          {siteData.mapEmbedUrl ? <iframe src={siteData.mapEmbedUrl} title="Ubicación de Innova 3D Solutions" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> : <div className="map-placeholder"><span className="map-pin" aria-hidden="true"><i /></span><small>Ubicación</small><strong>Mapa pendiente de confirmar</strong><p>No mostramos una dirección hasta recibir el dato oficial.</p></div>}
        </div>
      </section>
      <section className="section contact-guidance"><div><span>01</span><h2>Envía una referencia</h2><p>Puede ser una fotografía, una pieza, un boceto o un archivo.</p></div><div><span>02</span><h2>Explica su uso</h2><p>Cuéntanos dónde va y qué necesitas que resuelva.</p></div><div><span>03</span><h2>Conversemos</h2><p>Revisamos contigo qué información hace falta para continuar.</p></div></section>
    </main>
  );
}
