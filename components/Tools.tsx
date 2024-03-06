import ToolPreview from 'components/ToolPreview'
import type { Tool } from 'lib/sanity.queries'

export default function Tools({ tools }: { tools: Tool[] }) {
  return (
    <section>
      <div className="grid grid-cols-4 md:grid-cols-6">
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
