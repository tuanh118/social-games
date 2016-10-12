import React, { Component } from 'react';
import { connect } from 'react-redux';

import classNames from 'classnames';

class WordItem extends Component {

  render() {
    const { id, word, onClick, hidden } = this.props;

    const btnClass = classNames('btn btn-default btn-large', { 'clicked': hidden });

    return (
      <li
        className='col-xs-2'
        style={{
          float: 'left'
        }}
        >
        <button
          onClick={onClick.bind(this)}
          className={btnClass}
          >
          {hidden ? id : word}
        </button>
      </li>
    );
  }
}

export default connect(
  (state, ownProps) => {
    return {
      id: ownProps.id,
      word: ownProps.word,
      onClick: ownProps.onClick,
      hidden: ownProps.hidden,
    };
  }
)(WordItem);
