import { DiscoverProps, TrendingProps } from "@/libs/type";

export interface StateProps {
  discovers: DiscoverProps[];
  trendingsMovieDay: TrendingProps[];
  trendingsMovieWeek: TrendingProps[];
  isLoading: boolean;
  isError: boolean;
}

export interface ActionProps {
  type: string;
  payload: any;
}

export const initialState: StateProps = {
  discovers: [],
  trendingsMovieDay: [],
  trendingsMovieWeek: [],
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
        trendingsMovieDay: action.payload,
      };
    case "GET_TRENDING_MOVIE_WEEK":
      return {
        ...state,
        trendingsMovieWeek: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
