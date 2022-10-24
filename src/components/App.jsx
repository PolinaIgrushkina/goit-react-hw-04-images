import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
// import Loader from './Loader/Loader';
import { Circles } from 'react-loader-spinner';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchPicture: '',
    error: null,
    status: 'idle',
  }

  handleSubmit = searchWord => {
    this.setState({searchPicture: searchWord})
  }

  render() {
// const { searchPicture, error, status } = this.state;

//     if (status === 'idle') {
//       return <div>Введите что вы хотите найти.</div>;
//     }

//     if (status === 'pending') {
//       return <Circles
        //   height="80"
        //   width="80"
        //   color="#4fa94d"
        //   ariaLabel="circles-loading"
        //   wrapperStyle={{}}
        //   wrapperClass=""
        //   visible={true}
        // />;
//     }

//     if (status === 'rejected') {
//       return <p>{error.message}</p>;
//     }

//     if (status === 'resolved') {
    // return <ImageGallery searchPicture={this.state.searchPicture} />
    // <Button /> ;
//     }
//   }


    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchPicture={this.state.searchPicture} />
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <Button /> 
      </div>
    );
  }
};
