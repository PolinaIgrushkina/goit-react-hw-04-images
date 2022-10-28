import { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import css from './App.module.css';

export function App() {
  const[searchPicture, setSearchPicture] = useState('');

  const handleSubmit = searchWord => {
    setSearchPicture(searchWord);
  }

    return (
      <div className={css.app}>
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery searchPicture={searchPicture} />
      </div>
    );
};
