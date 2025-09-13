import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos para discutir tu próximo proyecto. Estamos aquí para ayudarte a hacer realidad tus ideas digitales.",
}

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contacto
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          ¿Tienes un proyecto en mente? Conversemos sobre cómo podemos ayudarte
        </p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
          <div className="space-y-2 text-gray-600">
            <p>📧 contacto@ku-soluciones.cl</p>
            <p>📱 +56 9 1234 5678</p>
            <p>📍 Santiago, Chile</p>
          </div>
        </div>
      </div>
    </div>
  )
}