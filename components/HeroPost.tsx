import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >,
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage link="/app" title={title} image={coverImage} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl text-balance">
            <Link href={`/app`} className="hover:underline">
              {title || 'Untitled'}
            </Link>
          </h3>
        </div>
        <div>
          {excerpt && (
            <p className="mb-4 text-lg leading-relaxed text-pretty">
              {excerpt}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
