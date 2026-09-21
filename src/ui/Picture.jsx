/**
 * Responsive <picture> over the pre-built variants in /public/img.
 *
 * The originals were full-resolution PNG/JPEG screenshots — ebook.png alone
 * was 1.1 MB for a box that is never wider than ~708 CSS px. scripts/
 * optimize-images.mjs crops each one to the aspect ratio it is actually drawn
 * at and encodes AVIF / WebP / JPEG at the widths that matter; this component
 * is the markup side of that, so the browser picks the smallest file that
 * still covers the box at the visitor's pixel density.
 *
 * `name` and `widths` must match what the script emitted.
 */
const srcSetFor = (name, widths, ext) =>
  widths.map((width) => `/img/${name}-${width}.${ext} ${width}w`).join(", ");

export default function Picture({
  name,
  widths,
  sizes,
  alt,
  width,
  height,
  className = "",
  /** Set on the LCP image only: loads it eagerly instead of lazily. */
  priority = false,
}) {
  const largest = widths[widths.length - 1];

  return (
    <picture>
      <source type="image/avif" srcSet={srcSetFor(name, widths, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSetFor(name, widths, "webp")} sizes={sizes} />
      <img
        src={`/img/${name}-${largest}.jpg`}
        srcSet={srcSetFor(name, widths, "jpg")}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}
