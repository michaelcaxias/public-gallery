type ImageCardProps = {
  src: string,
  alt: string,
  id: string,
}

export default function ImageCard({ src, alt, id }: ImageCardProps) {
  return (
    <div>
      <img id={id} className="rounded" src={src} alt={alt} />
    </div>
  );
}
