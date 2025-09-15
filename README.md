# KU Soluciones - Next.js 14+ Website

Un sitio web moderno y completo para una agencia de desarrollo web, construido con Next.js 14+, TypeScript, Tailwind CSS y las mejores prácticas de desarrollo.

## Características

- **Next.js 14+** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos modernos
- **shadcn/ui** para componentes reutilizables
- **MDX** para contenido del blog
- **SEO optimizado** con metadatos dinámicos
- **Responsive design** que funciona en todos los dispositivos
- **Arquitectura escalable** con estructura de carpetas organizada

## Estructura del Proyecto

```
ku-soluciones/
├── app/                     # App Router de Next.js
│   ├── (marketing)/         # Rutas de marketing
│   ├── (blog)/             # Rutas del blog
│   ├── (legal)/            # Páginas legales
│   └── api/                # API routes
├── components/             # Componentes reutilizables
│   ├── ui/                 # Componentes base (shadcn/ui)
│   ├── marketing/          # Componentes de marketing
│   └── common/             # Componentes comunes
├── content/                # Contenido MDX
├── lib/                    # Utilidades y helpers
├── styles/                 # Estilos CSS
└── public/                 # Archivos estáticos
```

## Instalación y Desarrollo

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env.local
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   ```

## Páginas Principales

- **Inicio** (`/`) - Landing page principal
- **Servicios** (`/servicios`) - Descripción de servicios ofrecidos
- **Portafolio** (`/portafolio`) - Casos de estudio y proyectos
- **Blog** (`/blog`) - Artículos y contenido
- **Contacto** (`/contacto`) - Formulario de contacto
- **Dashboard** (`/dashboard`) - Panel administrativo (protegido)

## Componentes Principales

### Marketing
- `Header` - Navegación principal
- `Footer` - Pie de página
- `Hero` - Sección hero de la landing
- `Services` - Sección de servicios
- `Portfolio` - Galería de proyectos
- `CTA` - Call to action

## Contenido y Blog

El blog utiliza MDX para el contenido, permitiendo:
- Markdown enriquecido con componentes React
- Metadata automática (SEO, Open Graph)
- Categorización por tags
- Generación automática de URLs

## Configuración

### SEO
- Metadatos optimizados para cada página
- Open Graph y Twitter Cards
- Sitemap.xml automático
- Robots.txt configurado

### Tailwind CSS
Configurado con:
- Tema personalizado para KU Soluciones
- Componentes de shadcn/ui
- Responsive design por defecto

## Despliegue

El proyecto está optimizado para Vercel:

1. **Conectar repositorio a Vercel**
2. **Configurar variables de entorno**
3. **Deploy automático**

Alternativamente, puedes usar cualquier plataforma que soporte Next.js.

## Próximos Pasos

1. **Configurar Contentlayer** para el manejo completo de MDX
2. **Integrar servicio de email** (Resend, SendGrid)
3. **Añadir autenticación** para el dashboard
4. **Configurar analytics** (Google Analytics, Plausible)
5. **Optimizar imágenes** con next/image

## Soporte

Para preguntas o soporte técnico, contactar a:
- Email: contacto@ku-soluciones.cl
- Sitio web: https://ku-soluciones.cl

---

Desarrollado por KU Soluciones
