import React, { useContext } from 'react';
import { FormContext } from '../context/Provider';

export default function Modal() {
  const { modalData, handleClose } = useContext(FormContext);

  const closeModal = (
    event: React.MouseEvent<HTMLDivElement,
    globalThis.MouseEvent> & { target: HTMLDivElement },
  ) => {
    if (event.target.className.includes('modal')) {
      handleClose();
    }
  };

  return (
    <div
      onClick={(event) => closeModal(
        event as React.MouseEvent<HTMLDivElement,
        globalThis.MouseEvent> & { target: HTMLDivElement },
      )}
      role="button"
      tabIndex={0}
      className="modal flex items-center justify-center absolute z-10 w-full h-full bg-purple-900/10 backdrop-blur-sm "
    >
      <img className="max-w-[90%] max-h-[90%] min-w-[20%]" src={modalData.image} alt="imgur" />
    </div>
  );
}
