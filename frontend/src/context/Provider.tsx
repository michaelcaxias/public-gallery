/* eslint-disable no-unused-vars */
import React, { createContext, useState, useMemo } from 'react';

type FormContextProps = {
  children: React.ReactNode,
}

export type TContext = {
  image: string,
  setImage: (image: string) => void,
}

export const FormContext = createContext({} as TContext);

export function Provider({ children }: FormContextProps) {
  const [image, setImage] = useState('');

  const context = useMemo(() => ({
    image,
    setImage,
  }), [image]);

  return (
    <FormContext.Provider value={context}>
      {children}
    </FormContext.Provider>
  );
}
