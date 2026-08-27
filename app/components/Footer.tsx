import Link from "next/link";
import Image from "next/image";
import { instagramHref, siteData, whatsappHref } from "../site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-intro">
          <Link className="brand brand-footer" href="/">
            <Image unoptimized className="brand-logo footer-logo" src="/innova-logo.png" alt="Innova Custom Auto Parts" width={260} height={120} />
          </Link>
          <p>Impresión 3D para autopartes, repuestos, prototipos y objetos personalizados.</p>
        </div>
        <div><h2>Explora</h2><Link href="/servicios">Servicios</Link><Link href="/quienes-somos">Quiénes somos</Link><Link href="/contacto">Contacto</Link></div>
        <div><h2>Soluciones</h2><Link href="/servicios#autopartes">Autopartes</Link><Link href="/servicios#ingenieria-inversa">Ingeniería inversa</Link><Link href="/servicios#prototipos">Prototipos</Link></div>
        <div><h2>Conversemos</h2><a href={whatsappHref} target="_blank" rel="noreferrer">{siteData.whatsappDisplay}</a><a href={instagramHref} target="_blank" rel="noreferrer">{siteData.instagramHandle}</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Innova 3D</span><span>Convertimos tus ideas en soluciones 3D</span></div>
    </footer>
  );
}
