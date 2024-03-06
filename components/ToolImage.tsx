import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface ToolImageProps {
  name: string
  image: any
}

export default function CoverImage(props: ToolImageProps) {
  const { name, image: source } = props
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': name,
      })}
    >
      <Image
        className="h-auto w-full"
        width={200}
        height={100}
        alt=""
        src={urlForImage(source).height(100).width(200).url()}
        sizes="20vw"
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {
        image
      }
    </div>
  )
}
