import { Code, Smartphone, Settings, Zap } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Sitios web modernos, rápidos y optimizados para SEO que convierten visitantes en clientes.",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps nativas y multiplataforma que ofrecen experiencias excepcionales en todos los dispositivos.",
    },
    {
      icon: Settings,
      title: "Software Personalizado",
      description: "Sistemas a medida que se adaptan perfectamente a los procesos únicos de tu negocio.",
    },
    {
      icon: Zap,
      title: "Automatización",
      description: "Optimizamos tus procesos con herramientas que ahorran tiempo y reducen errores humanos.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas de desarrollo digital para empresas de todos los tamaños
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}