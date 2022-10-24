import axios from "axios";

const key = '30130433-e8b1bb853ff880f9de2d30603';
axios.defaults.baseURL = 'https://pixabay.com/api/'

const fetchPictures = async searchPicture => {
  const response = await axios.get(`?q=${searchPicture}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data.hits;
};

export default fetchPictures;
