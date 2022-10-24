import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { GrFormSearch } from "react-icons/gr";

function Searchbar({onSubmit}) {
  return (<header className={css.searchbar}>
    <form className={css.form} onSubmit={onSubmit}>
      <button type="submit" className={css.button}>
        <GrFormSearch className={css.button_label} />
      </button>

      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>);
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;