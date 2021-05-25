import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getRandomJoke } from "../actions";

const Jokes = ({ joke, isFetching, error, ...props }) => {
  useEffect(() => {
    getRandomJoke();
  }, []);

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Did you hear the one about...</h2>;
  }

  return (
    <>
      <h2>Joke # {joke.id}</h2>
      <h2>{joke.joke}</h2>
      <button onClick={() => props.getRandomJoke()}>Next Random Joke</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getRandomJoke })(Jokes);
