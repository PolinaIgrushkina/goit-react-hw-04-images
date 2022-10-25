import axios from "axios";

const api = axios.create({
  baseURL: 'https://pixabay.com/api/',

   params: {
     key: '30130433-e8b1bb853ff880f9de2d30603',
     image_type: 'photo',
     orientation: 'horizontal',
     per_page: 12,
  },
});

const fetchPictures = async (searchPicture, page = 1 ) => {
  const response = await api.get('', {
    params: {
      q: searchPicture,
      page,
    }
  })
  
  return response.data.hits;
};

export default fetchPictures;

