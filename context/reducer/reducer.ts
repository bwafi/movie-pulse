import { ApiPorps, DiscoverProps } from "@/libs/type";

export interface StateProps {
  discovers: DiscoverProps[];
  trendingMovies: {
    day: ApiPorps[];
    week: ApiPorps[];
  };
  trendingTv: {
    day: ApiPorps[];
    week: ApiPorps[];
  };
  movies: {
    upcoming: ApiPorps[];
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
  movies: {
    upcoming: [],
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

    case "GET_UPCOMING_MOVIES":
      return {
        ...state,
        movies: {
          ...state.movies,
          upcoming: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
