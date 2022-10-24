import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import fetchPictures from '../../helpers/api';

export default class ImageGallery extends Component {
state = {
  pictures: [],
};
  
async componentDidUpdate(prevProps, prevState) {
  if (prevProps.searchPicture !== this.props.searchPicture) {
    try {
      const pictures = await fetchPictures(this.props.searchPicture);
      this.setState({ pictures });
    } catch (error) {
      this.setState({ error });
    }
  }
}

render() {
  return (<ul className={css.imageGallery}>
    {this.state.pictures.map(picture => { return <ImageGalleryItem key={picture.id} webformatURL={picture.webformatURL} largeImageURL={picture.largeImageURL} tags={picture.tags} />})}
  </ul>);
}
}


ImageGallery.propTypes = {
searchPicture: PropTypes.string.isRequired,
}

