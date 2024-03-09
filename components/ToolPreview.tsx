// ToolPreview.tsx
import ToolImage from 'components/ToolImage';
import type { Tool } from 'lib/sanity.queries';

interface ToolPreviewProps extends Omit<Tool, '_id'> {}

export default function ToolPreview(props: ToolPreviewProps) {
  const { name, picture } = props;

  return (
    <div className="flex flex-col items-center">
      <ToolImage name={name} image={picture} />
      <h3 className="text-lg md:text-xl leading-snug text-balance">{name}</h3>
    </div>
  );
}
