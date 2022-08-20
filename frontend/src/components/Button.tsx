import React from 'react';

type ButtonProps = {
  children: React.ReactNode,
  type: 'button' | 'submit' | 'reset',
  className: string,
  onClick?: () => void,
  testId?: string,
}

export default function Button({
  children, type, className = '', testId,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      data-testid={testId}
      className={`w-auto rounded-lg shadow-xl font-medium px-4 py-2 ${className}`}
    >
      {children}

    </button>
  );
}

Button.defaultProps = {
  onClick: () => { },
  testId: '',
};
