import React from 'react';

const WIDTHS = [640, 960, 1280] as const;

type ResponsiveImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes: string;
  priority?: boolean;
};

const stemFromJpg = (src: string) => src.replace(/\.jpe?g$/i, '');

const srcSet = (stem: string, ext: 'webp' | 'avif') =>
  WIDTHS.map((width) => `${stem}-${width}.${ext} ${width}w`).join(', ');

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  priority = false,
}) => {
  const stem = stemFromJpg(src);

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet(stem, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(stem, 'webp')} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </picture>
  );
};
