import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { GrFormSearch } from "react-icons/gr";
import { Component } from 'react';

export default class Searchbar extends Component {
state = {
  searchWord: ''
}
  
handleChange = event => {
  this.setState({ searchWord: event.currentTarget.value.toLowerCase() });
  };

handleSubmit = event => {
  event.preventDefault();

  if (this.state.searchWord.trim() === '') {
    alert('Пожалуста введите поисковый запрос.');
    return;
  }

  this.props.onSubmit(this.state.searchWord);
  this.setState({ searchWord: '' });
  };  
  
  
render() {
  return (<header className={css.searchbar}>
    <form className={css.form} onSubmit={this.handleSubmit}>
      <button type="submit" className={css.button}>
        <GrFormSearch className={css.button_label} />
      </button>

      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={this.state.searchWord}
        onChange={this.handleChange}
      />
    </form>
  </header>)
};
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
