export default function Button() {
  return (
    <div className="grid grid-cols-1 mt-5 mx-7">
      <label
        htmlFor="input1"
        className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
      >
        Input 1
      </label>
      <input
        id="input1"
        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="text"
        placeholder="Input 1"
      />
    </div>
  );
}
