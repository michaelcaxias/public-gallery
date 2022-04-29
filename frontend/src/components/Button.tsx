import React from 'react';

type ButtonProps = {
  children: React.ReactNode,
  type: 'button' | 'submit' | 'reset',
  className: string,
}

export default function Button({ children, type, className = '' }: ButtonProps) {
  return (
    <button
      type={type}
      className={`w-auto rounded-lg shadow-xl font-medium px-4 py-2 ${className}`}
    >
      {children}

    </button>
  );
}

// bg-gray-500 hover:bg-gray-700 text-white
