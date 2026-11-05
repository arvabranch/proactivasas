import type { ImageMetadata } from "astro";
import balanceo from "../assets/img/servicios/balanceo.jpg";
import alineacion from "../assets/img/servicios/alineacion.jpg";
import analisis from "../assets/img/servicios/analisis.jpg";
import resonancia from "../assets/img/servicios/resonancia.jpg";
import termografia from "../assets/img/servicios/termografia.jpg";
import ventiladores from "../assets/img/servicios/ventiladores.jpg";
import rotores from "../assets/img/servicios/rotores.jpg";
import planta1 from "../assets/img/planta-1.jpg";
import planta2 from "../assets/img/planta-2.jpg";

export type IconName =
  | "rotate"
  | "crosshair"
  | "activity"
  | "thermometer"
  | "fan";

export interface Servicio {
  slug: string;
  nombre: string;
  /** Nombre corto para tarjetas y chips */
  corto: string;
  icon: IconName;
  /** <title> SEO (≤ 60 caracteres aprox.) */
  seoTitle: string;
  /** meta description (≤ 155 caracteres aprox.) */
  seoDescription: string;
  /** Frase de valor bajo el título */
  lead: string;
  /** Dato técnico destacado */
  dato: { valor: string; etiqueta: string };
  resumen: string;
  hero: ImageMetadata;
  galeria: { src: ImageMetadata; alt: string }[];
  queEs: string[];
  sintomas: string[];
  incluye: { titulo: string; texto: string }[];
  beneficios: string[];
  proceso: { titulo: string; texto: string }[];
  faq: { q: string; a: string }[];
  relacionados: string[];
  mensajeWa: string;
}

export const SERVICIOS: Servicio[] = [
  {
    slug: "balanceo-dinamico",
    nombre: "Balanceo dinámico en banco y en sitio",
    corto: "Balanceo dinámico",
    icon: "rotate",
    seoTitle: "Balanceo dinámico en Cali | En banco y en sitio · Proactiva",
    seoDescription:
      "Balanceo dinámico de rotores y ventiladores en Cali, en banco y en sitio a velocidad real de operación. Menos vibración y más vida útil para sus equipos.",
    lead: "Rotores que giran suaves: menos vibración, menos desgaste y equipos que duran lo que deben durar.",
    dato: { valor: "2 en 1", etiqueta: "En banco y en sitio" },
    resumen:
      "Balanceamos rotores en nuestro taller a una velocidad superior a la del balanceo en banco tradicional, y en su planta a la velocidad real de operación.",
    hero: balanceo,
    galeria: [
      { src: balanceo, alt: "Rotor montado en máquina de balanceo en el taller de Proactiva" },
      { src: rotores, alt: "Rotor de ventilador fabricado por Proactiva listo para balanceo" },
    ],
    queEs: [
      "El desbalanceo ocurre cuando la masa de un rotor no está distribuida de forma uniforme alrededor de su eje. Al girar, esa diferencia genera una fuerza centrífuga que se transmite a rodamientos, soportes y estructura en cada vuelta.",
      "En Proactiva realizamos balanceo en banco a todo repuesto que construimos o reparamos en nuestro taller, a una velocidad superior a la del balanceo en banco tradicional, para dejar el mínimo desbalanceo residual. Cuando el equipo no se puede desmontar, hacemos balanceo dinámico en sitio, a la velocidad real de operación, siguiendo estándares y normas internacionales.",
    ],
    sintomas: [
      "Vibración alta que aumenta con la velocidad del equipo",
      "Rodamientos que fallan antes de tiempo",
      "Ruido o golpeteo rítmico en ventiladores y rotores",
      "Fisuras en soportes, bases o soldaduras",
      "Acumulación de material o desgaste en álabes",
      "Después de reparar, recubrir o cambiar un rotor",
    ],
    incluye: [
      {
        titulo: "Balanceo en banco",
        texto: "Para rotores nuevos o reparados en taller, a velocidad superior a la tradicional para un desbalanceo residual mínimo.",
      },
      {
        titulo: "Balanceo dinámico en sitio",
        texto: "Sin desmontar el equipo, a la velocidad real de operación y con las condiciones reales de montaje.",
      },
      {
        titulo: "Medición antes y después",
        texto: "Registro de niveles de vibración inicial y final para comprobar el resultado del trabajo.",
      },
      {
        titulo: "Informe técnico",
        texto: "Resultados, masas de corrección aplicadas y recomendaciones para el equipo.",
      },
    ],
    beneficios: [
      "Mayor vida útil de rodamientos, sellos y acoples",
      "Menos paradas no programadas",
      "Menor consumo de energía y operación más silenciosa",
      "Menos esfuerzos sobre estructuras y bases",
    ],
    proceso: [
      { titulo: "Diagnóstico", texto: "Medimos la vibración para confirmar que el problema es desbalanceo y no otra falla." },
      { titulo: "Corrección", texto: "Calculamos y aplicamos las masas de corrección en uno o dos planos." },
      { titulo: "Verificación", texto: "Medimos de nuevo hasta llegar a niveles aceptables de vibración." },
      { titulo: "Informe", texto: "Entregamos el resultado y las recomendaciones de mantenimiento." },
    ],
    faq: [
      {
        q: "¿Cuál es la diferencia entre balanceo en banco y balanceo en sitio?",
        a: "En banco, el rotor se balancea en el taller, desmontado del equipo. En sitio, se balancea montado en su lugar y a la velocidad real de operación, sin desmontarlo. Elegimos el método según el equipo, el acceso y el tiempo de parada disponible.",
      },
      {
        q: "¿Es necesario detener la producción para balancear en sitio?",
        a: "Se requieren arranques y paradas cortas del equipo para medir y colocar las masas de corrección, pero no es necesario desmontarlo. Coordinamos el trabajo con su programa de producción.",
      },
      {
        q: "¿Qué equipos se pueden balancear?",
        a: "Ventiladores, rotores, poleas, impulsores y en general elementos rotativos de maquinaria industrial. Escríbanos con los datos del equipo y le confirmamos.",
      },
    ],
    relacionados: ["analisis-de-vibraciones", "alineacion-laser", "ventiladores-industriales"],
    mensajeWa: "Hola Proactiva, quisiera información sobre el servicio de balanceo dinámico.",
  },
  {
    slug: "alineacion-laser",
    nombre: "Alineación láser de ejes y poleas",
    corto: "Alineación láser",
    icon: "crosshair",
    seoTitle: "Alineación láser de ejes en Cali | Precisión 0,01 mm · Proactiva",
    seoDescription:
      "Alineación láser de ejes acoplados y poleas en Cali con precisión de hasta 0,01 mm. Elimine fuerzas innecesarias sobre rodamientos y acoples.",
    lead: "Ejes colineales con precisión de hasta 0,01 mm para que rodamientos y acoples trabajen sin esfuerzos innecesarios.",
    dato: { valor: "0,01 mm", etiqueta: "Precisión de alineación" },
    resumen:
      "Alineamos ejes acoplados y poleas con equipos láser profesionales de alta precisión, hasta 0,01 mm.",
    hero: alineacion,
    galeria: [
      { src: alineacion, alt: "Técnico de Proactiva alineando ejes acoplados con equipo láser" },
      { src: planta2, alt: "Equipo de alineación láser instalado sobre un acople en planta" },
    ],
    queEs: [
      "La desalineación ocurre cuando los ejes de dos máquinas acopladas, por ejemplo un motor y una bomba o un motor y un ventilador, no quedan en la misma línea. Es una de las causas más comunes de vibración y de fallas prematuras en rodamientos, sellos y acoples.",
      "Con equipos láser profesionales alineamos ejes acoplados para que sean colineales, con una precisión de hasta 0,01 mm. Así se eliminan las fuerzas innecesarias sobre los rodamientos o cojinetes de soporte. También alineamos transmisiones por poleas y correas.",
    ],
    sintomas: [
      "Rodamientos, sellos o acoples que se dañan con frecuencia",
      "Vibración en dirección axial",
      "Calentamiento en acoples o en los apoyos del motor",
      "Correas que se desgastan, se voltean o se salen",
      "Pernos de anclaje o acoples que se aflojan",
      "Después de cambiar un motor, una bomba o un acople",
    ],
    incluye: [
      {
        titulo: "Ejes acoplados",
        texto: "Alineación de motor con bomba, ventilador, reductor o compresor, en horizontal y vertical.",
      },
      {
        titulo: "Poleas y correas",
        texto: "Alineación de transmisiones por correa para reducir desgaste de poleas y correas.",
      },
      {
        titulo: "Revisión de pata coja",
        texto: "Verificación de apoyo de la máquina antes de alinear, para que el resultado se mantenga.",
      },
      {
        titulo: "Reporte de valores",
        texto: "Valores de desalineación iniciales y finales, y correcciones realizadas.",
      },
    ],
    beneficios: [
      "Rodamientos y sellos que duran más",
      "Menos vibración y menos ruido",
      "Menor consumo de energía en la transmisión",
      "Menos repuestos y menos paradas",
    ],
    proceso: [
      { titulo: "Inspección", texto: "Revisamos bases, anclajes y apoyo de la máquina." },
      { titulo: "Medición", texto: "Instalamos el equipo láser y medimos la desalineación real." },
      { titulo: "Corrección", texto: "Ajustamos con lainas y movimientos laterales hasta la tolerancia." },
      { titulo: "Reporte", texto: "Entregamos valores finales y recomendaciones." },
    ],
    faq: [
      {
        q: "¿Por qué láser y no reloj comparador?",
        a: "El láser mide más rápido, con mayor precisión (hasta 0,01 mm) y con menos margen de error del operador. Además calcula directamente las correcciones que hay que hacer en cada pata de la máquina.",
      },
      {
        q: "¿Cada cuánto se debe alinear?",
        a: "Siempre que se instale o se cambie un equipo, después de un mantenimiento mayor, y cuando el análisis de vibraciones muestre señales de desalineación.",
      },
      {
        q: "¿También alinean poleas?",
        a: "Sí. Alineamos transmisiones por poleas y correas, además de ejes acoplados.",
      },
    ],
    relacionados: ["analisis-de-vibraciones", "balanceo-dinamico", "termografia"],
    mensajeWa: "Hola Proactiva, quisiera información sobre el servicio de alineación láser.",
  },
  {
    slug: "analisis-de-vibraciones",
    nombre: "Análisis de vibraciones y prueba de resonancia",
    corto: "Análisis de vibraciones",
    icon: "activity",
    seoTitle: "Análisis de vibraciones en Cali | Mantenimiento predictivo · Proactiva",
    seoDescription:
      "Análisis de vibraciones, rutas predictivas con TPM y prueba de resonancia a rotores en Cali. Detecte fallas en rodamientos y engranajes antes de que paren su planta.",
    lead: "Escuchamos lo que sus máquinas dicen antes de que fallen: detectamos problemas mecánicos a tiempo y le decimos cómo corregirlos.",
    dato: { valor: "Rutas", etiqueta: "Con TPM y termografía" },
    resumen:
      "Identificamos problemas mecánicos para garantizar la vida útil proyectada de rodamientos, engranajes y otros componentes, con soluciones y sugerencias de mejora.",
    hero: analisis,
    galeria: [
      { src: analisis, alt: "Técnico de Proactiva midiendo vibraciones con analizador portátil" },
      { src: resonancia, alt: "Prueba de impacto para hallar las frecuencias naturales de un rotor" },
    ],
    queEs: [
      "Cada falla mecánica deja una huella en la vibración de la máquina. Midiendo y analizando esa vibración identificamos desbalanceo, desalineación, holguras, daños en rodamientos y engranajes, y otros problemas, mucho antes de que se conviertan en una parada.",
      "Ejecutamos rutas periódicas de vibraciones bajo postulados TPM, que pueden incluir termografía, y entregamos soluciones y sugerencias de mejora. También hacemos la prueba de impacto (prueba de resonancia) para identificar las frecuencias naturales de un rotor y advertir si la velocidad de operación coincide con ellas, algo clave cuando se usan variadores de frecuencia.",
    ],
    sintomas: [
      "Equipos críticos sin monitoreo periódico",
      "Fallas repetitivas cuya causa no está clara",
      "Ruido o vibración nueva en un equipo",
      "Uso de variadores de frecuencia en ventiladores",
      "Necesidad de planear paradas con información real",
      "Validar una reparación o un equipo nuevo",
    ],
    incluye: [
      {
        titulo: "Rutas de vibraciones",
        texto: "Mediciones periódicas en sus equipos con tendencia histórica y alertas tempranas.",
      },
      {
        titulo: "Diagnóstico de fallas",
        texto: "Identificación de desbalanceo, desalineación, holguras y daños en rodamientos y engranajes.",
      },
      {
        titulo: "Prueba de resonancia",
        texto: "Prueba de impacto para hallar frecuencias naturales del rotor y evitar operar en resonancia.",
      },
      {
        titulo: "Informe con recomendaciones",
        texto: "Estado de cada equipo, prioridad de intervención y sugerencias de mejora.",
      },
    ],
    beneficios: [
      "Paradas planeadas en lugar de paradas de emergencia",
      "Repuestos comprados a tiempo, no de urgencia",
      "Vida útil proyectada de rodamientos y engranajes",
      "Decisiones de mantenimiento basadas en datos",
    ],
    proceso: [
      { titulo: "Inventario", texto: "Definimos con usted los equipos críticos y los puntos de medición." },
      { titulo: "Medición", texto: "Tomamos lecturas en cada punto según la ruta acordada." },
      { titulo: "Análisis", texto: "Interpretamos espectros y tendencias para hallar la causa raíz." },
      { titulo: "Recomendación", texto: "Entregamos el informe y acompañamos la corrección." },
    ],
    faq: [
      {
        q: "¿Cada cuánto se hacen las rutas de vibraciones?",
        a: "Depende de qué tan críticos sean los equipos. Lo habitual es una frecuencia mensual o trimestral; la definimos con usted al montar la ruta.",
      },
      {
        q: "¿Qué es la prueba de resonancia?",
        a: "Es una prueba de impacto que identifica las frecuencias naturales del rotor. Si la velocidad de operación coincide con una de ellas, la vibración se amplifica. Es especialmente útil cuando el ventilador trabaja con variador de frecuencia.",
      },
      {
        q: "¿Hay que detener los equipos para medir?",
        a: "No. El análisis de vibraciones se hace con los equipos en operación, que es precisamente cuando muestran su estado real.",
      },
    ],
    relacionados: ["termografia", "balanceo-dinamico", "alineacion-laser"],
    mensajeWa: "Hola Proactiva, quisiera información sobre el análisis de vibraciones.",
  },
  {
    slug: "termografia",
    nombre: "Termografía infrarroja",
    corto: "Termografía",
    icon: "thermometer",
    seoTitle: "Termografía industrial en Cali | Eléctrica y mecánica · Proactiva",
    seoDescription:
      "Termografía infrarroja en Cali para evaluar condiciones eléctricas y mecánicas de sus equipos en operación. Detecte puntos calientes sin detener la planta.",
    lead: "Vemos el calor que no se ve: puntos calientes en tableros, conexiones y máquinas, sin detener su operación.",
    dato: { valor: "Sin parar", etiqueta: "Inspección en operación" },
    resumen:
      "Evaluamos las condiciones eléctricas y mecánicas de sus equipos en operación y sus componentes. Se puede incluir en las rutas de vibraciones.",
    hero: termografia,
    galeria: [
      { src: termografia, alt: "Cámara termográfica inspeccionando un tablero eléctrico" },
      { src: planta1, alt: "Inspección de equipos en planta realizada por Proactiva" },
    ],
    queEs: [
      "Casi toda falla eléctrica o mecánica genera calor antes de ocurrir. Una conexión floja, un rodamiento sin lubricación o una fase sobrecargada se calientan más de lo normal.",
      "Con cámaras termográficas medimos la temperatura de equipos y componentes sin contacto y sin detener la operación. Proactiva usa esta técnica predictiva para evaluar condiciones eléctricas y mecánicas, y se puede incluir en las rutas de vibraciones para tener un diagnóstico más completo.",
    ],
    sintomas: [
      "Tableros y conexiones eléctricas sin inspección reciente",
      "Motores, rodamientos o acoples que se calientan",
      "Disparos de protecciones sin causa aparente",
      "Equipos críticos que no se pueden detener para revisar",
      "Requisitos de inspección de aseguradoras o auditorías",
      "Planeación de mantenimiento eléctrico",
    ],
    incluye: [
      {
        titulo: "Termografía eléctrica",
        texto: "Tableros, conexiones, breakers, transformadores y barrajes en carga.",
      },
      {
        titulo: "Termografía mecánica",
        texto: "Motores, rodamientos, acoples, reductores y transmisiones.",
      },
      {
        titulo: "Integración con vibraciones",
        texto: "Se puede incluir en las rutas de vibraciones para un diagnóstico más completo.",
      },
      {
        titulo: "Informe con imágenes",
        texto: "Imágenes térmicas, temperaturas encontradas y prioridad de corrección.",
      },
    ],
    beneficios: [
      "Inspección sin contacto y sin detener equipos",
      "Detección temprana de riesgos eléctricos",
      "Menos incendios, disparos y paradas imprevistas",
      "Prioridades claras para su equipo de mantenimiento",
    ],
    proceso: [
      { titulo: "Planeación", texto: "Definimos equipos y tableros a inspeccionar, en carga normal." },
      { titulo: "Captura", texto: "Tomamos imágenes térmicas y visibles de cada punto." },
      { titulo: "Análisis", texto: "Comparamos temperaturas y clasificamos hallazgos por severidad." },
      { titulo: "Informe", texto: "Entregamos imágenes, hallazgos y acciones recomendadas." },
    ],
    faq: [
      {
        q: "¿Hay que apagar los equipos para la termografía?",
        a: "No. Al contrario, la inspección se hace con los equipos funcionando y con carga, porque es cuando los problemas generan calor.",
      },
      {
        q: "¿Qué se puede detectar con termografía?",
        a: "Conexiones flojas o sulfatadas, desbalance de fases, sobrecargas, rodamientos con mala lubricación, acoples desalineados y otros problemas que generan calor anormal.",
      },
      {
        q: "¿Se puede combinar con el análisis de vibraciones?",
        a: "Sí. La termografía puede incluirse en las rutas de vibraciones para tener una visión más completa del estado de cada equipo.",
      },
    ],
    relacionados: ["analisis-de-vibraciones", "alineacion-laser", "balanceo-dinamico"],
    mensajeWa: "Hola Proactiva, quisiera información sobre el servicio de termografía.",
  },
  {
    slug: "ventiladores-industriales",
    nombre: "Fabricación y mantenimiento de ventiladores industriales",
    corto: "Ventiladores industriales",
    icon: "fan",
    seoTitle: "Ventiladores industriales en Cali | Fabricación y mantenimiento",
    seoDescription:
      "Fabricación de ventiladores industriales generales y heavy duty, rotores de repuesto y mantenimiento de ventiladores en Cali. Puesta en marcha con vibración mínima.",
    lead: "Seleccionamos, diseñamos y construimos ventiladores para su proceso, y los entregamos funcionando con vibración mínima.",
    dato: { valor: "Heavy duty", etiqueta: "Generales y de servicio pesado" },
    resumen:
      "Fabricamos ventiladores industriales generales y heavy duty desde 2019, construimos rotores de repuesto y hacemos mantenimiento general de ventiladores.",
    hero: ventiladores,
    galeria: [
      { src: ventiladores, alt: "Ventilador industrial centrífugo fabricado por Proactiva" },
      { src: planta1, alt: "Ventilador axial en pruebas en el taller de Proactiva" },
      { src: rotores, alt: "Rotor de repuesto fabricado por Proactiva" },
    ],
    queEs: [
      "Desde 2019 fabricamos ventiladores industriales generales y heavy duty. Seleccionamos y diseñamos cualquier tipo de ventilador según las necesidades de su proceso, y construimos rotores para aplicaciones con condiciones severas de operación: temperatura, gases y sólidos.",
      "Cada ventilador que entregamos se audita y se pone en marcha bajo parámetros de vibración mínima, apoyados en nuestra experiencia en balanceo y análisis de vibraciones. También hacemos mantenimiento general a ventiladores existentes.",
    ],
    sintomas: [
      "Necesita un ventilador nuevo para un proceso",
      "Su ventilador actual no entrega el caudal o la presión requerida",
      "Rotores desgastados por abrasión, temperatura o gases",
      "Ventiladores con vibración alta o fallas repetitivas",
      "Repuestos difíciles de conseguir o importados",
      "Mantenimiento general de ventiladores en planta",
    ],
    incluye: [
      {
        titulo: "Selección y diseño",
        texto: "Ventiladores centrífugos y axiales diseñados según caudal, presión y condiciones del proceso.",
      },
      {
        titulo: "Rotores de repuesto",
        texto: "Construidos para servicio severo: alta temperatura, gases y manejo de sólidos.",
      },
      {
        titulo: "Puesta en marcha",
        texto: "Auditoría y arranque de cada ventilador bajo parámetros de vibración mínima.",
      },
      {
        titulo: "Accesorios",
        texto: "Dampers tipo persiana, juntas flexibles y válvulas rotativas (rotoesclusas).",
      },
    ],
    beneficios: [
      "Un solo proveedor para diseño, fabricación y mantenimiento",
      "Equipos entregados balanceados y verificados",
      "Fabricación local en Cali, con soporte cercano",
      "Rotores pensados para la condición real de su proceso",
    ],
    proceso: [
      { titulo: "Requerimiento", texto: "Revisamos caudal, presión, temperatura y tipo de material a manejar." },
      { titulo: "Diseño", texto: "Seleccionamos o diseñamos el ventilador y sus accesorios." },
      { titulo: "Fabricación", texto: "Construimos en taller y balanceamos el rotor en banco." },
      { titulo: "Puesta en marcha", texto: "Instalamos, auditamos y arrancamos con vibración mínima." },
    ],
    faq: [
      {
        q: "¿Qué tipos de ventiladores fabrican?",
        a: "Ventiladores industriales generales y heavy duty, centrífugos y axiales, diseñados según las necesidades de cada proceso.",
      },
      {
        q: "¿Fabrican solo el rotor de repuesto?",
        a: "Sí. Construimos rotores para cualquier tipo de aplicación, incluso bajo condiciones severas de temperatura, gases y sólidos.",
      },
      {
        q: "¿Los ventiladores se entregan balanceados?",
        a: "Sí. Cada ventilador se audita y se pone en marcha bajo parámetros de vibración mínima.",
      },
    ],
    relacionados: ["balanceo-dinamico", "analisis-de-vibraciones", "alineacion-laser"],
    mensajeWa: "Hola Proactiva, quisiera información sobre ventiladores industriales.",
  },
];

export const getServicio = (slug: string) => SERVICIOS.find((s) => s.slug === slug);

/** Selector "¿Qué está pasando con su equipo?" del hub de servicios */
export const PROBLEMAS = [
  { id: "vibra", label: "Mi equipo vibra o hace ruido", servicios: ["analisis-de-vibraciones", "balanceo-dinamico"] },
  { id: "rodamientos", label: "Los rodamientos o acoples fallan seguido", servicios: ["alineacion-laser", "analisis-de-vibraciones"] },
  { id: "calor", label: "Algo se está calentando", servicios: ["termografia", "alineacion-laser"] },
  { id: "ventilador", label: "Necesito un ventilador o un rotor", servicios: ["ventiladores-industriales", "balanceo-dinamico"] },
  { id: "prevenir", label: "Quiero prevenir paradas", servicios: ["analisis-de-vibraciones", "termografia"] },
] as const;
