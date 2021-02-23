const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchMovie: `?s=home alone&apikey=${API_KEY}`,
  fetchMovies: `?s=dark&apikey=${API_KEY}`,
  fetchFavourites: `?s=narcos&apikey=${API_KEY}`,
  fetchTvShows: `?s=suits&apikey=${API_KEY}`,
  fetchNewIn2021: `?s=avengers&apikey=${API_KEY}`,
  fetchNewlyRealeased: `?s=suits&apikey=${API_KEY}`,
};

export default requests;
