import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import ImageUploader from '../components/ImageUploader';
import Button from '../components/Button';

export default function Form() {
  const titleRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imagRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const [file] = imagRef.current?.files || [];
      const formData = new FormData();

      formData.append(
        'image',
        file,
        file.name,
      );

      const imageFetch = await fetch('https://api.imgur.com/3/image/', {
        method: 'POST',
        headers: {
          Authorization: 'Client-ID 7bc9ce1239b39ad',
          Accept: 'application/json',
        },
        body: formData,
      });

      const response = await imageFetch.json();
      const imageURL = response.data.link || '';

      await fetch('http://0.0.0.0:3001/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: titleRef.current?.value,
          author: nameRef.current?.value,
          publishedDate: new Date(),
          image: imageURL,
        }),
      });

      navigate('/gallery');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-200 items-center justify-center">
      <form onSubmit={handleFormSubmit} className="grid bg-white rounded-lg py-5 shadow-xl w-11/12 md:w-9/12 lg:w-1/2 border-purple-700">
        <h1 className="text-gray-600 font-bold md:text-2xl text-xl text-center">Public Gallery</h1>
        <Input title="Título da Imagem" id="title" inputRef={titleRef} />
        <Input title="Seu nome" id="name" inputRef={nameRef} />
        <ImageUploader imageRef={imagRef} />
        <div className="flex items-center justify-center  md:gap-4 gap-2 pt-5 pb-5">
          <Button type="button" className="bg-gray-500 hover:bg-gray-700 text-white">Cancelar</Button>
          <Button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white">Publicar</Button>
        </div>
      </form>
    </div>
  );
}
