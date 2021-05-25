import {
  SET_FETCHING_JOKE,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
} from "../actions";

const initialState = {
  joke: {},
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING_JOKE:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_JOKE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        joke: { ...action.payload },
      };
    case FETCH_JOKE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
