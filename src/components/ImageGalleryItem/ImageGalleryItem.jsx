import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

function ImageGalleryItem({ webformatURL, largeImageURL, tags }) {
  
  const [modalIsActive, setModalIsActive] = useState(false);
  
  const handleModalToggle = () => {
    setModalIsActive(!modalIsActive);
  }
  
  return (<li className={css.imageGalleryItem}>
    <img src={webformatURL} alt={tags} className={css.imageGalleryItem_image} onClick={handleModalToggle} />
    {modalIsActive && <Modal largeImageURL={largeImageURL} onCloseModal={handleModalToggle} />}
  </li>)
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}

export default ImageGalleryItem;