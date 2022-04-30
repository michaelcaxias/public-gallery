type ImageCardProps = {
  src: string,
  alt: string,
  id: string,
}

export default function ImageCard({ src, alt, id }: ImageCardProps) {
  return (
    <img id={id} className="rounded max-w-xs max-h-fit" src={src} alt={alt} />
  );
}
