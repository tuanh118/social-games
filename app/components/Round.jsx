import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import WordItem from './WordItem';

class Round extends Component {

  nextRoundLink(game, round, totalRounds) {
    const url = '/game/' + game + '/round/' + (round + 1);

    return (
      round < totalRounds
      ?
      <Link to={url}>Go to round {round + 1}</Link>
      :
      null
    );
  }

  render() {
    const { sentence, totalRounds, params } = this.props;
    const words = sentence.toUpperCase().split(' ');
    const round = parseInt(params.round);
    const game = parseInt(params.game);

    return (
      <div>
        <h3 className='col-xs-12'>Round {round}</h3>
        {this.nextRoundLink(game, round, totalRounds)}
        <div
          className='col-xs-10 col-xs-offset-1'>
          <ul
            style={{
              listStyle: 'none'
            }}
            >
            {words.map((word, id) =>
              <WordItem
                key={id}
                id={id+1}
                word={word}
                />
            )}
          </ul>
        </div>
      </div>
    );
  }
};

export default connect(
  (state, ownProps) => {
    return {
      params: ownProps.params,
      sentence: state.sentences[parseInt(ownProps.params.round)-1],
      totalRounds: state.sentences.length,
    };
  }
)(Round);
