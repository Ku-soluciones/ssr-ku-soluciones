import { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
  type?: 'website' | 'article'
}

export function generateSEO({
  title,
  description = "Agencia de desarrollo web y software personalizado. Creamos soluciones digitales innovadoras para impulsar tu negocio.",
  image = "/og-image.jpg",
  url,
  keywords = ["desarrollo web", "software personalizado", "aplicaciones web", "diseño web", "Chile"],
  author = "KU Soluciones",
  publishedTime,
  modifiedTime,
  type = 'website'
}: SEOProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://ku-soluciones.cl"
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`

  return {
    title: title ? `${title} | KU Soluciones` : "KU Soluciones | Desarrollo Web y Software Personalizado",
    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    publisher: "KU Soluciones",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: title || "KU Soluciones | Desarrollo Web y Software Personalizado",
      description,
      url: fullUrl,
      siteName: "KU Soluciones",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || "KU Soluciones",
        },
      ],
      locale: "es_CL",
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: title || "KU Soluciones | Desarrollo Web y Software Personalizado",
      description,
      creator: "@kusoluciones",
      images: [fullImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export function generateBlogPostSEO(post: {
  title: string
  description: string
  slug: string
  date: string
  image?: string
  tags?: string[]
}) {
  return generateSEO({
    title: post.title,
    description: post.description,
    url: `/blog/${post.slug}`,
    image: post.image,
    keywords: post.tags,
    publishedTime: post.date,
    type: 'article'
  })
}