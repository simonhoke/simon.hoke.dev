// ToolImage.tsx
import cn from 'classnames';
import { urlForImage } from 'lib/sanity.image';

interface ToolImageProps {
  name: string;
  image: any;
}

export default function ToolImage(props: ToolImageProps) {
  const { name, image: source } = props;

  const imageUrl = source?.asset?._ref
    ? urlForImage(source).height(100).width(100).url()
    : 'https://via.placeholder.com/100'; // Provide a placeholder URL if the image is not available

  return (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': name,
      })}
    >
      <img className="w-20 h-20 object-cover" src={imageUrl} alt={name} />
    </div>
  );
}
