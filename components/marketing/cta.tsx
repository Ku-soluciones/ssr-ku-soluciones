import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Listo para comenzar tu proyecto?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Conversemos sobre cómo podemos ayudarte a hacer realidad tus ideas digitales
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Solicitar Cotización
          </Link>
          <Link
            href="/servicios"
            className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Conocer Servicios
          </Link>
        </div>
      </div>
    </section>
  )
}