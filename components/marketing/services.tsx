import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Shield, 
  Database, 
  Palette,
  TrendingUp,
  Users,
  CheckCircle
} from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Desarrollo Web",
      description: "Creamos sitios web y aplicaciones web modernas, responsivas y optimizadas para SEO",
      features: ["React/Next.js", "WordPress", "E-commerce", "PWA"],
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Desarrollo de apps nativas y multiplataforma para iOS y Android",
      features: ["React Native", "Flutter", "Apps Nativas", "UI/UX Design"],
      color: "purple"
    },
    {
      icon: Cloud,
      title: "Soluciones Cloud",
      description: "Migración, implementación y gestión de infraestructura en la nube",
      features: ["AWS", "Google Cloud", "Azure", "DevOps"],
      color: "cyan"
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "Protegemos tu negocio con soluciones de seguridad integral",
      features: ["Auditorías", "Pentesting", "Compliance", "Monitoreo 24/7"],
      color: "green"
    },
    {
      icon: Database,
      title: "Big Data & Analytics",
      description: "Transformamos datos en insights accionables para tu negocio",
      features: ["BI", "Machine Learning", "Data Mining", "Dashboards"],
      color: "orange"
    },
    {
      icon: Palette,
      title: "Diseño UX/UI",
      description: "Diseños intuitivos y atractivos que mejoran la experiencia del usuario",
      features: ["Research", "Wireframes", "Prototipos", "Design Systems"],
      color: "pink"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string }> = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", hover: "hover:bg-blue-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", hover: "hover:bg-purple-200" },
      cyan: { bg: "bg-cyan-100", text: "text-cyan-600", hover: "hover:bg-cyan-200" },
      green: { bg: "bg-green-100", text: "text-green-600", hover: "hover:bg-green-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", hover: "hover:bg-orange-200" },
      pink: { bg: "bg-pink-100", text: "text-pink-600", hover: "hover:bg-pink-200" }
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-ku-600 tracking-wide uppercase">
            Servicios
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Soluciones Tecnológicas Integrales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos un amplio portafolio de servicios tecnológicos para impulsar 
            la transformación digital de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color)
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1"
              >
                <div className={`${colors.bg} ${colors.hover} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors`}>
                  <service.icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className={`w-4 h-4 ${colors.text} mr-2 flex-shrink-0`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-gradient-to-r from-ku-600 to-ku-700 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                ¿Necesitas una solución personalizada?
              </h3>
              <p className="text-lg text-ku-100 mb-6">
                Nuestro equipo de expertos está listo para ayudarte a encontrar 
                la solución tecnológica perfecta para tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contacto" 
                  className="inline-flex items-center justify-center bg-white text-ku-600 px-6 py-3 rounded-lg font-semibold hover:bg-ku-50 transition-colors"
                >
                  Solicitar Consultoría
                </a>
                <a 
                  href="/servicios" 
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Ver Todos los Servicios
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <TrendingUp className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-blue-100">Satisfacción del cliente</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Soporte técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}