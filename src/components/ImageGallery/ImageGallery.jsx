import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { useState, useEffect, useRef} from 'react';
import fetchPictures from '../../helpers/api';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

export default function ImageGallery({searchPicture}) {
 
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [status, setStatus] = useState('init');

  const isFirstRender = useRef(true);
    
    
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setStatus('loading');

    async function getData() {
      try {
        const pictures = await fetchPictures(searchPicture);
        if (pictures.length === 0) {
          setPictures(pictures);
          setStatus('error');
          return alert('Картинок с таким запросом не найдено.');
        };
        setPictures(pictures);
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    }
    if (searchPicture !== '') {
      getData()
    } else { 
      setStatus('init');
    }
  }, [searchPicture]);
  
  useEffect(() => { 
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    async function getData() {
      const newPage = await fetchPictures(searchPicture, page);
      setPictures([...pictures, ...newPage])
    }
    getData();
    // eslint-disable-next-line
  }, [page]);
  
  
const handleLoadMore = () => {
    setPage(page + 1);
}

  return (<>
    {status === 'init'}
    {status === 'success' && <><ul className={css.imageGallery}>
      {pictures.map(picture => {return <ImageGalleryItem key={picture.id} webformatURL={picture.webformatURL} largeImageURL={picture.largeImageURL} tags={picture.tags} />})}
    </ul><Button onClick={handleLoadMore} /></>}
    {status === 'loading' && <Loader />}
    {status === 'error' && <p>Error! Попробуйте найти что-то другое.</p>}
  </>);
};


ImageGallery.propTypes = {
  searchPicture: PropTypes.string.isRequired,
};

