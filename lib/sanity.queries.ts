import { groq } from 'next-sanity'

const tagFields = groq`
  _id,
  name,
  tags
`

const toolFields = groq`
  _id,
  name,
  picture,
`

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const toolQuery = groq`
*[_type == "tool"] | order(name desc) {
  ${toolFields}
}`

export const relevantTagQuery = groq`
*[_type == "tag" && name == $query] | order(name desc) {
  ${tagFields}
}`

export const relevantToolQuery = groq`
*[_type == "tool" && tags match $queryTags] | order(name desc) {
  ${toolFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Tag {
  name: string
  tags: string[]
}

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  _updatedAt?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface Tool {
  _id: string
  name?: string
  picture?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
