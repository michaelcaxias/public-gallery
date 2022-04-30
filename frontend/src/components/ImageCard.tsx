type ImageCardProps = {
  src: string,
  title: string,
  id: string,
}

export default function ImageCard({ src, title, id }: ImageCardProps) {
  return (
    <div className="flex flex-col cursor-pointer items-center bg-purple-200 py-2 rounded-lg">
      <img id={id} className="rounded shadow-xl" src={src} alt={title} draggable={false} />
      <p>{title}</p>
    </div>
  );
}
