import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  autoHeight?: boolean;
}
export const Image = ({ src, alt, className, autoHeight = false }: ImageProps) => {
  return (
    <div className={className}>
      <NextImage
        src={src}
        style={{
          width: autoHeight ? '100%' : 'auto',
          height: autoHeight ? 'auto' : '100%',
          display: 'block',
        }}
        width={0}
        height={0}
        sizes="100vw"
        alt={alt}
      />
    </div>
  );
};
