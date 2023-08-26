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
  people: {
    trending: {
      day: ApiPorps[];
      week: ApiPorps[];
    };
    popular: ApiPorps[];
  };
  handleMenu?: () => void;
  menu: boolean;
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
  people: {
    trending: {
      day: [],
      week: [],
    },
    popular: [],
  },
  menu: false,
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

    case "GET_TRENDING_PEOPLE_DAY":
      return {
        ...state,
        people: {
          ...state.people,
          trending: {
            ...state.people.trending,
            day: action.payload,
          },
        },
      };

    case "GET_TRENDING_PEOPLE_WEEK":
      return {
        ...state,
        people: {
          ...state.people,
          trending: {
            ...state.people.trending,
            week: action.payload,
          },
        },
      };

    case "KLIK_MENU":
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
