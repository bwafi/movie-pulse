"use client";
import { DiscoverProps, TrendingProps } from "@/libs/type";
import React, { useContext, createContext, ReactNode, useReducer, useEffect } from "react";
import { discoverMovies, getTrendings } from "@/api/apiCall";
import reducer from "./reducer/reducer";

export interface StateProps {
  discovers: DiscoverProps[];
  trendings: TrendingProps[];
  handleTrendingDay?: () => void;
  handleTrendingWeek?: () => void;
}

export interface ActionProps {
  type: string;
  payload: any;
}

const initialState: StateProps = {
  discovers: [],
  trendings: [],
};

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
        type: "GET_TRENDING_DAY",
        payload: result.data.results,
      });
    });
  }, []);

  const handleTrendingDay = () => {
    getTrendings("day").then((result) => {
      dispatch({
        type: "GET_TRENDING_DAY",
        payload: result.data.results,
      });
    });
  };

  const handleTrendingWeek = () => {
    getTrendings("week").then((result) => {
      dispatch({
        type: "GET_TRENDING_WEEK",
        payload: result.data.results,
      });
    });
  };

  const value = {
    discovers: state.discovers,
    trendings: state.trendings,
    handleTrendingDay,
    handleTrendingWeek,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
