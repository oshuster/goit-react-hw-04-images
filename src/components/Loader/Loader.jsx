import { createPortal } from 'react-dom';
import { RotatingLines } from 'react-loader-spinner';

import style from './loader.module.css';

const modalRoot = document.getElementById('modal-root');

export const Loader = () => {
  return createPortal(
    <div className={style.overlay}>
      <div className={style.modal}>
        <RotatingLines />
      </div>
    </div>,
    modalRoot
  );
};
