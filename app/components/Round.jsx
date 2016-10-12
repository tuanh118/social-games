import React, { Component } from 'react';
import { connect } from 'react-redux';

import WordItem from './WordItem';

import { toggleItem, correctGuess } from '../actions';

class Round extends Component {

  render() {
    const { params } = this.props;
    const game = parseInt(params.game);
    const round = parseInt(params.round);

    let roundContent = null;
    if (game === 1) {
      // Get props and render for game1
      const { sentence, hiddenSentences, toggleItem } = this.props;
      const words = this.props.sentence.trim().toUpperCase().split(' ');
      const hiddenWords = hiddenSentences[round-1];
      roundContent = (
        <ul
          style={{
            listStyle: 'none'
          }}
          >
          {words.map((word, id) =>
            <WordItem
              key={round + '-' + id}
              id={id+1}
              word={word}
              onClick={toggleItem.bind(null, round-1, id)}
              hidden={hiddenWords[id]}
              />
          )}
        </ul>
      );
    } else if (game === 2) {
      // Get props and render for game2
      // TODO: add interactivity and filtering
      const { song, guessed, correctGuess } = this.props;

      roundContent = (
        <div className="row">
          <div className="col-xs-2">
            {song.get('title')}
          </div>
          <div className="col-xs-10">
            <img src={song.get('imgUrl')} />
          </div>

        </div>
      );
    }

    return (
      <div>
        <h3 className='col-xs-12'>Round {round}</h3>
        <div className='col-xs-10 col-xs-offset-1'>
          {roundContent}
        </div>
      </div>
    );
  }
};

export default connect(
  (state, ownProps) => {
    return {
      params: ownProps.params,

      // Game1 props
      sentence: state.game1.getIn(['sentences', parseInt(ownProps.params.round)-1]),
      hiddenSentences: state.game1.get('hidden').toJS(),

      // Game2 props
      song: state.game2.getIn(['songs', parseInt(ownProps.params.round)-1]),
      guessed: state.game2.getIn(['guessed', parseInt(ownProps.params.round)-1])
    };
  },
  {
    toggleItem,
    correctGuess,
  }
)(Round);
