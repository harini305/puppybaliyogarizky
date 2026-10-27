// Plain <img> with srcset. Files are pre-sized WebP, so Next's image
// optimisation (disabled in next.config.mjs) isn't needed.
export default function Picture({ image, sizes, priority = false, className, alt, ...rest }) {
  return (
    <img
      className={className}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt ?? image.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      draggable="false"
      {...rest}
    />
  );
}
