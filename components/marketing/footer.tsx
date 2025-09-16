import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">KU Soluciones</h3>
            <p className="text-gray-400 mb-4">
              Agencia de desarrollo web y software personalizado. 
              Creamos soluciones digitales innovadoras para impulsar tu negocio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Software Personalizado
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Consultoría
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/equipo" className="text-gray-400 hover:text-white transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 KU Soluciones. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-400 hover:text-white text-sm transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}