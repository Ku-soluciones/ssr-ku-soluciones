import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    author: {
      type: 'string',
      default: 'KU Soluciones',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => {
        const parts = post._raw.flattenedPath.split('/')
        return parts[parts.length - 1]
      },
    },
    year: {
      type: 'string',
      resolve: (post) => {
        const parts = post._raw.flattenedPath.split('/')
        return parts[1]
      },
    },
    url: {
      type: 'string',
      resolve: (post) => {
        const parts = post._raw.flattenedPath.split('/')
        const year = parts[1]
        const slug = parts[parts.length - 1]
        return `/blog/${year}/${slug}`
      },
    },
  },
}))

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (page) => page._raw.flattenedPath.replace('pages/', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post, Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node: { children: Array<{ type: string; value: string }> }) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node: { properties: { className: string[] } }) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node: { properties: { className: string[] } }) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})