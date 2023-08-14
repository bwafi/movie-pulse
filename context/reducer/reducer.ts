import { DiscoverProps, TrendingProps } from "@/libs/type";

export interface StateProps {
  discovers: DiscoverProps[];
  trendingMovies: {
    day: TrendingProps[];
    week: TrendingProps[];
  };
  trendingTv: {
    day: TrendingProps[];
    week: TrendingProps[];
  };
  isLoading: boolean;
  isError: boolean;
}

export interface ActionProps {
  type: string;
  payload: any;
}

export const initialState: StateProps = {
  discovers: [],
  trendingMovies: {
    day: [],
    week: [],
  },
  trendingTv: {
    day: [],
    week: [],
  },
  isLoading: true,
  isError: false,
};

const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case "GET_DISCOVER":
      return {
        ...state,
        discovers: action.payload,
        isLoading: false,
      };
    case "GET_TRENDING_MOVIE_DAY":
      return {
        ...state,
        trendingMovies: {
          ...state.trendingMovies,
          day: action.payload,
        },
      };
    case "GET_TRENDING_MOVIE_WEEK":
      return {
        ...state,
        trendingMovies: {
          ...state.trendingMovies,
          week: action.payload,
        },
      };

    case "GET_TRENDING_TV_DAY":
      return {
        ...state,
        trendingTv: {
          ...state.trendingTv,
          day: action.payload,
        },
      };

    case "GET_TRENDING_TV_WEEK":
      return {
        ...state,
        trendingTv: {
          ...state.trendingTv,
          week: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
