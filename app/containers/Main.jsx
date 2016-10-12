import React from 'react';
import { connect } from 'react-redux';
import { history } from '../index';

class Main extends React.Component {

  state = {
    unsubscribeKeyDown: null,
  }

  /** Change URL based on current URL and key pressed
      TODO: support changing games as well
  */
  getNextUrl(params, key) {
    const thisGame = parseInt(params.game);
    const thisRound = parseInt(params.round);

    let nextGame = thisGame;
    let nextRound = thisRound;

    if (thisRound) {
      // Round level
      switch (key) {
        case 'ArrowRight':
          // Go next
          if (thisRound < this.props.totalRounds) {
            nextRound = thisRound + 1;
          } else {
            return null;
          }
          break;
        case 'ArrowLeft':
          // Go previous
          if (thisRound > 1) {
            nextRound = thisRound - 1;
          } else {
            return null;
          }
          break;
        case 'ArrowUp':
          // Go back to the game
          nextRound = null;
          break;
        default:
          return null;
      }
    } else if (thisGame) {
      // Game level
      switch (key) {
        case 'ArrowRight':
          // Go next
          if (thisGame < this.props.totalGames) {
            nextGame = thisGame + 1;
          } else {
            return null;
          }
          break;
        case 'ArrowLeft':
          // Go previous
          if (thisGame > 1) {
            nextGame = thisGame - 1;
          } else {
            return null;
          }
          break;
        case 'ArrowUp':
          // Go to game list
          return '/';
        case 'ArrowDown':
          // Go into the first round
          nextRound = 1;
          break;
        default:
          return null;
      }
    } else {
      // Event level (top level)
      switch (key) {
        case 'ArrowDown':
          // Go into the first game
          nextGame = 1;
          break;
        default:
          return null;
      }
    }

    if (nextRound) {
      return `/game/${nextGame}/round/${nextRound}`;
    }
    return `/game/${nextGame}`;
  }

  listenToKeyDown(params, dispatch) {
    const handleKeyDown = e => {
      if (e) {
        const next = this.getNextUrl(params, e.key);
        if (next) {
          history.push(next);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }

  componentDidMount() {
    // Add an initial listener
    const { params, dispatch } = this.props;
    this.state.unsubscribeKeyDown = this.listenToKeyDown(params, dispatch);
  }

  componentDidUpdate(prevProps) {
    if (this.props.params !== prevProps.params) {
      // Remove the previous listener
      this.state.unsubscribeKeyDown();

      // Set a new listener
      const { params, dispatch } = this.props;
      this.state.unsubscribeKeyDown = this.listenToKeyDown(params, dispatch);
    }
  }

  render() {
    return (
      <div className='main-container'>
          { this.props.children }
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.node,
  totalGames: React.PropTypes.number,
  totalRounds: React.PropTypes.number,
};

export default connect(
  (state) => {
    return {
      totalGames: 2,
      totalRounds: state.game1.get('sentences').toJS().length,
    }
  }
)(Main);
