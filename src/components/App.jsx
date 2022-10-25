import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchPicture: '',
  }

  handleSubmit = searchWord => {
    this.setState({searchPicture: searchWord})
  }

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchPicture={this.state.searchPicture} />
      </div>
    );
  }
};
