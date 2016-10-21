import React, { Component } from 'react';
import { connect } from 'react-redux';

import WordItem from './WordItem';

import { toggleItem, correctGuess } from '../actions';

class Round extends Component {
  state = {
    milisecondsLeft: 4000,
  }

  componentDidMount() {
    this.setState({
      removeInterval: setInterval(this.countdown, 100),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.song !== prevProps.song) {
      this.setState({
        milisecondsLeft: 4000,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.removeInterval);
  }

  countdown = () => {
    const { milisecondsLeft } = this.state;
    if (milisecondsLeft > 0) {
      this.setState({
        milisecondsLeft: milisecondsLeft - 10,
      });
    }
  }

  render() {
    const { params } = this.props;
    const game = parseInt(params.game);
    const round = parseInt(params.round);

    let roundContent = null;
    if (game === 1) {
      // Get props and render for game1
      const { sentence, hiddenSentences, selectedWordId, toggleItem } = this.props;
      const words = this.props.sentence.trim().toUpperCase().split(' ');
      const hiddenWords = hiddenSentences[round-1];
      roundContent = (
        <div className="row">
          <ul
            className="col-md-12"
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
          <div className="jumbotron col-md-12">
            <h1 className="text-center">
              {hiddenWords[selectedWordId] ? null : words[selectedWordId]}
            </h1>
          </div>
        </div>

      );
    } else if (game === 2) {
      // Get props and render for game2
      // TODO: add interactivity and filtering
      const { song, guessed, correctGuess } = this.props;
      const { milisecondsLeft } = this.state;

      roundContent = (
        <div className="row">
          <div
            className="col-md-8"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={song.get('imgUrl')}
              style={{
                maxHeight: '70vh',
                maxWidth: '70vh',
              }}
            />
          </div>
          <div className="col-md-4">
            <h1 className="col-md-12">
              {milisecondsLeft}
            </h1>
            <h2 className="col-md-12">
              {song.get('title')}
            </h2>
          </div>
        </div>
      );
    }

    return (
      <div className="jumbotron">
        <h1 className="text-center col-md-12">Round {round}</h1>
        <div
          style={{
            paddingTop: 50,
            paddingLeft: 100,
            paddingRight: 100,
          }}
          className="col-md-10 col-md-offset-1"
        >
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
      selectedWordId: state.game1.getIn(['selectedWordId', parseInt(ownProps.params.round)-1]),

      // Game2 props
      song: state.game2.getIn(['songs', parseInt(ownProps.params.round)-1]),
      guessed: state.game2.getIn(['guessed', parseInt(ownProps.params.round)-1]),
    };
  },
  {
    toggleItem,
    correctGuess,
  }
)(Round);
