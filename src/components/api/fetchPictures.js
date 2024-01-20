import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 3000,
  params: {
    key: '40786417-663091144562a9e2f0523c37d',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

const getPost = (q, page = 1) => {
  return instance.get(`?&q=${q}&page=${page}`);
};

export { getPost };
