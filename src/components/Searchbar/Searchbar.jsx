import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { GrFormSearch } from "react-icons/gr";
import { useState } from 'react';

export default function Searchbar({onSubmit}) {

const [searchWord, setSearchWord] = useState('');

const handleChange = event => {
  setSearchWord(event.currentTarget.value.toLowerCase());
};

const handleSubmit = event => {
  event.preventDefault();

  if (searchWord.trim() === '') {
    alert('Пожалуста введите поисковый запрос.');
    return;
  }

  onSubmit(searchWord);
  setSearchWord('');
};  
  
  return (<header className={css.searchbar}>
    <form className={css.form} onSubmit={handleSubmit}>
      <button type="submit" className={css.button}>
        <GrFormSearch className={css.button_label} />
      </button>

      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={searchWord}
        onChange={handleChange}
      />
    </form>
  </header>)
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
