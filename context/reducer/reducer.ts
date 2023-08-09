import { ActionProps, StateProps } from "../tmdbAPI";

const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case "GET_DISCOVER":
      return {
        ...state,
        discovers: action.payload,
      };
    case "GET_TRENDING_DAY":
      return {
        ...state,
        trendings: action.payload,
      };

    case "GET_TRENDING_WEEK":
      return {
        ...state,
        trendings: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
