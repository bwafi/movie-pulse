import { ActionProps, StateProps } from "@/libs/type";

const reducer = (state: StateProps, action: ActionProps) => {
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

export default reducer;
