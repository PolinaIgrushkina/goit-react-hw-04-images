import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from './App.module.css'

export class App extends Component {
  state = {
  
  }
  
  handleSubmit = () => {

  }

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
        <Button /> 
      {/* <Loader />
      <Modal />  */}
      </div>
    );
  }
};
