// =========================================================
// Datos del centro: todo el contenido editable de la web
// Información tomada de Facebook e Instagram de ComuniK-T
// =========================================================

export const SITE = {
  name: "ComuniK-T",
  legalName: "ComuniK-T® Kids Therapy",
  title: "ComuniK-T | Centro de Terapias para Niños en Surco",
  description:
    "Evaluaciones y terapias de lenguaje, aprendizaje, psicología, ocupacional y física para niños en Santiago de Surco, Lima. También atención online. Agenda por WhatsApp.",
  foundingDate: "2014-09-09",
  foundingYear: 2014,
  district: "Santiago de Surco",
  city: "Lima",
  // Completar cuando el centro confirme la dirección exacta y el horario
  address: "",
  hours: "Turno mañana y tarde",
};

export const CONTACT = {
  waNumber: "51953166549",
  phoneDisplay: "953 166 549",
  phoneIntl: "+51 953 166 549",
  email: "centro.comunikt@gmail.com",
  facebook: "https://www.facebook.com/comunicakidstherapy",
  facebookReviews: "https://www.facebook.com/comunicakidstherapy/reviews",
  instagram: "https://www.instagram.com/centro.comunikt/",
};

// IDs de medición: dejar vacío para no cargar nada.
// Con un ID, cada clic a WhatsApp se registra como conversión.
export const ANALYTICS = {
  ga4: "", // ej. "G-XXXXXXXXXX"
  metaPixel: "", // ej. "1234567890"
};

export const wa = (msg: string) =>
  `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(msg)}`;

export const WA_MSG = {
  general: "Hola ComuniK-T, quisiera más información.",
  evaluacion: "Hola ComuniK-T, quisiera agendar una evaluación para mi hijo(a).",
  orientacion: "Hola ComuniK-T, quisiera orientación sobre qué evaluación necesita mi hijo(a).",
  servicio: (name: string) => `Hola ComuniK-T, quisiera información sobre ${name} para mi hijo(a).`,
};

// ---------- Terapias ----------
export type Color = "pink" | "orange" | "green" | "teal" | "yellow";

export interface Service {
  id: string;
  name: string;
  short: string;
  desc: string;
  icon: string;
  color: Color;
  online: boolean;
  image: string; // nombre del archivo en src/assets/img
  alt: string;
}

export const SERVICES: Service[] = [
  {
    id: "lenguaje", name: "Terapia de Lenguaje", short: "Lenguaje", icon: "i-bubble", color: "pink", online: true,
    desc: "Acompañamos a tu peque para que se exprese, se haga entender y se comunique con más seguridad en casa y en el colegio.",
    image: "lenguaje", alt: "Terapeuta jugando con un niño pequeño",
  },
  {
    id: "aprendizaje", name: "Terapia de Aprendizaje", short: "Aprendizaje", icon: "i-book", color: "orange", online: true,
    desc: "Apoyo para niños que presentan dificultades en su proceso de aprendizaje, para que avancen con confianza en el colegio.",
    image: "aprendizaje", alt: "Niño sonriente estudiando en su escritorio",
  },
  {
    id: "psicologia", name: "Psicología", short: "Psicología", icon: "i-heart", color: "green", online: true,
    desc: "Un espacio seguro para acompañar el desarrollo emocional de tu hijo y orientar a la familia en el día a día.",
    image: "psicologia", alt: "Niña conversando con una terapeuta",
  },
  {
    id: "ocupacional", name: "Terapia Ocupacional", short: "Ocupacional", icon: "i-puzzle", color: "teal", online: false,
    desc: "Trabajamos a través del juego para que tu peque gane autonomía en las actividades de su día a día.",
    image: "ocupacional", alt: "Terapeuta jugando con un niño con juguetes de colores",
  },
  {
    id: "fisica", name: "Terapia Física", short: "Física", icon: "i-run", color: "yellow", online: false,
    desc: "Acompañamos el desarrollo del movimiento de tu hijo con actividades guiadas y adaptadas a su edad.",
    image: "fisica", alt: "Terapeuta acompañando a un niño en un caballito de madera",
  },
];

// ---------- Cómo trabajamos ----------
export const STEPS = [
  { title: "Nos escribes", text: "Por WhatsApp nos cuentas sobre tu peque y resolvemos tus dudas.", color: "teal" },
  { title: "Evaluación", text: "Conocemos a tu hijo y evaluamos sus necesidades en la especialidad indicada.", color: "orange" },
  { title: "Plan de terapia", text: "Definimos objetivos y la modalidad que mejor se adapta a tu familia: presencial u online.", color: "pink" },
  { title: "Feedback en cada sesión", text: "Al terminar cada sesión te contamos cómo le fue y te dejamos recomendaciones para casa.", color: "green" },
] as const;

// ---------- Cifras (todas verificables en redes) ----------
export const STATS = [
  { value: `+${new Date().getFullYear() - SITE.foundingYear}`, label: "años de experiencia", color: "teal" },
  { value: String(SERVICES.length), label: "especialidades", color: "orange" },
  { value: "100%", label: "recomendado en Facebook", color: "pink" },
  { value: "2", label: "modalidades de atención", color: "green" },
] as const;

// ---------- Equipo ----------
// Reemplazar con datos reales. `photo` es opcional (archivo en src/assets/img).
export const TEAM: { name: string; role: string; color: Color; photo?: string }[] = [
  { name: "Nombre de la terapeuta", role: "Terapia de Lenguaje", color: "pink" },
  { name: "Nombre de la terapeuta", role: "Terapia de Aprendizaje", color: "orange" },
  { name: "Nombre de la terapeuta", role: "Psicología", color: "green" },
  { name: "Nombre de la terapeuta", role: "Terapia Ocupacional y Física", color: "teal" },
];
export const TEAM_IS_PLACEHOLDER = true;

// ---------- Consejos para padres ----------
export const TIPS = [
  {
    tag: "Tip de lenguaje", color: "pink", image: "padres-1", alt: "Niña jugando con un rompecabezas de letras",
    title: "Juega y conversa con tu peque cada día",
    text: "Describir lo que hacen juntos mientras juegan es una forma natural de enriquecer su vocabulario.",
  },
  {
    tag: "Tip de aprendizaje", color: "orange", image: "padres-3", alt: "Mamá e hijo haciendo tareas juntos",
    title: "Rutinas cortas y constantes para las tareas",
    text: "Un espacio tranquilo y un horario fijo ayudan a tu hijo a concentrarse mejor.",
  },
] as const;

// ---------- Preguntas frecuentes (también se publican como datos estructurados) ----------
export const FAQ = [
  {
    q: "¿Cómo agendo una evaluación?",
    a: `Escríbenos por WhatsApp al ${CONTACT.phoneDisplay} contándonos sobre tu peque. Te orientamos sobre la especialidad indicada y coordinamos la fecha y hora.`,
  },
  {
    q: "¿Qué terapias puedo llevar online?",
    a: "Brindamos consultas, evaluaciones y terapias online en Terapia de Lenguaje, Terapia de Aprendizaje y Psicología.",
  },
  {
    q: "¿Me contarán cómo avanza mi hijo?",
    a: "Sí. Después de cada sesión te damos feedback y recomendaciones para que puedas seguir trabajando en casa.",
  },
  {
    q: "¿Qué horarios tienen?",
    a: "Tenemos horarios disponibles en turno mañana y tarde. Escríbenos para revisar la disponibilidad.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Nuestro centro está en Santiago de Surco, Lima. Al agendar te compartimos la dirección exacta.",
  },
];

export const NAV = [
  { href: "#terapias", label: "Terapias" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#padres", label: "Para padres" },
  { href: "#contacto", label: "Contacto" },
];
