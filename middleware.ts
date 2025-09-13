import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''
  
  // Reescribir blog.ku-soluciones.cl -> /blog
  const currentHost =
    process.env.NODE_ENV === 'production' && hostname
      ? hostname.replace('.ku-soluciones.cl', '').replace('.localhost:3000', '')
      : hostname.replace('.localhost:3000', '')

  if (currentHost === 'blog') {
    url.pathname = `/blog${url.pathname}`
    return NextResponse.rewrite(url)
  }

  // Proteger rutas del dashboard
  if (url.pathname.startsWith('/dashboard')) {
    // Aquí implementarías la lógica de autenticación
    // Por ahora, simplemente continuamos
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}