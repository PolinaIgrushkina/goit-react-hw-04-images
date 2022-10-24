import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
componentDidMount() {
  window.addEventListener('keydown', this.handleEscapeModalClose);
}

componentWillUnmount() {
  window.removeEventListener('keydown', this.handleEscapeModalClose);
}

handleEscapeModalClose = event => {
  if (event.code === 'Escape') {
    this.props.onCloseModal();
  }
};

handleBackdropClick = event => {
  if (event.target === event.currentTarget) {
    this.props.onCloseModal();
  }
};


render() {
  return (<div className={css.overlay} onClick={this.handleBackdropClick} >
  <div className={css.modal}>
      <img src={this.props.largeImageURL} alt="big" />
  </div>
</div>)
}
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
}

export default Modal;