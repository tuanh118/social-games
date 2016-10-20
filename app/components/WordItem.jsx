import React, { Component } from 'react';

import classNames from 'classnames';

export default class WordItem extends Component {

  render() {
    const { id, word, onClick, hidden } = this.props;

    const btnClass = classNames('btn btn-default btn-large', { 'clicked': hidden });

    return (
      <li
        className='col-xs-2'
        style={{
          float: 'left',
          padding: 20,
        }}
        >
        <button
          onClick={onClick.bind(this)}
          className={btnClass}
          style={{
            fontSize: 20,
          }}
          >
          {hidden ? id : word}
        </button>
      </li>
    );
  }
}
