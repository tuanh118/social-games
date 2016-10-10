import React, { Component } from 'react';

import classNames from 'classnames';

export default class WordItem extends Component {

  state = {
    isClicked: false,
  };

  toggleItem() {
    console.log('clicked');
    this.setState({
      isClicked: !this.state.isClicked,
    });
  }

  render() {
    const { id, word } = this.props;
    const { isClicked } =  this.state;

    const btnClass = classNames('btn btn-default btn-large', { 'clicked': isClicked });
    
    return (
      <li
        className='col-xs-2'
        style={{
          float: 'left'
        }}
        >
        <button
          onClick={this.toggleItem.bind(this)}
          className={btnClass}
          >
          {isClicked ? word : id}
        </button>
      </li>
    );
  }
}
