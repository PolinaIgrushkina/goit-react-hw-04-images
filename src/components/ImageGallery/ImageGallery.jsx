import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import fetchPictures from '../../helpers/api';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

export default class ImageGallery extends Component {
  state = {
  page: 1,
  pictures: [],
  status: 'init',
};
  
async componentDidUpdate(prevProps, prevState) {
  if (prevProps.searchPicture !== this.props.searchPicture) {
    this.setState({ status: 'loading' });
    try {
      const pictures = await fetchPictures(this.props.searchPicture);
      if (pictures.length === 0) {
        this.setState({ pictures, status: 'error' });
        return alert('Картинок с таким запросом не найдено.');
      };
      
      this.setState({ pictures, status: 'success' });
    } catch (error) {
      this.setState({ status: 'error'});
    }
  }

  if (prevState.page !== this.state.page && prevProps.searchPicture === this.props.searchPicture) {
    const newPage = await fetchPictures(this.props.searchPicture, this.state.page);
    this.setState((prevState) => ({ pictures: [...prevState.pictures, ...newPage] }));
  }
}
  
handleLoadMore = () => {
  this.setState((prevstate) => ({page: prevstate.page + 1}))
}

render() {
  return (<>
    {this.state.status === 'success' && <><ul className={css.imageGallery}>
      {this.state.pictures.map(picture => {return <ImageGalleryItem key={picture.id} webformatURL={picture.webformatURL} largeImageURL={picture.largeImageURL} tags={picture.tags} />})}
    </ul><Button onClick={this.handleLoadMore} /></>}
    {this.state.status === 'loading' && <Loader />}
    {this.state.status === 'error' && <p>Error! Попробуйте найти что-то другое.</p>}
  </>);
}
}


ImageGallery.propTypes = {
  searchPicture: PropTypes.string.isRequired,
}

