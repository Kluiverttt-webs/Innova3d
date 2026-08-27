import type { Metadata } from "next";
import { ContactBand } from "../components/ContactBand";
import { ProcessVideo } from "../components/ProcessVideo";
import { galleryItems, siteData } from "../site-data";
import Image from "next/image";

export const metadata: Metadata = { title: "Quiénes somos", description: "Conoce el enfoque de Innova 3D y su trabajo con piezas funcionales." };

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero about-page-hero"><span className="section-index">Quiénes somos</span><h1>Hacemos tangible una solución que empieza con tu necesidad.</h1><p>Innova 3D conecta diseño, fabricación y conversación directa.</p></section>
      <section className="section video-section reveal-section">
        <div className="video-stage">
          <ProcessVideo src={siteData.videoUrl} />
        </div>
        <div className="video-copy"><span className="section-index">Nuestro enfoque</span><h2>Antes de imprimir, entendemos.</h2><p>Una buena pieza no nace solo de una máquina. Nace de observar el problema, definir su función y construir una respuesta adecuada.</p><p className="video-note">Mira cómo una idea toma forma durante el proceso.</p></div>
      </section>
      <section className="section principles"><article><span>01</span><h2>Escuchar</h2><p>Empezamos por el uso real y las condiciones de la pieza.</p></article><article><span>02</span><h2>Diseñar</h2><p>Convertimos referencias e ideas en una geometría lista para evaluar.</p></article><article><span>03</span><h2>Fabricar</h2><p>Transformamos el modelo digital en una solución física.</p></article></section>
      <section className="section projects-page">
        <div className="section-intro"><h2>Proyectos y procesos.</h2><p>Fotografías reales y vistas digitales que muestran distintas etapas del trabajo.</p></div>
        <div className="gallery-grid">{galleryItems.map((item) => <article className="gallery-card" key={item.title}><div className="gallery-image"><Image unoptimized src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><div className="gallery-copy"><span>{item.mediaLabel}</span><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div>
      </section>
      <ContactBand />
    </main>
  );
}
