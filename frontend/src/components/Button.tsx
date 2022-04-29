export default function Button({ children, type, styles }) {
  return (
    <button
      type={type}
      className={`w-auto rounded-lg shadow-xl font-medium px-4 py-2 ${styles}`}
    >
      {children}

    </button>
  );
}

// bg-gray-500 hover:bg-gray-700 text-white
