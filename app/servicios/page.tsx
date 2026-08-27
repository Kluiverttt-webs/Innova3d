import type { Metadata } from "next";
import Image from "next/image";
import { ContactBand } from "../components/ContactBand";
import { services } from "../site-data";

export const metadata: Metadata = { title: "Servicios", description: "Servicios de impresión 3D, autopartes, ingeniería inversa y prototipos de Innova 3D." };

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero"><span className="section-index">Servicios</span><h1>Soluciones 3D pensadas para funcionar.</h1><p>Revisamos cada necesidad desde su uso real, no solo desde su forma.</p></section>
      <section className="section service-list">
        {services.map((service, index) => (
          <article className="service-detail" id={service.slug} key={service.number}>
            <div className="service-detail-visual">
              <div className="service-detail-media">
                <Image unoptimized src={service.image} alt={service.alt} fill sizes="(max-width: 800px) 100vw, 48vw" />
              </div>
              <small>{service.mediaLabel}</small>
            </div>
            <div className="service-detail-copy"><h2>{service.title}</h2><p>{service.text}</p><ul>{index === 0 && <><li>Piezas difíciles de encontrar</li><li>Clips, tapas y soportes</li><li>Revisión según el uso</li></>}{index === 1 && <><li>Referencia física o fotográfica</li><li>Reconstrucción de geometría</li><li>Preparación para fabricación</li></>}{index === 2 && <><li>Primera versión tangible</li><li>Pruebas de forma y encaje</li><li>Iteración antes del resultado final</li></>}{index === 3 && <><li>Objetos adaptados a tu necesidad</li><li>Soluciones para hogar o negocio</li><li>Diseño a partir de una idea</li></>}</ul></div>
          </article>
        ))}
      </section>
      <section className="section material-note"><span>Cómo trabajamos</span><h2>No necesitas conocer materiales ni procesos.</h2><p>Explícanos qué debe hacer la pieza. Nosotros revisamos contigo la ruta de fabricación más adecuada.</p></section>
      <ContactBand />
    </main>
  );
}
