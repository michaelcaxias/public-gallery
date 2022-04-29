import React, { createContext, useState, useMemo } from 'react';

type FormContextProps = {
  children: React.ReactNode,
}

export const FormContext = createContext({});

export function Provider({ children }: FormContextProps) {
  const [stateA, setStateA] = useState('initialStateA');

  const context = useMemo(() => ({
    stateA,
    setStateA,
  }), []);

  return (
    <FormContext.Provider value={context}>
      {children}
    </FormContext.Provider>
  );
}
