type InputProps = {
  title: string,
  id: string,
}

export default function Input({ title, id }: InputProps) {
  return (
    <div className="grid grid-cols-1 mt-5 mx-7">
      <label
        htmlFor={id}
        className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
      >
        {title}
      </label>
      <input
        id={id}
        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="text"
        placeholder={title}
      />
    </div>
  );
}
