export const siteData = {
  whatsappNumber: "593995189882",
  whatsappDisplay: "+593 99 518 9882",
  instagramUrl: "https://www.instagram.com/innova.customparts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  instagramHandle: "@innova.customparts",
  address: "Innova 3D Solutions",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.746071809393!2d-78.44226242524186!3d0.3448071353213529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bdcb447b1ba5%3A0xdf519bd654728988!2sInnova%203D%20Solutions!5e0!3m2!1ses-419!2sec!4v1786647980840!5m2!1ses-419!2sec",
  videoUrl: "/videos/innova-3d-proceso.mp4",
};

const whatsappMessage =
  "Hola Innova 3D, quiero conversar sobre una pieza o proyecto de impresión 3D.";

export const whatsappHref = siteData.whatsappNumber
  ? `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  : `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

export const instagramHref = siteData.instagramUrl || "/contacto";

export const services = [
  {
    number: "01",
    slug: "autopartes",
    title: "Autopartes y repuestos",
    text: "Recreamos tapas, soportes y repuestos difíciles de conseguir a partir de una pieza, una foto o sus medidas.",
    image: "/proyectos/autoparte-rejilla.webp",
    alt: "Rejilla automotriz fabricada por Innova 3D",
    mediaLabel: "Fotografía real",
  },
  {
    number: "02",
    slug: "ingenieria-inversa",
    title: "Ingeniería inversa",
    text: "Reconstruimos la geometría de una referencia física para convertirla en un modelo listo para fabricar.",
    image: "/proyectos/ingenieria-inversa-conceptual.webp",
    alt: "Visual conceptual de medición, modelado e impresión de una pieza",
    mediaLabel: "Visual conceptual",
  },
  {
    number: "03",
    slug: "prototipos",
    title: "Prototipos funcionales",
    text: "Creamos versiones físicas para comprobar forma, encaje y funcionamiento antes de llegar al resultado final.",
    image: "/proyectos/prototipos-soportes.webp",
    alt: "Conjunto de soportes funcionales impresos en 3D",
    mediaLabel: "Fotografía real",
  },
  {
    number: "04",
    slug: "personalizados",
    title: "Objetos personalizados",
    text: "Diseñamos objetos y carcasas adaptados cuando una solución comercial no responde a lo que necesitas.",
    image: "/proyectos/objeto-personalizado.webp",
    alt: "Objeto personalizado impreso en 3D sostenido en una mano",
    mediaLabel: "Fotografía real",
  },
];

export const galleryItems = [
  {
    title: "Panel automotriz reproducido",
    description: "Una pieza física desarrollada para recuperar la distribución y los puntos de montaje del panel.",
    image: "/proyectos/autoparte-tablero.webp",
    alt: "Panel automotriz reproducido y sostenido frente a una estación de trabajo",
    mediaLabel: "Proyecto real",
  },
  {
    title: "Modelo digital del panel",
    description: "La geometría se reconstruye y revisa en digital antes de preparar la fabricación.",
    image: "/proyectos/cad-tablero-interior.webp",
    alt: "Modelo CAD del interior de un panel automotriz",
    mediaLabel: "Proceso digital",
  },
  {
    title: "Soportes funcionales",
    description: "Variaciones impresas para revisar dimensiones, montaje y comportamiento de la pieza.",
    image: "/proyectos/prototipos-soportes.webp",
    alt: "Varias piezas y soportes funcionales impresos en 3D",
    mediaLabel: "Proyecto real",
  },
  {
    title: "Carcasa de prueba",
    description: "Una primera versión tangible permite revisar la forma antes de continuar con el acabado.",
    image: "/proyectos/carcasa-prototipo.webp",
    alt: "Comparación entre una carcasa impresa y una pieza de referencia",
    mediaLabel: "Prototipo real",
  },
  {
    title: "Rejilla a medida",
    description: "Pieza terminada con geometría, apertura y soportes definidos para su aplicación.",
    image: "/proyectos/autoparte-rejilla.webp",
    alt: "Rejilla automotriz impresa en 3D sostenida en una mano",
    mediaLabel: "Proyecto real",
  },
];
