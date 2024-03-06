import ToolImage from 'components/ToolImage'
import type { Tool } from 'lib/sanity.queries'

export default function ToolPreview({
  name,
  picture,
}: Omit<Tool, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <ToolImage
          name={name}
          image={picture}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug text-balance">
          {name}
      </h3>
    </div>
  )
}
