import Input from './components/Input';
import ImageUploader from './components/ImageUploader';
import Button from './components/Button';

export default function Form() {
  return (
    <div className="flex h-screen bg-gray-200 items-center justify-center">
      <div className="grid bg-white rounded-lg py-5 shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <h1 className="text-gray-600 font-bold md:text-2xl text-xl text-center">Public Gallery</h1>
        <Input title="Título da Imagem" id="title" />
        <Input title="Seu nome" id="name" />
        <ImageUploader />
        <div className="flex items-center justify-center  md:gap-4 gap-2 pt-5 pb-5">
          <Button type="button" className="bg-gray-500 hover:bg-gray-700 text-white">Cancelar</Button>
          <Button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white">Publicar</Button>
        </div>
      </div>
    </div>
  );
}
