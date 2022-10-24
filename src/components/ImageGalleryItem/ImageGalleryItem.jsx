import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem() {
  return (<li className={css.imageGalleryItem}>
    <img src="" alt="" className={css.imageGalleryItem_image} />
</li>)
}

ImageGalleryItem.propTypes = {

}


export default ImageGalleryItem;