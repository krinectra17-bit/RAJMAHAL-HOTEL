import React from 'react';

interface PictureProps {
  folder: 'hotel' | 'attractions';
  baseName: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export const Picture: React.FC<PictureProps> = ({
  folder,
  baseName,
  alt,
  className,
  loading = 'lazy',
  fetchPriority,
  width,
  height,
  style,
}) => {
  const prefix = `/images/${folder}/${baseName}`;
  return (
    <picture>
      <source srcSet={`${prefix}.avif`} type="image/avif" />
      <source srcSet={`${prefix}.webp`} type="image/webp" />
      <img
        src={`${prefix}.jpg`}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        style={style}
        {...(fetchPriority ? { fetchPriority } : {})}
      />
    </picture>
  );
};
