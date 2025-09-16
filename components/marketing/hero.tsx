import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Desarrollamos{" "}
            <span className="text-blue-600">soluciones digitales</span>{" "}
            que impulsan tu negocio
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Somos una agencia especializada en desarrollo web y software personalizado. 
            Creamos experiencias digitales excepcionales que convierten visitantes en clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Comenzar Proyecto
            </Link>
            <Link
              href="/portafolio"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Ver Portafolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}