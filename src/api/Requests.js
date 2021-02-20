const API_KEY = "263d22d8";

const requests = {
  fetchMovie: `?t=stranger things&apikey=${API_KEY}`,
  fetchMovies: `?s=harry&apikey=${API_KEY}`,
  fetchTvShows: `?s=star&apikey=${API_KEY}`,
  fetchNewIn2021: `?s=avengers&apikey=${API_KEY}`,
  fetchNewlyRealeased: `?s=suits&apikey=${API_KEY}`,
};

export default requests;
