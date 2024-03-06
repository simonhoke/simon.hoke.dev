import SquareCoverImage from 'components/SquareCoverImage'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function SquarePostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <SquareCoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug text-balance">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      {excerpt && (
        <p className="mb-4 text-lg leading-relaxed text-pretty">{excerpt}</p>
      )}
    </div>
  )
}
