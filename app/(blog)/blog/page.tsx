import { getAllPosts } from "@/lib/mdx"
import { generateSEO } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"

export const metadata = generateSEO({
  title: "Blog",
  description: "Artículos sobre desarrollo web, tecnología y mejores prácticas en programación.",
  url: "/blog"
})

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Blog
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Artículos sobre desarrollo web, tecnología y mejores prácticas
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              Próximamente publicaremos artículos interesantes sobre desarrollo web y tecnología.
            </p>
            <p className="text-gray-500">
              Mantente atento a nuestras actualizaciones.
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  {post.image && (
                    <div className="md:w-1/3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('es-CL', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <h2 className="text-2xl font-semibold mb-3">
                      <Link
                        href={post.url}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.description}
                    </p>
                    <Link
                      href={post.url}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Leer más →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}