// Datos centrales de la empresa. Cambiar aquí actualiza todo el sitio.
export const SITE = {
  name: "Proactiva",
  legalName: "IP Proactiva S.A.S.",
  tagline: "Preventivo · Predictivo · Proactivo",
  url: "https://www.proactivasas.com",
  founded: 1990,
  city: "Cali",
  region: "Valle del Cauca",
  country: "Colombia",
  phoneDisplay: "+57 315 560 7303",
  phoneE164: "+573155607303",
  whatsapp: "573155607303",
  // TODO: reemplazar por correo corporativo (ej. contacto@proactivasas.com) cuando el hosting lo permita.
  email: "proactiva@yahoo.com",
  description:
    "Mantenimiento predictivo industrial en Cali desde 1990: balanceo dinámico, alineación láser, análisis de vibraciones, termografía y fabricación de ventiladores industriales.",
} as const;

// Redes sociales: solo se muestran las que tengan URL real.
// TODO: completar al crear/optimizar los perfiles oficiales.
export const SOCIAL: { name: string; url: string }[] = [
  { name: "LinkedIn", url: "" },
  { name: "Facebook", url: "" },
  { name: "Instagram", url: "" },
  { name: "Google", url: "" }, // Perfil de Google Business
].filter((s) => s.url);

export const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios/" },
  { label: "Productos", href: "/productos/" },
  { label: "Historia", href: "/historia/" },
  { label: "Clientes", href: "/clientes/" },
  { label: "Contacto", href: "/contacto/" },
] as const;

export function waLink(message = "Hola Proactiva, quiero información sobre sus servicios.") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const YEARS = new Date().getFullYear() - SITE.founded;
