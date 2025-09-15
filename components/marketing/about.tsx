import { Award, Users, Target, Lightbulb } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Award,
      title: "Excelencia",
      description: "Comprometidos con la calidad en cada proyecto que desarrollamos"
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos mano a mano con nuestros clientes para alcanzar sus objetivos"
    },
    {
      icon: Target,
      title: "Innovación",
      description: "Aplicamos las últimas tecnologías para crear soluciones vanguardistas"
    },
    {
      icon: Lightbulb,
      title: "Creatividad",
      description: "Pensamos fuera de la caja para resolver desafíos complejos"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Sobre Nosotros
            </span>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Tu Socio Tecnológico de Confianza
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              En <span className="font-semibold text-gray-900">KU Soluciones</span>, somos más que 
              desarrolladores: somos arquitectos digitales comprometidos con el éxito de tu negocio. 
              Con más de 10 años de experiencia en el mercado, hemos ayudado a cientos de empresas 
              a transformar sus ideas en realidad digital.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro equipo multidisciplinario combina expertise técnico con visión estratégica 
              para crear soluciones que no solo funcionan perfectamente, sino que también impulsan 
              el crecimiento de tu empresa.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Proyectos completados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Clientes activos</div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 p-12">
                <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">Nuestra Misión</div>
                      <p className="text-white/90 text-sm">
                        Democratizar el acceso a la tecnología de vanguardia, 
                        ayudando a empresas de todos los tamaños a competir en 
                        la era digital.
                      </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">Nuestra Visión</div>
                      <p className="text-white/90 text-sm">
                        Ser el partner tecnológico preferido en Latinoamérica, 
                        reconocidos por nuestra innovación, calidad y compromiso 
                        con el éxito de nuestros clientes.
                      </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">Certificaciones</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-white/30 rounded-full text-xs text-white">ISO 9001</span>
                        <span className="px-3 py-1 bg-white/30 rounded-full text-xs text-white">AWS Partner</span>
                        <span className="px-3 py-1 bg-white/30 rounded-full text-xs text-white">Google Cloud</span>
                        <span className="px-3 py-1 bg-white/30 rounded-full text-xs text-white">Microsoft Partner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya confían en nosotros para impulsar su crecimiento digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto" 
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Comenzar Ahora
            </a>
            <a 
              href="/portfolio" 
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Ver Casos de Éxito
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}