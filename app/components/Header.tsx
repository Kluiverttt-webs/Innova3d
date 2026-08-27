"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <details className="mobile-menu">
          <summary aria-label="Abrir menú de navegación">Menú</summary>
          <nav aria-label="Navegación móvil">
            {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          </nav>
        </details>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return <Link className={isActive ? "is-active" : ""} href={link.href} key={link.href}>{link.label}</Link>;
          })}
        </nav>

        <Link className="brand" href="/" aria-label="Innova 3D, ir al inicio">
          <Image unoptimized className="brand-logo" src="/innova-logo.png" alt="Innova Custom Auto Parts" width={186} height={86} priority />
        </Link>
      </div>
    </header>
  );
}
