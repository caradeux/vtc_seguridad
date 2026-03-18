# VTC Seguridad — Sitio Web Corporativo

Sitio web oficial de **VTC Seguridad**, empresa de soluciones de seguridad con más de 30 años de experiencia en Mendoza, Argentina. Desarrollado con Next.js 16, React 19 y Tailwind CSS v4.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.1.6 | Framework principal (App Router) |
| [React](https://react.dev) | 19.2.3 | UI Library |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilos utilitarios |
| [Lucide React](https://lucide.dev) | 0.575.0 | Íconos |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | — | Utilidad de clases |

---

## Requisitos previos

- Node.js 18.17 o superior
- npm 9+

---

## Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/caradeux/vtc_seguridad.git
cd vtc_seguridad

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con hot-reload
npm run build    # Build de producción
npm run start    # Servidor de producción (requiere build previo)
npm run lint     # Análisis de código con ESLint
```

---

## Estructura del proyecto

```
vtc_seguridad/
├── public/                          # Assets estáticos
│   ├── logo_vtc_seguridad_2025_Mesa-de-trabajo-1.png
│   ├── service_cctv.png
│   ├── service_smart.png
│   ├── slide_quienes.jpg
│   ├── slide_seguridad_electronica-1.jpg
│   └── slide_seguridad_fisica.jpg
├── src/
│   ├── app/                         # Páginas (Next.js App Router)
│   │   ├── page.tsx                 # Home /
│   │   ├── layout.tsx               # Layout raíz con metadata SEO
│   │   ├── globals.css              # Estilos globales
│   │   ├── robots.ts                # Configuración robots.txt
│   │   ├── sitemap.ts               # Sitemap XML automático
│   │   ├── servicios/page.tsx       # /servicios
│   │   ├── nosotros/page.tsx        # /nosotros
│   │   ├── industrias/page.tsx      # /industrias
│   │   ├── contacto/page.tsx        # /contacto
│   │   └── blog/page.tsx            # /blog
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Navegación principal
│   │   │   └── Footer.tsx           # Pie de página
│   │   ├── sections/                # Secciones de la homepage
│   │   │   ├── Hero.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── Industries.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── SEO/
│   │   │   └── StructuredData.tsx   # JSON-LD schema markup
│   │   └── ui/
│   │       └── WhatsAppButton.tsx   # Botón flotante WhatsApp
│   └── lib/
│       └── utils.ts                 # Helper cn()
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## Páginas y rutas

| Ruta | Descripción |
|---|---|
| `/` | Homepage con Hero, Beneficios, Servicios, Industrias y Testimonios |
| `/servicios` | Detalle de los 4 servicios: Alarmas, CCTV, Seguridad Física, Smart Panic App |
| `/nosotros` | Historia de la empresa, valores y certificaciones |
| `/industrias` | Soluciones por sector: Residencial, Comercial, Industrial |
| `/contacto` | Formulario de contacto, mapa y canales de comunicación |
| `/blog` | Artículos y recursos sobre seguridad |

---

## SEO

El proyecto incluye configuración SEO completa:

- **Metadata API** de Next.js con OpenGraph y Twitter Cards
- **Structured Data** (JSON-LD) con schema `SecurityService`
- **Sitemap XML** generado automáticamente en `/sitemap.xml`
- **robots.txt** configurado en `/robots.txt`
- Idioma: `es` (español)
- URL base: `https://vtcseguridad.com`

---

## Despliegue

### Vercel (recomendado)

La forma más rápida es conectar el repositorio directamente desde [vercel.com](https://vercel.com). Vercel detecta Next.js automáticamente y no requiere configuración adicional.

### Manual

```bash
npm run build
npm run start
```

---

## Empresa

**VTC Seguridad** — Mendoza, Argentina
Más de 30 años brindando soluciones de seguridad electrónica y física.
Central de monitoreo operativa 24/7.

Servicios principales:
- Alarmas con detección por IA
- CCTV y videovigilancia
- Seguridad física
- Smart Panic App

Industrias atendidas: Residencial · Comercial · Retail · Industrial · Bodegas · Rural
