// http://api.icndb.com/jokes/random

import axios from "axios";

export const SET_FETCHING_JOKE = "SET_FETCHING_JOKE";
export const FETCH_JOKE_SUCCESS = "JOKE_FETCH_SUCCESS";
export const FETCH_JOKE_FAILURE = "FETCH_JOKE_FAILURE";

export const getRandomJoke = () => (dispatch) => {
  dispatch({ type: SET_FETCHING_JOKE });

  axios
    .get("https://api.icndb.com/jokes/random")
    .then((res) => {
      //console.log("pv: getRandomJoke; get-then; res.data: ", res.data.value);

      dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data.value });
    })
    .catch((err) => {
      dispatch({ type: FETCH_JOKE_FAILURE, payload: JSON.stringify(err) });
    });
};
