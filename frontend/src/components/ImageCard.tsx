type ImageCardProps = {
  src: string,
  alt: string,
  id: string,
}

export default function ImageCard({ src, alt, id }: ImageCardProps) {
  return (
    <div className="cursor-pointer inline-block">
      <img id={id} className="rounded shadow-xl" src={src} alt={alt} draggable={false} />
    </div>
  );
}
