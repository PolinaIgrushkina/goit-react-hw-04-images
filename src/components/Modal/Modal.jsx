import PropTypes from 'prop-types';
import css from './Modal.module.css';

function Modal() {
  return (<div className={css.overlay}>
  <div className={css.modal}>
    <img src="" alt="" />
  </div>
</div>)
}

Modal.propTypes = {

}

export default Modal;