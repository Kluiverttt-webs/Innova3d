"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "";
const instagramUrl = "https://instagram.com/";

const services = [
  {
    number: "01",
    title: "Autopartes y repuestos",
    text: "Recreamos tapas, soportes, clips y piezas difíciles de conseguir, adaptadas a tu necesidad.",
    tag: "Automotriz",
  },
  {
    number: "02",
    title: "Piezas funcionales",
    text: "Prototipos, soportes y componentes resistentes para resolver problemas reales en casa o negocio.",
    tag: "Soluciones",
  },
  {
    number: "03",
    title: "Ideas personalizadas",
    text: "Desde una referencia o un boceto, convertimos esa idea que tienes en una pieza física y única.",
    tag: "A medida",
  },
];

const projects = [
  { kind: "gear", label: "AUTOPARTES", title: "Repuestos a medida", meta: "Precisión · Ajuste funcional" },
  { kind: "bracket", label: "FUNCIONAL", title: "Soportes y adaptadores", meta: "Resistencia · Uso diario" },
  { kind: "vase", label: "PERSONALIZADO", title: "Objetos únicos", meta: "Diseño · Acabado" },
];

export default function Home() {
  const [sent, setSent] = useState(false);

  function handleQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hola Innova 3D, quiero cotizar una pieza.",
      `Nombre: ${data.get("name")}`,
      `Necesito: ${data.get("project")}`,
      `Cantidad: ${data.get("quantity") || "Por definir"}`,
      `Detalle: ${data.get("details")}`,
    ].join("\n");

    const destination = whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`;

    setSent(true);
    window.open(destination, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Innova 3D, inicio">
          <span className="brand-cube" aria-hidden="true"><i /><i /><i /></span>
          <span>INNOVA <b>3D</b></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#proceso">Proceso</a>
        </nav>
        <a className="header-cta" href="#cotizar">Cotiza tu idea <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Diseño · Prototipado · Impresión 3D</div>
          <h1>Convertimos tus ideas en <em>soluciones 3D</em></h1>
          <p className="hero-lede">
            Fabricamos autopartes, repuestos y piezas personalizadas. Tú traes la idea; nosotros la diseñamos y la hacemos realidad.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#cotizar">Cotiza tu pieza <span>→</span></a>
            <a className="button button-ghost" href="#proyectos"><span className="play">▶</span> Ver proyectos</a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true"><span>I3</span><span>3D</span><span>✓</span></div>
            <p><b>Atención personalizada</b><br />Te orientamos antes de imprimir</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Representación de una impresora 3D fabricando una pieza">
          <div className="visual-grid" />
          <div className="printer">
            <div className="printer-top"><span>INNOVA</span><i /></div>
            <div className="printer-rail rail-left" />
            <div className="printer-rail rail-right" />
            <div className="printer-gantry" />
            <div className="print-head"><i /><span /></div>
            <div className="filament-line" />
            <div className="printed-part"><i /><i /><i /><i /><i /></div>
            <div className="print-bed"><span /></div>
            <div className="printer-base"><i /><b>86%</b></div>
          </div>
          <div className="floating-note note-top"><small>MATERIAL</small><b>PETG</b><span>Alta resistencia</span></div>
          <div className="floating-note note-bottom"><i>✓</i><span><small>ESTADO</small><b>Listo para imprimir</b></span></div>
          <div className="hero-watermark">03</div>
        </div>
      </section>

      <section className="proof-bar" aria-label="Beneficios principales">
        <div><span>⌁</span><p><b>Fabricación local</b><small>Producción bajo pedido</small></p></div>
        <div><span>◇</span><p><b>Piezas a medida</b><small>Diseño según tu necesidad</small></p></div>
        <div><span>◎</span><p><b>Asesoría directa</b><small>Hablemos de tu idea</small></p></div>
        <div className="material-list"><small>TRABAJAMOS CON</small><b>PLA · PETG · TPU</b></div>
      </section>

      <section className="section services" id="servicios">
        <div className="section-heading">
          <div><span className="kicker">LO QUE HACEMOS</span><h2>De una necesidad<br />a una <em>solución real.</em></h2></div>
          <p>Ya sea una pieza que no encuentras, un prototipo o una idea única, encontramos la mejor forma de imprimirla.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="card-number">{service.number}</div>
              <span className="service-tag">{service.tag}</span>
              <div className={`service-icon icon-${service.number}`} aria-hidden="true"><i /><i /><i /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#cotizar" aria-label={`Cotizar ${service.title}`}>Quiero cotizar <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section process" id="proceso">
        <div className="process-intro">
          <span className="kicker">ASÍ DE SIMPLE</span>
          <h2>Tu idea, en tus manos.</h2>
          <p>No necesitas saber de impresión 3D. Cuéntanos qué necesitas y te acompañamos en todo el proceso.</p>
          <a className="text-link" href="#cotizar">Empezar mi proyecto <span>→</span></a>
        </div>
        <ol className="steps">
          <li><span>01</span><div><b>Cuéntanos tu idea</b><p>Envíanos una foto, medidas, archivo o simplemente explícanos el problema.</p></div></li>
          <li><span>02</span><div><b>Diseñamos la solución</b><p>Revisamos viabilidad, material, acabado y te enviamos una cotización clara.</p></div></li>
          <li><span>03</span><div><b>Imprimimos y entregamos</b><p>Fabricamos, verificamos el ajuste y coordinamos la entrega de tu pieza.</p></div></li>
        </ol>
      </section>

      <section className="section projects" id="proyectos">
        <div className="section-heading projects-heading">
          <div><span className="kicker">GALERÍA</span><h2>Ideas que toman <em>forma.</em></h2></div>
          <a className="social-link" href={instagramUrl} target="_blank" rel="noreferrer">Ver más en Instagram <span>↗</span></a>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.kind}>
              <div className={`project-art art-${project.kind}`}>
                <span className="project-index">0{index + 1}</span>
                <div className="art-object" aria-hidden="true"><i /><i /><i /><i /></div>
                <span className="art-caption">IMPRESIÓN CAPA A CAPA</span>
              </div>
              <div className="project-info"><div><span>{project.label}</span><h3>{project.title}</h3></div><p>{project.meta}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust">
        <div className="trust-title"><span className="kicker">POR QUÉ INNOVA 3D</span><h2>Imprimimos piezas.<br /><em>Construimos confianza.</em></h2></div>
        <div className="trust-list">
          <article><span>01</span><div><h3>Primero entendemos el problema</h3><p>Te recomendamos la solución adecuada antes de fabricar.</p></div></article>
          <article><span>02</span><div><h3>El material correcto importa</h3><p>Elegimos según resistencia, flexibilidad y uso de la pieza.</p></div></article>
          <article><span>03</span><div><h3>Acompañamiento de principio a fin</h3><p>Comunicación directa, cotización clara y seguimiento real.</p></div></article>
        </div>
      </section>

      <section className="quote-section" id="cotizar">
        <div className="quote-copy">
          <span className="kicker kicker-light">TU PROYECTO EMPIEZA AQUÍ</span>
          <h2>¿Tienes una idea?<br /><em>Hagámosla real.</em></h2>
          <p>Completa estos datos y tendrás un mensaje listo para enviarnos por WhatsApp.</p>
          <div className="quote-aside"><span>↗</span><p><b>¿No sabes qué material necesitas?</b><small>No te preocupes. Te asesoramos sin costo.</small></p></div>
        </div>
        <form className="quote-form" onSubmit={handleQuote}>
          <label>Tu nombre<input name="name" placeholder="¿Cómo te llamas?" required /></label>
          <div className="form-row">
            <label>¿Qué necesitas?
              <select name="project" defaultValue="Autoparte o repuesto">
                <option>Autoparte o repuesto</option><option>Pieza funcional</option><option>Objeto personalizado</option><option>Prototipo</option><option>Otro</option>
              </select>
            </label>
            <label>Cantidad<input name="quantity" type="number" min="1" placeholder="Ej. 2" /></label>
          </div>
          <label>Cuéntanos un poco más<textarea name="details" placeholder="Describe la pieza, sus medidas o el problema que quieres resolver..." rows={4} required /></label>
          <button className="button quote-button" type="submit">Enviar por WhatsApp <span>↗</span></button>
          <p className="form-note">{sent ? "Tu mensaje está listo en WhatsApp." : "Te responderemos para revisar los detalles de tu proyecto."}</p>
        </form>
      </section>

      <footer>
        <a className="brand brand-footer" href="#inicio"><span className="brand-cube" aria-hidden="true"><i /><i /><i /></span><span>INNOVA <b>3D</b></span></a>
        <p>Diseño e impresión 3D a medida.<br />Convertimos ideas en soluciones reales.</p>
        <div className="footer-links"><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href="#cotizar">WhatsApp ↗</a></div>
        <small>© {new Date().getFullYear()} Innova 3D. Hecho capa a capa.</small>
      </footer>
      <a className="mobile-quote" href="#cotizar">Cotizar ahora <span>↗</span></a>
    </main>
  );
}
