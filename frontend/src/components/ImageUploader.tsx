import React, { useState } from 'react';
import { BsFillImageFill } from 'react-icons/bs';

type IimageProps = {
  imageRef: React.RefObject<HTMLInputElement>,
}

export default function ImageUploader({ imageRef }: IimageProps) {
  const [image, setImage] = useState('');

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0].name);
    }
  };

  return (
    <div className="grid grid-cols-1 mt-5 mx-7">
      <label
        htmlFor="image"
        className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1"
      >
        Envie uma imagem

      </label>
      <div className="flex items-center justify-center w-full">
        <label
          className="flex flex-col cursor-pointer border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group"
        >
          <div className="flex flex-col items-center justify-center pt-7">
            <BsFillImageFill className="w-10 h-10 text-purple-400 group-hover:text-purple-600" />
            <p
              className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider"
            >
              {image || 'Selecione uma imagem'}
            </p>
          </div>
          <input
            ref={imageRef}
            type="file"
            id="image"
            onChange={handleImage}
            className="hidden"
            accept="image/png, image/jpeg"
            required
          />
        </label>
      </div>
    </div>
  );
}
