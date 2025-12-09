import axios from 'axios';

const API_KEY = '53618860-395ecb394c138c7d18d79e38c';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params })
    .then(response => response.data);
}