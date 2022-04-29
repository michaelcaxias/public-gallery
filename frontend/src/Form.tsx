import React, { useRef } from 'react';
import Input from './components/Input';
import ImageUploader from './components/ImageUploader';
import Button from './components/Button';

export default function Form() {
  const imagRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (imagRef.current?.files) {
        console.log(imagRef.current.files[0]);

        const formData = new FormData();

        formData.append(
          'image',
          imagRef.current.files[0],
          imagRef.current.files[0].name,
        );

        const imageFetch = await fetch('https://api.imgur.com/3/image/', {
          method: 'POST',
          headers: {
            Authorization: 'Client-ID 6db47bd7029562d',
            Accept: 'application/json',
          },
          body: formData,
        });

        const response = await imageFetch.json();
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex h-screen bg-gray-200 items-center justify-center">
      <div className="grid bg-white rounded-lg py-5 shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <h1 className="text-gray-600 font-bold md:text-2xl text-xl text-center">Public Gallery</h1>
        <Input title="Título da Imagem" id="title" />
        <Input title="Seu nome" id="name" />
        <ImageUploader imageRef={imagRef} />
        <div className="flex items-center justify-center  md:gap-4 gap-2 pt-5 pb-5">
          <Button type="button" className="bg-gray-500 hover:bg-gray-700 text-white">Cancelar</Button>
          <Button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white">Publicar</Button>
        </div>
      </div>
    </form>
  );
}
