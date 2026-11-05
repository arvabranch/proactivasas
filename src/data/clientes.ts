// Clientes tomados del listado de logos que Proactiva ya publica en su sitio actual.
// IMPORTANTE: confirmar con Proactiva la autorización antes de publicar (ver propuesta comercial).
export const SECTORES = [
  {
    nombre: "Ingenios azucareros",
    icon: "factory",
    clientes: ["Riopaila Castilla", "Ingenio del Occidente", "Ingenio Risaralda", "Mayagüez", "La Troncal"],
  },
  {
    nombre: "Alimentos y bebidas",
    icon: "factory",
    clientes: ["Alquería", "Alpina", "Colcafé", "Bavaria", "Yupi", "Hero", "Alival", "Ingredion", "Molinos"],
  },
  {
    nombre: "Cemento, acero y construcción",
    icon: "factory",
    clientes: ["Cemex", "Holcim", "Argos", "Cementos San Marcos", "Gerdau Diaco", "Eternit", "Grupo Rocales & Concretos"],
  },
  {
    nombre: "Energía, petróleo y minería",
    icon: "factory",
    clientes: ["Ecopetrol", "Termotasajero", "Cerro Matoso", "Bentocol"],
  },
  {
    nombre: "Salud y consumo masivo",
    icon: "factory",
    clientes: ["Baxter", "BSN medical", "Tecnoquímicas", "Kimberly-Clark", "Johnson & Johnson"],
  },
  {
    nombre: "Industria y manufactura",
    icon: "factory",
    clientes: ["Johnson Controls", "Graiman", "Roa", "Colmaquinas", "Tecam", "Edospina", "Fundiciones Universo", "Venfil", "Impadoc", "Fiberglass Colombia", "GEA", "Cotecmar"],
  },
] as const;

// Casos de éxito: se muestran solo cuando haya al menos uno con material autorizado.
export const CASOS: { cliente: string; sector: string; reto: string; solucion: string; resultado: string }[] = [];
