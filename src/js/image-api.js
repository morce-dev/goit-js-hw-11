import axios from 'axios';

const API_KEY = '45117843-73aad867c3673329b4a7a64cc';
const BASE_URL = 'https://pixabay.com/api/';

export function searchImage(searchQuery, page, per_page) {
  return axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo
    &orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
  );
}
