// Tools.tsx
import ToolPreview from 'components/ToolPreview';
import type { Tool } from 'lib/sanity.queries';

interface ToolsProps {
  tools: Tool[];
}

export default function Tools({ tools }: ToolsProps) {
  return (
    <section>
      <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
        {tools.map((tool) => (
          <ToolPreview key={tool._id} name={tool.name} picture={tool.picture} />
        ))}
      </div>
    </section>
  );
}
