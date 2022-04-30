import { useEffect, useState } from 'react';
import ImageCard from '../components/ImageCard';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch('http://0.0.0.0:3001/images');
      const json = await response.json();
      setImages(json);
    };
    getImages();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-200 items-center justify-center p-3 gap-4">
      <h1 className="text-gray-600 font-bold md:text-2xl text-xl text-center">Gallery</h1>
      <div className="grid grid-cols-[repeat(8,_1fr)] grid-rows-[repeat(8,_5vw)] gap-2 bg-white rounded-lg py-5 px-3 shadow-xl h-full w-full overflow-y-auto">
        {images && images.map((data) => (<ImageCard id={data._id} src={data.image} alt={data.title} />))}
      </div>
    </div>
  );
}
