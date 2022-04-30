export default function Gallery() {
  return (
    <div className="flex flex-col h-screen bg-gray-200 items-center justify-center p-3 gap-4">
      <h1 className="text-gray-600 font-bold md:text-2xl text-xl text-center">Gallery</h1>
      <div className="grid bg-white rounded-lg py-5 shadow-xl h-full w-full overflow-y-auto">
        Cards
      </div>
    </div>
  );
}
