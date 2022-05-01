import { useEffect, useState, useContext } from 'react';
import StackGrid from 'react-stack-grid';
import ImageCard from '../components/ImageCard';
import Modal from '../components/Modal';
import { FormContext } from '../context/Provider';

export type ImageAPI = {
  _id: string,
  title: string,
  author: string,
  publishedDate: string,
  image: string,
}

export default function Gallery() {
  const { isOpen } = useContext(FormContext);
  const [images, setImages] = useState<ImageAPI[]>([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch('http://0.0.0.0:3001/images');
      const json = await response.json() as ImageAPI[];
      setImages(json);
    };
    getImages();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-200 items-center justify-center p-3 gap-4">
      <h1 className="text-gray-600 font-bold md:text-2xl text-xl text-center">Gallery</h1>
      <div className="bg-white rounded-lg py-5 shadow-xl h-full w-full overflow-y-auto">
        <StackGrid columnWidth={250} className="gap-2">
          {images && images.map(({
            _id: id, image, title, author, publishedDate,
          }) => (
            <ImageCard
              key={id}
              id={id}
              src={image}
              title={title}
              author={author}
              publishedDate={publishedDate}
            />
          ))}
        </StackGrid>
      </div>
      {isOpen && <Modal />}
    </div>
  );
}
