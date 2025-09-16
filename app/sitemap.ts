import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ku-soluciones.cl'
  
  const routes = [
    '',
    '/servicios',
    '/portafolio',
    '/casos',
    '/precios',
    '/equipo',
    '/contacto',
    '/blog',
    '/privacidad',
    '/terminos',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}