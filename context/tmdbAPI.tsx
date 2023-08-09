"use client";
import { StateProps } from "@/libs/type";
import { useContext, createContext, ReactNode, useReducer, useEffect } from "react";
import { discoverMovies } from "@/api/apiCall";
import reducer from "./reducer/reducer";

const initialState: StateProps = {
  discovers: [],
};

export const GlobalContext = createContext(initialState);

export const ContextApi = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    discoverMovies().then((result) => {
      const fristTenResult = result.data.results.slice(0, 10);
      dispatch({
        type: "GET_DISCOVER",
        payload: fristTenResult,
      });
    });
  }, []);

  const value = {
    discovers: state.discovers,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
