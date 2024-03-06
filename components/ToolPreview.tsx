import ToolImage from 'components/ToolImage'
import type { Tool } from 'lib/sanity.queries'

export default function ToolPreview({
  name,
  picture,
}: Omit<Tool, '_id'>) {
  return (
    <div>
      <div className="">
        <ToolImage
          name={name}
          image={picture}
        />
      </div>
      <h3 className="text:xl md:text-2xl leading-snug text-balance">
          {name}
      </h3>
    </div>
  )
}
