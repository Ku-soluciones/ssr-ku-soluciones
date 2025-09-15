import Link from "next/link"
import { ArrowRight, Code2, Smartphone, Cloud, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-ku-800 to-slate-900 py-24 sm:py-32">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-ku-500/20 to-ku-600/20 animate-pulse"></div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-ku-500/10 px-6 py-2 text-sm font-medium text-ku-200 ring-1 ring-inset ring-ku-500/20">
            <Shield className="mr-2 h-4 w-4" />
            KU Soluciones - Desarrollo Web y Tecnología Moderna
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Transformamos Ideas en
            <span className="block bg-gradient-to-r from-ku-300 to-ku-200 bg-clip-text text-transparent">
              Soluciones Digitales
            </span>
          </h1>
          
          <p className="mt-8 text-lg leading-8 text-gray-300 sm:text-xl max-w-3xl mx-auto">
            Especialistas en desarrollo web, aplicaciones móviles y soluciones cloud. 
            Impulsamos la transformación digital de tu empresa con tecnología de vanguardia 
            y un equipo experto comprometido con tu éxito.
          </p>
          
          {/* Features */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-white/80">
              <Code2 className="h-8 w-8 mb-2 text-ku-300" />
              <span className="text-sm">Desarrollo Web</span>
            </div>
            <div className="flex flex-col items-center text-white/80">
              <Smartphone className="h-8 w-8 mb-2 text-ku-300" />
              <span className="text-sm">Apps Móviles</span>
            </div>
            <div className="flex flex-col items-center text-white/80">
              <Cloud className="h-8 w-8 mb-2 text-ku-300" />
              <span className="text-sm">Soluciones Cloud</span>
            </div>
            <div className="flex flex-col items-center text-white/80">
              <Shield className="h-8 w-8 mb-2 text-ku-300" />
              <span className="text-sm">Ciberseguridad</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-ku-500 to-ku-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Solicitar Cotización Gratuita
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/servicios" 
              className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white ring-1 ring-white/20 transition-all duration-200 hover:bg-white/20 hover:ring-white/30"
            >
              Explorar Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">10+</span>
              <span>Años de experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">100+</span>
              <span>Proyectos completados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">50+</span>
              <span>Clientes satisfechos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}