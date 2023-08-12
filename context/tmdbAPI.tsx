"use client";
import React, { useContext, createContext, ReactNode, useReducer, useEffect } from "react";
import { discoverMovies, getTrendings } from "@/api/apiCall";
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

    getTrendings("day").then((result) => {
      dispatch({
        type: "GET_TRENDING_MOVIE_DAY",
        payload: result.data.results,
      });
    });

    getTrendings("week").then((result) => {
      dispatch({
        type: "GET_TRENDING_MOVIE_WEEK",
        payload: result.data.results,
      });
    });
  }, []);

  return <GlobalContext.Provider value={{ ...state }}>{children}</GlobalContext.Provider>;
};
