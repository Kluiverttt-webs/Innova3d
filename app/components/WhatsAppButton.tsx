import { whatsappHref } from "../site-data";

export function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Contactar a Innova 3D por WhatsApp">
      <span aria-hidden="true">WA</span>Contáctanos
    </a>
  );
}
