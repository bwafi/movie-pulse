import axios from "axios";
import { BASE_URL, API_KEY } from "./apiConfig";

export const discoverMovies = async () => {
  return await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getTrendingsMovies = async (timeTrending: string) => {
  return await axios.get(`${BASE_URL}/trending/movie/${timeTrending}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getTrendingsTv = async (timeTrending: string) => {
  return await axios.get(`${BASE_URL}/trending/tv/${timeTrending}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getUpcomingMovies = async () => {
  return await axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getTrailerVideos = async (movie_id: number | null) => {
  return await axios.get(`${BASE_URL}/movie/${movie_id}/videos`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getTrendingPeople = async (timeTrending: string) => {
  return await axios.get(`${BASE_URL}/trending/person/day`, {
    params: {
      api_key: API_KEY,
    },
  });
};
