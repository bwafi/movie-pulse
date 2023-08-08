"use client";
import { API_KEY, BASE_URL } from "@/libs/baseApi";
import { DiscoverProps } from "@/libs/type";
import axios from "axios";
import { useContext, createContext, ReactNode, useReducer, useEffect } from "react";

interface StateProps {
  discovers: DiscoverProps[];
}

interface ActionProps {
  type: string;
  payload: any;
}

const initialState: StateProps = {
  discovers: [],
};

const ApiReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case "GET_DISCOVER":
      return {
        ...state,
        discovers: action.payload,
      };

    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const ContextApi = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(ApiReducer, initialState);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((result) => {
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
