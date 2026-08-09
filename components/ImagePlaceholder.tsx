type ImagePlaceholderProps = {
  description: string;
  aspect?: string;
  className?: string;
};

/**
 * Stand-in for a real photo. Drop in a Next.js <Image> once real
 * photography is available — the `description` text documents exactly
 * what should be shot/sourced for this slot.
 */
export default function ImagePlaceholder({
  description,
  aspect = "aspect-[4/5]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={description}
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-sm border border-gold-500/30 bg-navy-900 ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,162,39,0.18)_0%,rgba(10,23,48,0)_55%)]" />
      <div className="absolute inset-3 rounded-sm border border-dashed border-gold-400/40" />
      <p className="relative mx-8 text-center font-body text-xs leading-relaxed tracking-wide text-gold-200">
        {description}
      </p>
    </div>
  );
}
