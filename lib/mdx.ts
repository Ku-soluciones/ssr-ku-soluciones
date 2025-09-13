// Mock data mientras se configura contentlayer
const mockPosts = [
  {
    slug: 'primer-post',
    title: 'Bienvenidos al Blog de KU Soluciones',
    description: 'Inauguramos nuestro blog con contenido de calidad sobre desarrollo web, tecnología y mejores prácticas.',
    date: '2025-01-15',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=630&fit=crop',
    tags: ['desarrollo web', 'blog', 'tecnología'],
    author: 'KU Soluciones',
    url: '/blog/2025/primer-post',
    year: '2025'
  }
]

export function getAllPosts() {
  return mockPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string) {
  return mockPosts.find(post => post.slug === slug)
}

export function getPostsByTag(tag: string) {
  return mockPosts.filter(post => 
    post.tags?.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllTags() {
  const tagCounts: Record<string, number> = {}
  
  mockPosts.forEach(post => {
    post.tags?.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

export function getRelatedPosts(currentSlug: string, tags?: string[], limit = 3) {
  if (!tags || tags.length === 0) return []
  
  return mockPosts
    .filter(post => 
      post.slug !== currentSlug && 
      post.tags?.some(tag => tags.includes(tag))
    )
    .sort((a, b) => {
      const aMatchCount = a.tags?.filter(tag => tags.includes(tag)).length || 0
      const bMatchCount = b.tags?.filter(tag => tags.includes(tag)).length || 0
      
      if (aMatchCount !== bMatchCount) {
        return bMatchCount - aMatchCount
      }
      
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, limit)
}