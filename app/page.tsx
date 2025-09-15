export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Transformamos Ideas en
            <span className="block text-pomegranate-500">
              Soluciones Digitales
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Especialistas en desarrollo web, aplicaciones móviles y soluciones tecnológicas innovadoras.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto" 
              className="bg-pomegranate-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pomegranate-600 transition-colors"
            >
              Solicitar Cotización
            </a>
            <a 
              href="/servicios" 
              className="border border-pomegranate-500 text-pomegranate-500 px-8 py-3 rounded-lg font-semibold hover:bg-pomegranate-50 transition-colors"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Soluciones tecnológicas para impulsar tu negocio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Desarrollo Web
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sitios web modernos, rápidos y optimizados para tu negocio.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Aplicaciones Móviles
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Apps nativas y multiplataforma para iOS y Android.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Consultoría Tecnológica
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Asesoramiento experto para optimizar tus procesos digitales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
          </p>
          <a 
            href="/contacto" 
            className="bg-pomegranate-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pomegranate-600 transition-colors inline-block"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  )
}