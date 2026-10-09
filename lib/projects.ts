export type ProjectCategory = "ui-ux" | "mobile" | "website";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: number;
  summary: string;
  description: string;
  tagline?: string;
  builtItems?: string[];
  challenge?: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  techStack?: string[];
  coverType: "image" | "video";
  coverSrc: string;
  gallery: { type: "image" | "video"; src: string; caption?: string }[];
  collaborative?: boolean;
}

export const projects: Project[] = [
  {
    slug: "restopro-restaurant-system",
    title: "RestoPro — Gestión de Restaurante (Local-First)",
    category: "website",
    year: 2026,
    summary:
      "Sistema de punto de venta y gestión de restaurante diseñado con enfoque Local-First para operar sin depender de internet continuo.",
    description:
      "RestoPro es una solución integral para el control operativo de restaurantes, gestión de órdenes en mesas, comandas de cocina y facturación. Diseñado bajo la arquitectura Local-First, asegura alta disponibilidad, respuesta inmediata y sincronización diferida para evitar interrupciones en horas pico de servicio.",
    tagline:
      "Arquitectura Local-First para facturación y control de pedidos en restaurantes.",
    builtItems: [
      "Implementación de arquitectura Local-First con persistencia en cliente y sincronización asíncrona",
      "Control de flujo de órdenes: mesas, comanda digital de cocina y facturación en tiempo real",
      "Interfaz táctil de rápida respuesta pensada para personal de servicio y cocina",
    ],
    challenge:
      "Diseñar la tolerancia a fallos de red para que el restaurante nunca detenga su operación durante cortes de conexión, manteniendo la integridad de las cuentas y órdenes concurrentes.",
    tags: ["TypeScript", "Local-First", "Node.js", "SQL", "Full Stack"],
    techStack: ["TypeScript", "Node.js", "SQL", "Local-First"],
    repoUrl: "https://github.com/Masterkey-DEV/restaurante",
    collaborative: true,
    coverType: "image",
    coverSrc: "/work/vanlife/landing-page.png",
    gallery: [
      { type: "image", src: "/work/vanlife/landing-page.png", caption: "Panel de Gestión y Órdenes" },
      { type: "image", src: "/work/vanlife/available-cars.png", caption: "Módulo de Mesas y Facturación" },
    ],
  },
  {
    slug: "antorcha-y-carbon",
    title: "Antorcha y Carbón — Sitio Web Comercial",
    category: "website",
    year: 2026,
    summary:
      "Plataforma web gastronómica moderna con catálogo interactivo, diseño responsivo y despliegue continuo en Vercel.",
    description:
      "Sitio web corporativo y de presencia digital para el negocio gastronómico 'Antorcha y Carbón'. Desarrollado con Next.js y Tailwind CSS, enfocado en rendimiento de carga, optimización SEO, adaptabilidad para dispositivos móviles y navegación ágil en el menú.",
    tagline:
      "Presencia digital y menú gastronómico interactivo de alto rendimiento.",
    builtItems: [
      "Desarrollo frontend responsivo con Next.js, React, TypeScript y Tailwind CSS",
      "Optimización de assets gráficos y puntuaciones altas en Core Web Vitals",
      "Integración de flujo CI/CD y despliegue continuo en producción con Vercel",
    ],
    challenge:
      "Optimizar la carga y renderizado de imágenes en alta resolución del menú para mantener tiempos de respuesta inferiores a un segundo en conexiones móviles.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/yoverth",
    liveUrl: "https://antorcha-y-carbon.vercel.app",
    collaborative: false,
    coverType: "image",
    coverSrc: "/work/sticky-wall/dashboard.png",
    gallery: [
      { type: "image", src: "/work/sticky-wall/dashboard.png", caption: "Landing Page y Menú Gastronómico" },
      { type: "image", src: "/work/sticky-wall/completed.png", caption: "Vista Móvil Adaptativa" },
    ],
  },
  {
    slug: "gestion-cafetera-app",
    title: "AgroCafé — Control Agrícola Offline",
    category: "mobile",
    year: 2026,
    summary:
      "Aplicación móvil en React Native y Expo pensada para pequeños caficultores con persistencia local y trabajo en campo.",
    description:
      "Herramienta móvil enfocada en el registro de cosechas, cálculo de jornales y control administrativo para productores agrícolas. Opera de forma 100% offline en zonas rurales sin cobertura móvil, facilitando la sincronización posterior.",
    tagline:
      "Gestión operativa y contable en campo sin dependencia de internet.",
    builtItems: [
      "Desarrollo de interfaz móvil con componentes nativos de React Native y Expo",
      "Persistencia de estado en dispositivo y lógica de cálculo contable por pesaje y jornal",
      "Diseño de alto contraste y ergonomía para trabajo al aire libre",
    ],
    challenge:
      "Garantizar consistencia de datos contables y pesajes diarios sin acceso a un servidor remoto constante.",
    tags: ["React Native", "Expo", "TypeScript", "Mobile UI", "Offline-First"],
    techStack: ["React Native", "Expo", "TypeScript", "Mobile UI"],
    repoUrl: "https://github.com/yoverth",
    collaborative: false,
    coverType: "image",
    coverSrc: "/work/timberfy/homepage.jpg",
    gallery: [
      { type: "image", src: "/work/timberfy/homepage.jpg", caption: "Registro de Jornales" },
      { type: "image", src: "/work/timberfy/shoe-details.jpg", caption: "Resumen Contable" },
    ],
  },
  {
    slug: "enterprise-network-infrastructure",
    title: "Infraestructura WAN/LAN Multi-Router",
    category: "website",
    year: 2026,
    summary:
      "Simulación de topología corporativa con direccionamiento VLSM, switches, routers de borde y enlaces seriales.",
    description:
      "Diseño e implementación de arquitectura de red empresarial en Cisco Packet Tracer. Incluye segmentación de subredes con máscaras de longitud variable, configuración de interfaces seriales e interfaces FastEthernet/Gigabit, enrutamiento dinámico/estático y verificación de flujo de paquetes.",
    tagline:
      "Topología de redes corporativas, direccionamiento VLSM y resolución de enlaces IP.",
    builtItems: [
      "Configuración de interfaces seriales WAN y FastEthernet LAN en enrutadores",
      "Diseño y cálculo de subredes IPv4 eficientes con VLSM",
      "Diagnóstico de conectividad con tablas de enrutamiento y análisis ICMP",
    ],
    challenge:
      "Diagnosticar y resolver errores de enrutamiento y máscaras incongruentes que aislaban segmentos LAN en saltos remotos.",
    tags: ["Cisco Packet Tracer", "TCP/IP", "VLSM", "Ethernet", "Networking"],
    techStack: ["Cisco Packet Tracer", "TCP/IP", "Networking"],
    repoUrl: "https://github.com/yoverth",
    collaborative: true,
    coverType: "image",
    coverSrc: "/work/smart-road-safety/all-screens.jpeg",
    gallery: [
      { type: "image", src: "/work/smart-road-safety/all-screens.jpeg", caption: "Topología en Packet Tracer" },
    ],
  },
];

export const collaborativeProjects = projects.filter(
  (project) => project.collaborative
);