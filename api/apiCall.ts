import axios from "axios";
import { BASE_URL, API_KEY } from "./apiConfig";

export const discoverMovies = async () => {
  return await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      region: "ID",
    },
  });
};

export const getTrendings = async (type: string, timeTrending: string) => {
  return await axios.get(`${BASE_URL}/trending/${type}/${timeTrending}`, {
    params: {
      api_key: API_KEY,
      region: "ID",
    },
  });
};

export const getList = async (type: string, list: string, page: number = 1) => {
  return await axios.get(`${BASE_URL}/${type}/${list}`, {
    params: {
      api_key: API_KEY,
      page: page,
      region: "ID",
    },
  });
};

export const getTrailerVideos = async (type: string, movie_id: number | null) => {
  return await axios.get(`${BASE_URL}/${type}/${movie_id}/videos`, {
    params: {
      api_key: API_KEY,
      region: "ID",
    },
  });
};

export const getDetailPerson = async (id: number) => {
  return await axios.get(`${BASE_URL}/person/${id}`, {
    params: {
      api_key: API_KEY,
      region: "ID",
    },
  });
};

export const getDetail = async (type: string, id: number) => {
  return await axios.get(`${BASE_URL}/${type}/${id}`, {
    params: {
      api_key: API_KEY,
      region: "ID",
    },
  });
};

export const getCredits = async (type: string, id: number) => {
  return await axios.get(`${BASE_URL}/${type}/${id}/credits`, {
    params: {
      api_key: API_KEY,
      region: "ID",
    },
  });
};

export const getCombineCredits = async (id: number) => {
  return await axios.get(`${BASE_URL}/person/${id}/combined_credits`, {
    params: {
      api_key: API_KEY,
      region: "ID",
    },
  });
};

export const getSearch = async (query: string) => {
  return await axios.get(`${BASE_URL}/search/multi`, {
    params: {
      api_key: API_KEY,
      region: "ID",
      query: query,
    },
  });
};
