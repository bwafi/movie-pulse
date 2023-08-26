"use client";
import React, { useContext, createContext, ReactNode, useReducer, useEffect } from "react";
import { discoverMovies, getTrendingPeople, getTrendingsMovies, getTrendingsTv } from "@/api/apiCall";
import reducer, { initialState } from "./reducer/reducer";

export const GlobalContext = createContext(initialState);

export const ContextApi = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    discoverMovies().then((result) => {
      dispatch({
        type: "GET_DISCOVER",
        payload: result.data.results,
      });
    });

    getTrendingsMovies("day").then((result) => {
      dispatch({
        type: "GET_TRENDING_MOVIE_DAY",
        payload: result.data.results,
      });
    });

    getTrendingsMovies("week").then((result) => {
      dispatch({
        type: "GET_TRENDING_MOVIE_WEEK",
        payload: result.data.results,
      });
    });

    getTrendingsTv("day").then((result) => {
      dispatch({
        type: "GET_TRENDING_TV_DAY",
        payload: result.data.results,
      });
    });

    getTrendingsTv("week").then((result) => {
      dispatch({
        type: "GET_TRENDING_TV_WEEK",
        payload: result.data.results,
      });
    });

    getTrendingPeople("day").then((result) => {
      dispatch({
        type: "GET_TRENDING_PEOPLE_DAY",
        payload: result.data.results,
      });
    });

    getTrendingPeople("week").then((result) => {
      dispatch({
        type: "GET_TRENDING_PEOPLE_WEEK",
        payload: result.data.results,
      });
    });
  }, []);

  const handleMenu = () => {
    dispatch({
      type: "KLIK_MENU",
      payload: !state.menu,
    });
  };

  const value = {
    ...state,
    handleMenu: handleMenu,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
