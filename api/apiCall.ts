import axios from "axios";
import { BASE_URL, API_KEY } from "./apiConfig";

export const discoverMovies = () => {
  return axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getTrendings = (timeTrending: string) => {
  return axios.get(`${BASE_URL}/trending/movie/${timeTrending}`, {
    params: {
      api_key: API_KEY,
    },
  });
};
