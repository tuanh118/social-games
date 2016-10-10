import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Game1 = ({ sentences }) => {

  return (
    <div>
      <h2>Game 1</h2>
      <Link to='/game/1/round/1'>Start</Link>
    </div>
  );
};

export default connect(
  (state) => {
    return {
      sentences: state.sentences,
    };
  }
)(Game1);
