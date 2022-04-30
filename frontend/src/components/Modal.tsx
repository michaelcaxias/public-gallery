import { useContext, useState } from 'react';
import { FormContext } from '../context/Provider';

export default function Modal() {
  const { handleClose, modalData } = useContext(FormContext);
  const { title, image, author} = modalData;
  const [isMaximized, maximize] = useState(false);

  return (
    <div>Modal</div>
  );
}
