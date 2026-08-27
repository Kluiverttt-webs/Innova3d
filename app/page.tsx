import Image from "next/image";
import Link from "next/link";
import { ComparisonSlider } from "./components/ComparisonSlider";
import { ContactBand } from "./components/ContactBand";
import { galleryItems, services, whatsappHref } from "./site-data";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-comparison-wrap">
          <ComparisonSlider />
        </div>
        <div className="hero-copy">
          <span className="eyebrow">Impresión 3D aplicada</span>
          <h1><span className="hero-title-line">Convertimos tus ideas</span><span className="hero-title-line hero-title-accent">en soluciones 3D</span></h1>
          <p>Autopartes y piezas funcionales creadas para resolver lo que ya no encuentras.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappHref} target="_blank" rel="noreferrer">Contáctanos</a>
            <Link className="text-link" href="/servicios">Explorar servicios <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <p className="comparison-help">Desliza para comparar el plano con la pieza física.</p>
      </section>

      <section className="capability-strip" aria-label="Capacidades principales">
        <span>Autopartes</span><span>Ingeniería inversa</span><span>Prototipos</span><span>Objetos a medida</span>
      </section>

      <section className="brief-strip" aria-labelledby="brief-title">
        <div>
          <h2 id="brief-title">Para empezar, envíanos lo que tengas.</h2>
          <p>No necesitas tener toda la información. Una referencia sencilla es suficiente para conversar.</p>
        </div>
        <ul>
          <li><strong>Una foto</strong><span>de la pieza o el espacio</span></li>
          <li><strong>Medidas</strong><span>aunque sean aproximadas</span></li>
          <li><strong>La pieza</strong><span>completa o dañada</span></li>
          <li><strong>Un archivo 3D</strong><span>si ya cuentas con uno</span></li>
        </ul>
      </section>

      <section className="section home-services reveal-section">
        <div className="section-intro">
          <h2>Lo difícil de conseguir también se puede volver a crear.</h2>
          <p>Partimos de una referencia y definimos una ruta clara para diseñar, probar y fabricar.</p>
        </div>
        <div className="service-preview-grid">
          {services.map((service) => (
            <article className="service-preview" key={service.number}>
              <div className="service-preview-media">
                <Image unoptimized src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                <span className="scan-line" aria-hidden="true" />
              </div>
              <div className="service-preview-copy"><span>{service.mediaLabel}</span><h3>{service.title}</h3><p>{service.text}</p></div>
            </article>
          ))}
        </div>
        <Link className="button button-secondary section-action" href="/servicios">Ver servicios</Link>
      </section>

      <section className="section process-section reveal-section">
        <div className="process-visual" aria-label="Comparación entre el modelo digital y la pieza física">
          <figure>
            <div className="process-image"><Image unoptimized src="/proyectos/cad-tablero-frontal.webp" alt="Modelo CAD frontal de un panel automotriz" fill sizes="(max-width: 760px) 100vw, 28vw" /></div>
            <figcaption>Modelo digital</figcaption>
          </figure>
          <figure>
            <div className="process-image"><Image unoptimized src="/proyectos/autoparte-tablero.webp" alt="Panel automotriz reproducido físicamente" fill sizes="(max-width: 760px) 100vw, 28vw" /></div>
            <figcaption>Pieza física</figcaption>
          </figure>
        </div>
        <div className="process-copy">
          <h2>De una referencia a una pieza funcional.</h2>
          <p className="process-lead">Cada decisión parte de lo que la pieza debe resolver en el uso real.</p>
          <ol>
            <li><span>Referencia</span><div><h3>Comparte el problema</h3><p>Puede ser una foto, una pieza, medidas o un archivo.</p></div></li>
            <li><span>Diseño</span><div><h3>Definimos la solución</h3><p>Revisamos geometría, uso y la forma adecuada de producirla.</p></div></li>
            <li><span>Fabricación</span><div><h3>La hacemos tangible</h3><p>El modelo digital se convierte en una pieza que puedes probar.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section about-preview reveal-section">
        <div className="about-image">
          <Image unoptimized src="/proyectos/autoparte-rejilla.webp" alt="Rejilla automotriz terminada y sostenida en una mano" fill sizes="(max-width: 800px) 100vw, 48vw" />
        </div>
        <div className="about-copy">
          <h2>Primero entendemos la pieza. Después la fabricamos.</h2>
          <p>El objetivo no es imprimir por imprimir. Es construir una respuesta adecuada para tu necesidad.</p>
          <ul><li>Atención directa para entender el problema</li><li>Decisiones según uso, forma y encaje</li><li>Del modelo digital a la pieza física</li></ul>
          <Link className="text-link" href="/quienes-somos">Conocer Innova 3D <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section gallery-preview reveal-section">
        <div className="section-intro">
          <h2>Del archivo a una pieza que puedes sostener.</h2>
          <p>Una selección de fotografías reales y vistas del proceso digital de Innova 3D.</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.title}>
              <div className="gallery-image"><Image unoptimized src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
              <div className="gallery-copy"><span>{item.mediaLabel}</span><h3>{item.title}</h3><p>{item.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
