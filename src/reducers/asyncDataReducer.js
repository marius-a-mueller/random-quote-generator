import { COLOR_CHANGED, FETCHING_DATA, RECEIVED_DATA } from "../actions";

const defaultState = {
  fetching: false,
  color: "green",
  quote: "",
  author: "",
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        fetching: true,
        quote: "",
        author: "",
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        quote: action.quote,
        author: action.author,
      };
    case COLOR_CHANGED:
        return {
            color: action.color
        }
    default:
      return state;
  }
};

export default asyncDataReducer;
