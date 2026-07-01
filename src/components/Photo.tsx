import Image from 'next/image';

/** aspect-ratio 컨테이너 안에서 cover로 채우는 next/image 래퍼 (CLS 0) */
export default function Photo({
  src,
  alt,
  ratio = '4 / 3',
  radius = 14,
  sizes = '(max-width: 760px) 50vw, 280px',
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  radius?: number;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: ratio,
        borderRadius: radius,
        overflow: 'hidden',
        background: '#11131d',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
