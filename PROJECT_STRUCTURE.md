# Estructura del Proyecto KU Soluciones

## Directorios Principales

```
ssr-ku-soluciones/
├── app/                    # App Router de Next.js 15
│   ├── (blog)/            # Grupo de rutas para blog
│   │   └── blog/          # Página del blog
│   ├── (marketing)/       # Grupo de rutas para marketing
│   │   ├── contacto/      # Página de contacto
│   │   └── servicios/     # Página de servicios
│   ├── api/               # API Routes
│   │   ├── auth/          # Endpoints de autenticación
│   │   ├── contact/       # Endpoint de contacto
│   │   ├── newsletter/    # Endpoint de newsletter
│   │   └── revalidate/    # Endpoint de revalidación
│   ├── auth/              # Páginas de autenticación
│   ├── blog/              # Blog con rutas dinámicas
│   │   ├── tag/           # Filtro por tags
│   │   └── year/          # Filtro por año
│   ├── dashboard/         # Dashboard administrativo
│   │   ├── clientes/      # Gestión de clientes
│   │   ├── contenido/     # Gestión de contenido
│   │   └── proyectos/     # Gestión de proyectos
│   ├── legal/             # Páginas legales
│   ├── marketing/         # Páginas de marketing adicionales
│   ├── favicon.ico        # Favicon
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── robots.ts          # Configuración de robots.txt
│   └── sitemap.ts         # Generación de sitemap
│
├── components/            # Componentes React
│   └── marketing/         # Componentes de marketing
│       ├── cta.tsx        # Call to Action
│       ├── footer.tsx     # Footer
│       ├── header.tsx     # Header
│       ├── hero.tsx       # Hero section
│       ├── portfolio.tsx  # Portfolio
│       └── services.tsx   # Servicios
│
├── content/               # Contenido MDX
│   ├── blog/              # Posts del blog
│   │   └── 2025/          # Posts por año
│   └── pages/             # Páginas en MDX
│
├── lib/                   # Utilidades y librerías
│   ├── mdx.ts             # Configuración MDX
│   ├── seo.ts             # Utilidades SEO
│   └── utils.ts           # Utilidades generales
│
├── prisma/                # Esquema de base de datos
├── providers/             # Context providers
├── public/                # Archivos estáticos
├── scripts/               # Scripts de utilidad
├── styles/                # Estilos adicionales
├── tests/                 # Tests
├── e2e/                   # Tests end-to-end
│
├── .gitignore             # Archivos ignorados por git
├── components.json        # Configuración de componentes UI
├── contentlayer.config.ts # Configuración de Contentlayer
├── eslint.config.mjs      # Configuración de ESLint
├── middleware.ts          # Middleware de Next.js
├── next-env.d.ts          # Tipos de Next.js
├── next.config.ts         # Configuración de Next.js
├── package.json           # Dependencias del proyecto
├── postcss.config.mjs     # Configuración de PostCSS
├── README.md              # Documentación del proyecto
└── tsconfig.json          # Configuración de TypeScript
```

## Archivos Ignorados

Los siguientes directorios/archivos están en `.gitignore`:

- `/node_modules` - Dependencias de npm
- `/.next` - Build de Next.js
- `/.git` - Repositorio git
- `/.idea` - Configuración de IDE
- `.DS_Store` - Archivos del sistema macOS
- `.env*.local` - Variables de entorno locales
- `*.tsbuildinfo` - Cache de TypeScript
- `.contentlayer` - Cache de Contentlayer

## Scripts Disponibles

```json
{
  "dev": "next dev --turbopack",
  "build": "next build --turbopack",
  "start": "next start",
  "lint": "eslint"
}
```

## Tecnologías Utilizadas

- **Next.js 15.5.3** - Framework React con App Router
- **React 19.1.0** - Biblioteca UI
- **TypeScript 5** - Tipado estático
- **Tailwind CSS 4** - Framework CSS
- **Contentlayer 2** - Gestión de contenido MDX
- **Lucide React** - Iconos
- **Radix UI** - Componentes UI accesibles

## Estado del Proyecto

✅ Estructura configurada correctamente
✅ TypeScript configurado
✅ ESLint sin errores
✅ Build exitoso
✅ Optimización de imágenes con Next/Image
✅ `.gitignore` configurado correctamente