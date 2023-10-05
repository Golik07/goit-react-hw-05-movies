import axios from 'axios';

const API_KEY = 'fe1cf860005fcfafe76308a8ff138918';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopular = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchInfoAboutMovie = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchSearchMovie = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchCredits = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const fetchReviews = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};
