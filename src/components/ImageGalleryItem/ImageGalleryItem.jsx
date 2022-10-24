import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
state = {
  modalIsActive: false,
}
  
handleModalToggle = () => {
  this.setState({modalIsActive: !this.state.modalIsActive})
}
  
  render() {
  return (<li className={css.imageGalleryItem}>
    <img src={this.props.webformatURL} alt={this.props.tags} className={css.imageGalleryItem_image} onClick={this.handleModalToggle} />
    {this.state.modalIsActive && <Modal largeImageURL={this.props.largeImageURL} onCloseModal={this.handleModalToggle} />}
  </li>)
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}

export default ImageGalleryItem;