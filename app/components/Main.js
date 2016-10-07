import React from 'react';

const Main = (props) => (
    <div className='main-container'>
        { props.children }
    </div>
);

Main.propTypes = {
  children: React.PropTypes.node,
};

module.exports = Main;
