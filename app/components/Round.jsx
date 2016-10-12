import React, { Component } from 'react';
import { connect } from 'react-redux';

import WordItem from './WordItem';

import { toggleItem } from '../actions';

class Round extends Component {

  render() {
    const { sentence, params, toggleItem, hiddenSentences } = this.props;
    const round = parseInt(params.round);
    const words = sentence.toUpperCase().split(' ');
    const hiddenWords = hiddenSentences[round-1];

    return (
      <div>
        <h3 className='col-xs-12'>Round {round}</h3>
        <div
          className='col-xs-10 col-xs-offset-1'>
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
        </div>
      </div>
    );
  }
};

export default connect(
  (state, ownProps) => {
    return {
      params: ownProps.params,
      sentence: state.game1.getIn(['sentences', parseInt(ownProps.params.round)-1]).trim(),
      hiddenSentences: state.game1.get('hidden').toJS(),
    };
  },
  {
    toggleItem,
  }
)(Round);
