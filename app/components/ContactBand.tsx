import Link from "next/link";
import { whatsappHref } from "../site-data";

export function ContactBand() {
  return (
    <section className="contact-band">
      <p>Una pieza que no encuentras puede empezar con una conversación.</p>
      <div><h2>Cuéntanos qué necesitas.</h2><a className="button button-light" href={whatsappHref} target="_blank" rel="noreferrer">Contáctanos</a><Link className="text-link-light" href="/contacto">Ver otros canales</Link></div>
    </section>
  );
}
