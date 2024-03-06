import ToolPreview from 'components/ToolPreview'
import type { Tool } from 'lib/sanity.queries'

export default function Tools({ tools }: { tools: Tool[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">

      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {tools.map((tool) => (
          <ToolPreview
            key={tool._id}
            name={tool.name}
            picture={tool.picture}
          />
        ))}
      </div>
    </section>
  )
}
