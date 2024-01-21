import { createPortal } from 'react-dom';

import style from './modal.module.css';
import { useCallback, useEffect } from 'react';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ largeImg: { img, alt }, changeStateModal }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        changeStateModal();
      }
    },
    [changeStateModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);
  return createPortal(
    <div className={style.overlay} onClick={closeModal}>
      <div className={style.modal}>
        <img src={img} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
};
