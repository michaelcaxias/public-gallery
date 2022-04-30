import React, { createContext, useState, useMemo } from 'react';
import { ImageAPI } from '../pages/Gallery';

type FormContextProps = {
  children: React.ReactNode,
}

export type TContext = {
  isOpen: boolean,
  handleOpen: () => void,
  handleClose: () => void,
  modalData: ImageAPI,
  setModalData: React.Dispatch<React.SetStateAction<ImageAPI>>,
}

export const FormContext = createContext({} as TContext);

export function Provider({ children }: FormContextProps) {
  const [modalData, setModalData] = useState<ImageAPI>({} as ImageAPI);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const context = useMemo(() => ({
    isOpen,
    handleOpen,
    handleClose,
    modalData,
    setModalData,
  }), []);

  return (
    <FormContext.Provider value={context}>
      {children}
    </FormContext.Provider>
  );
}
