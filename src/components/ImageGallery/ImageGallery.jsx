import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery() {
  return (<ul className={css.imageGallery}>
    <ImageGalleryItem />
  </ul>);
}

ImageGallery.propTypes = {

}

export default ImageGallery;