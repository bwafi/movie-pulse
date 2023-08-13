import { DiscoverProps, TrendingProps } from "@/libs/type";

export interface StateProps {
  discovers: DiscoverProps[];
  trendingMovies: {
    day: TrendingProps[];
    week: TrendingProps[];
  };
  // trendingsMovieDay: TrendingProps[];
  // trendingsMovieWeek: TrendingProps[];
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
  // trendingsMovieDay: [],
  // trendingsMovieWeek: [],
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

    default:
      return state;
  }
};

export default reducer;
