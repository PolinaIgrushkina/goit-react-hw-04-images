import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from './Modal.module.css';

function Modal({largeImageURL, onCloseModal}) {

useEffect(() => { 

  const handleEscapeModalClose = event => {
    if (event.code === 'Escape') {
    onCloseModal();
    }
  };

  window.addEventListener('keydown', handleEscapeModalClose);

  return () => {
    window.removeEventListener('keydown', handleEscapeModalClose);
  };

}, [onCloseModal]);


const handleBackdropClick = event => {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
};

  return (<div className={css.overlay} onClick={handleBackdropClick} >
  <div className={css.modal}>
      <img src={largeImageURL} alt="big" />
  </div>
</div>)
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
}

export default Modal;