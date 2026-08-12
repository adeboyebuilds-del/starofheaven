import Image, { StaticImageData } from "next/image";

// You might want to rename this to CustomImage or AppImage!
type ImagePlaceholderProps = {
  src: string | StaticImageData;
  description: string;
  aspect?: string;
  className?: string;
  priority?: boolean; // Added in case you render this above the fold
};

export default function ImagePlaceholder({
  src,
  description,
  aspect = "aspect-[4/5]",
  className = "",
  priority = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-sm bg-navy-900 ${aspect} ${className}`}
    >
      <Image
        src={src}
        alt={description}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}