const API_KEY = "thewdb";

const requests = {
  fetchMovie: `?s=stranger things&apikey=${API_KEY}`,
  fetchMovies: `?s=harry&apikey=${API_KEY}`,
  fetchTvShows: `?s=star&apikey=${API_KEY}`,
  fetchNewIn2021: `?s=avengers&apikey=${API_KEY}`,
  fetchNewlyRealeased: `?s=suits&apikey=${API_KEY}`,
};

export default requests;
