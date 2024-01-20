import { Component } from 'react';
import { createPortal } from 'react-dom';

import style from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.changeStateModal();
    }
  };

  render() {
    const { img, alt } = this.props.largeImg;
    const { closeModal } = this;
    return createPortal(
      <div className={style.overlay} onClick={closeModal}>
        <div className={style.modal}>
          <img src={img} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
