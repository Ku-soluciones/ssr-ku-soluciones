import Link from "next/link"
import Image from "next/image"

export function Portfolio() {
  const projects = [
    {
      title: "E-commerce Premium",
      description: "Plataforma de comercio electrónico con funcionalidades avanzadas",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Next.js", "Stripe", "Tailwind"],
    },
    {
      title: "Dashboard Analytics",
      description: "Sistema de análisis y reportes en tiempo real",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "D3.js", "Node.js"],
    },
    {
      title: "App Móvil Fitness",
      description: "Aplicación de seguimiento de ejercicios y nutrición",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Redux"],
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algunos de nuestros trabajos más recientes que demuestran nuestra experiencia y calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portafolio"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Ver Más Proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}