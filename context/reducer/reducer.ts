import { ActionProps, StateProps } from "../tmdbAPI";

const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case "GET_DISCOVER":
      return {
        ...state,
        discovers: action.payload,
        isLoading: false,
      };
    case "GET_TRENDING_DAY":
      return {
        ...state,
        trendingsDay: action.payload,
      };
    case "GET_TRENDING_WEEK":
      return {
        ...state,
        trendingsWeek: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
