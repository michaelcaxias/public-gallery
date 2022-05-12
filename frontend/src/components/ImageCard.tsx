import moment from 'moment';
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
      onKeyUp={(event) => event.key === 'Enter' && openModal()}
      role="button"
      tabIndex={0}
      className="border rounded shadow-sm min-w-[15rem]"
    >
      <img className="rounded" alt={title} src={src} />
      <div className="px-4 py-4">
        <p className="font-semibold leading-tight text-gray-800 hover:text-gray-800 text-ellipsis overflow-hidden">
          {title}
        </p>
        <hr className="border-gray-200 border-bottom-none my-1" />
        <div className="flex text-gray-700 text-sm flex-col">
          <div>
            Publicado por
            <span className="text-red-400 text-ellipsis overflow-hidden">{` ${author}`}</span>
          </div>
          <span className="self-end text-[0.9em] opacity-70">{moment(publishedDate).format('MMM Do YY')}</span>
        </div>
      </div>
    </div>
  );
}
