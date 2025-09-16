import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios",
  description: "Descubre nuestros servicios de desarrollo web, aplicaciones móviles y software personalizado.",
}

export default function ServiciosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Nuestros Servicios
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Soluciones digitales completas para impulsar tu negocio
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Desarrollo Web</h2>
            <p className="text-gray-600 mb-4">
              Sitios web modernos, rápidos y optimizados para SEO.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Sitios web corporativos</li>
              <li>Tiendas online</li>
              <li>Landing pages</li>
              <li>Aplicaciones web</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Software Personalizado</h2>
            <p className="text-gray-600 mb-4">
              Sistemas a medida que se adaptan a tus necesidades específicas.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Sistemas de gestión</li>
              <li>CRM personalizado</li>
              <li>Automatización de procesos</li>
              <li>Integraciones API</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}