import { useContext } from 'react';
import { FormContext } from '../context/Provider';

type ImageCardProps = {
  src: string,
  title: string,
  id: string,
  author: string,
  publishedDate: string,
}

export default function ImageCard({
  src, title, id, author, publishedDate,
}: ImageCardProps) {
  const { setModalData, handleOpen } = useContext(FormContext);

  const openModal = () => {
    console.log('cheguei aqui?');
    setModalData({
      _id: id,
      image: src,
      title,
      author,
      publishedDate,
    });

    handleOpen();
  };

  return (
    <div
      onClick={() => openModal()}
      role="button"
      tabIndex={0}
      className="flex flex-col cursor-pointer items-center bg-purple-200 py-2 rounded-lg"
    >
      <img id={id} className="rounded shadow-xl" src={src} alt={title} draggable={false} />
      <p>{`${title} - ${author}`}</p>
    </div>
  );
}
