import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=20cd267abb960a552b7abbc1653318ee";

const page = {
  popular: 1,
};

async function fetchTrendingDayMovies() {
  const pathParams = "/trending/movie/day";
  const queryString = baseUrl + pathParams + API_KEY;

  const { data } = await axios.get(queryString);

  return data;
}

async function fetchDetailsMovieWithId(id, pathParams) {
  let queryString = `${baseUrl}/movie/${id}/${pathParams}${API_KEY}`;

  if (!pathParams) {
    queryString = `${baseUrl}/movie/${id}${API_KEY}`;
  }

  if (pathParams === "reviews") {
    queryString = `${baseUrl}/movie/${id}/${pathParams}${API_KEY}&page=1`;
  }

  const { data } = await axios.get(queryString);

  return data;
}

async function fetchMovieByKeyword(query) {
  const queryString = `${baseUrl}/search/movie${API_KEY}&query=${query}&page=1&include_adult=true`;

  const { data } = await axios.get(queryString);

  return data;
}

async function fetchLatestPublishedMovies(page) {
  const queryString = `${baseUrl}/discover/movie${API_KEY}&sort_by=popularity.desc&page=${page}`;

  const { data } = await axios.get(queryString);

  return data;
}

export {
  page,
  fetchTrendingDayMovies,
  fetchDetailsMovieWithId,
  fetchMovieByKeyword,
  fetchLatestPublishedMovies,
};
